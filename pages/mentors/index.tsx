import Head from 'next/head';
import Layout from '../../components/Layout';
import ImageBox from '../../components/ImageBox';


export default function Mentors() {
    return (
        <Layout>
            <Head>
                <title>Mentors | GRT</title>
            </Head>

            <h1 className="text-4xl font-medium mb-6 text-center">
                Meet Our Mentors
            </h1>

            <div className="rounded p-6 mb-6 bg-gray-100 font-light">
                <p className="mb-2 text-lg">
                    Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.
                </p>
                {/* TODO: this is perhaps too cliche as an "ancient proverb" */}
                <p className="italic">— Ancient proverb</p>
            </div>

            {/* TODO: rewrite this */}
            <p className="font-light mb-4">
                At GRT, we pride ourselves on being primarily student-led, but we could not achieve any of our successes
                without the incredible guidance of our mentors. Our mentors come from a wide range of engineering backgrounds,
                which means they all have something unique and valuable to teach us. Our mentors are extremely adept at
                giving us the tools we need to find answers and innovate; they "teach us to fish."
            </p>
            <p className="font-light mb-10">
                GRT would like to thank our 5 amazing mentors:
            </p>

            {/* TODO: replace images with better / more recent ones instead of repeating the ones on the page? */}
            <section className="flex flex-wrap justify-center gap-6">
                <ImageBox name="Kristina Granlund-Moyer" src="/assets/mentors/Granlund.jpg" href="/mentors/kristina">
                    Supervising mentor and engineering teacher at Gunn.
                </ImageBox>
                <ImageBox name="Seth Mallory" src="/assets/mentors/Seth.jpg" href="/mentors/seth">
                    Supervising mentor, Transit Mechanic at VTA.
                </ImageBox>
                <ImageBox name="Karl Van Dyk" src="/assets/mentors/Karl.jpg" href="/mentors/karl">
                    Mentor, Mechanical Engineer. {/* TODO: position */}
                </ImageBox>
                <ImageBox name="Phil Roan" src="/assets/mentors/Phil.jpg" href="/mentors/phil">
                    Mentor, Principal Engineer of Robotics at BSH Home Appliances.
                </ImageBox>
                {/* TODO: image */}
                <ImageBox name="Zach Walker" src="/assets/mentors/Zach.jpg" href="/mentors/zach">
                    Mentor, Senior Manager at Lucid Motors.
                </ImageBox>
            </section>
        </Layout>
    )
}
