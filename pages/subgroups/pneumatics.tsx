import Head from 'next/head';
import Layout from '../../components/Layout';
import CaptionedImage from '../../components/CaptionedImage';


export default function Pneumatics() {
    return (
        <Layout>
            <Head>
                <title>Pneumatics | GRT</title>
            </Head>

            <h1 className="text-4xl font-medium mb-6 text-center">
                Pneumatics
            </h1>

            {/* <h3 className="text-lg font-medium mb-3">About</h3> */}
            <p className="font-light mb-6">
                Pneumatics is the branch of engineering that involves the transmission of power using pressurized air
                (instead of, for instance, electricity). Typically, pressurized air ({'<'}100 pise) is stored in a tank
                using a compressor, and then it's released from the tank using pressure regulators, valves, and tubing.
                GRT's robots often have pneumatic systems powering mechanical parts, especially mechanisms that require
                motion.
            </p>
            <CaptionedImage src="/assets/subgroups/pneumatics.jpg" alt="Solenoids" className="max-w-2xl mx-auto mb-8">
                Pneumatic solenoids used by GRT. {/* TODO: better wording / remove this caption entirely? */}
            </CaptionedImage>

            <h3 className="text-lg font-medium mb-3">Training</h3>
            <p className="font-light">
                To start pneumatics training, members learn how to be safe using compressed air, and then go on to
                pneumatic components (e.g. tubing, actuators, solenoids, tanks, and safety equipment) so everyone
                understands the basic concepts behind each piece of equipment. Practice exercises are assigned, such as
                turning two single acting solenoids into one double acting solenoid. Planning, assembling, and
                troubleshooting all of the pneumatics components required for the "haunted house" project is the main
                training activity before build season.
            </p>

            {/* TODO: this section is very bare bones; consider adding more */}
        </Layout>
    )
}
