import Head from 'next/head';
import Layout from '../components/Layout';
import UpdatesDoc from '../components/UpdatesDoc';
import {docs_v1, google} from 'googleapis';


export default function Updates(props: docs_v1.Schema$Document) {
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

    return {
        props: res.data
    }
}
