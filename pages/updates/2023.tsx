import Head from 'next/head';
import Layout from '../../components/Layout';
import UpdatesDoc, {UpdatesDocProps} from '../../components/UpdatesDoc';
import {google} from 'googleapis';


export default function Updates(props: UpdatesDocProps) {
    return (
        <Layout>
            <Head>
                <title>Updates | GRT</title>
            </Head>

            <UpdatesDoc {...props} />
        </Layout>
    )
}

export async function getStaticProps() {
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
        const uri = object.inlineObjectProperties?.embeddedObject?.imageProperties?.contentUri;
        if (!uri) continue;

        const blob = await (await fetch(uri)).blob();
        const buffer = Buffer.from(await blob.arrayBuffer())
        parsedUris[key] = `data:image/png;base64,${buffer.toString('base64')}`;
    }

    return {
        props: {document: res.data, parsedUris}
    }
}
