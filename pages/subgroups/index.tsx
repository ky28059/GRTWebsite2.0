import Head from 'next/head';
import Layout from '../../components/Layout';
import ImageBox from '../../components/ImageBox';


export default function Subgroups() {
    return (
        <Layout>
            <Head>
                <title>Subgroups | GRT</title>
            </Head>

            <h1 className="text-4xl font-medium mb-6 text-center">
                Subgroups
            </h1>

            <p className="font-light mb-10">
                While all GRT members are taught how to CAD and machine in the shop, GRT contains several subgroups
                where members can receive specialized training in specific areas of robotics{/* TODO: wording */}.
                During build season, subgroup members are assigned special tasks related to their area of expertise.
                At GRT, our seven subgroups are:
            </p>

            <section className="flex flex-wrap justify-center gap-6">
                {/* TODO: use sparkmax image? */}
                <ImageBox name="Controls" src="/assets/subgroups/2017-controls-vision.jpg" href="/subgroups/controls">
                    Responsible for robot software, wiring, and electrical components.
                </ImageBox>
                <ImageBox name="Drivetrain" src="/assets/subgroups/2017-swerve-module.jpg" href="/subgroups/drivetrain">
                    Responsible for designing and machining gearboxes for the robot's drivetrain.
                </ImageBox>
                <ImageBox name="CNC" src="/assets/subgroups/cnc.jpg" href="/subgroups/cnc">
                    Responsible for operating our CNC mill.
                </ImageBox>
                <ImageBox name="Pneumatics" src="/assets/subgroups/pneumatics.jpg" href="/subgroups/pneumatics">
                    Responsible for designing and operating pneumatic systems on the robot.
                </ImageBox>
                {/* TODO: image */}
                <ImageBox name="Animation" src="/assets/subgroups/animation-thumbnail.jpg" href="/subgroups/animation">
                    Responsible for creating and submitting 3D animations to FIRST.
                </ImageBox>
                <ImageBox name="Welding" src="/assets/subgroups/welding.jpg" href="/subgroups/welding">
                    Responsible for operating our welder.
                </ImageBox>
                <ImageBox name="Business" src="/assets/subgroups/2023-jls-btsn.jpg" href="/subgroups/business">
                    Responsible for organizing outreach events and writing grants and essays.
                </ImageBox>
            </section>
        </Layout>
    )
}
