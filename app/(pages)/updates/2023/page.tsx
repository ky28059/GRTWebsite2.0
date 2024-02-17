import {Metadata} from 'next';
import sharp from 'sharp';
import {google} from 'googleapis';
import Section from '../../../../components/Section';
import UpdatesDoc from '../UpdatesDoc';


export const metadata: Metadata = {
    title: 'Updates'
}

export default async function Updates() {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY!.replace(/\\n/g, '\n')
        },
        scopes: 'https://www.googleapis.com/auth/documents.readonly',
    });

    const docs = google.docs({ version: 'v1', auth });
    const res = await docs.documents.get({ documentId: process.env.DOC_ID });

    // Parse temporary `contentUri` links to base64 encoded data URIs so they are always valid.
    const parsedUris: {[key: string]: string} = {};
    if (res.data.inlineObjects) for (const [key, object] of Object.entries(res.data.inlineObjects)) {
        const embeddedObject = object.inlineObjectProperties?.embeddedObject;
        if (!embeddedObject?.imageProperties?.contentUri) continue;

        const blob = await (await fetch(embeddedObject.imageProperties.contentUri)).blob();
        const buffer = Buffer.from(await blob.arrayBuffer());

        let img = sharp(buffer, {animated: true});
        const stats = await img.metadata();
        const width = stats.width ?? 0;
        const height = (stats.height ?? 0) / (stats.pages ?? 1);

        const crop = embeddedObject.imageProperties.cropProperties;
        const offsetLeftPx = (crop?.offsetLeft ?? 0) * width;
        const offsetRightPx = (crop?.offsetRight ?? 0) * width;
        const offsetTopPx = (crop?.offsetTop ?? 0) * height;
        const offsetBottomPx = (crop?.offsetBottom ?? 0) * height;

        if (offsetLeftPx || offsetRightPx || offsetTopPx || offsetBottomPx) img = img.extract({
            left: Math.round(offsetLeftPx),
            top: Math.round(offsetTopPx),
            width: Math.round(width - offsetLeftPx - offsetRightPx),
            height: Math.round(height - offsetTopPx - offsetBottomPx)
        });
        // TODO: fix
        if (crop?.angle) img = img.rotate(crop.angle * 180 / Math.PI).resize({
            width, //: Math.round(width - offsetLeftPx - offsetRightPx),
            height, //: Math.round(height - offsetTopPx - offsetBottomPx),
            fit: 'cover'
        });

        parsedUris[key] = stats.pages
            ? `data:image/webp;base64,${(await img.webp().toBuffer()).toString('base64')}`
            : `data:image/jpeg;base64,${(await img.jpeg().toBuffer()).toString('base64')}`;
    }

    return (
        <Section>
            <UpdatesDoc document={res.data} parsedUris={parsedUris} />
        </Section>
    )
}
