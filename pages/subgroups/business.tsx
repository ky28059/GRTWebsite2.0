import Head from 'next/head';
import Layout from '../../components/Layout';
import CaptionedImage from '../../components/CaptionedImage';


export default function Business() {
    return (
        <Layout>
            <Head>
                <title>Business | GRT</title>
            </Head>

            <h1 className="text-4xl font-medium mb-6 text-center">
                Business
            </h1>

            {/* <h3 className="text-lg font-medium mb-3">About</h3> */}
            <p className="font-light mb-6">
                The Business group of the Gunn Robotics Team is primarily responsible for funding and outreach. We represent
                GRT when applying for grants, sponsorhips, and competing for awards. Additionally, we write all of the
                essays that are needed for awards and manage our interactions with other entities, such as corporations
                and community members.
            </p>
            <p className="font-light mb-6">
                A second goal is to reach out to the community to help spread knowledge about robotics and engineering.
                Every year, our team hosts an FLL qualifying tournament and a robotics-focused summer camp to give younger
                students hands-on opportunities with engineering. We also participate in additional events such as the
                Palo Alto May Fete Parade, Apricot STEM Fair, and the Nixon Elementary School Science Night to showcase
                our robot.
            </p>
            <CaptionedImage src="/assets/subgroups/2022-grt-may-fete.png" alt="May fete parade" className="max-w-2xl mx-auto">
                GRT in the 2022 Palo Alto May Fete parade.
            </CaptionedImage>

            {/* TODO: if COVID is relevant enough to mention, rewrite that section here */}
            {/* TODO: more content */}
        </Layout>
    )
}
