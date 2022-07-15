import Head from 'next/head';
import Layout from '../components/Layout';


export default function Donations() {
    return (
        <Layout>
            <Head>
                <title>Donations | GRT</title>
            </Head>

            <h1 className="text-4xl font-medium mb-8 text-center">
                Donations
            </h1>

            <p className="font-light mb-7">
                The Gunn Robotics Team is always in need of support, and we greatly appreciate any help you can give us.
            </p>

            <strong className="block font-medium mb-2">Financial donations</strong>
            <p className="font-light mb-4">
                If you have the financial means to do so, we greatly appreciate your monetary support. your donation
                helps cover purchasing and mainenance of equipment and tools, materials, and costs associated with
                competition. To donate, there are several options:
            </p>
            <p className="font-light mb-3">
                On paper, please make checks payable to our volunteer boosters organization:
            </p>

            {/* TODO: can this be abstracted with FIRST's block quote? */}
            <div className="border-l-4 border-gray-100 bg-gray-50 px-6 py-4 mb-4">
                <p>Gunn Robotics Team Boosters</p>
                <p>780 Arastradero Rd.</p>
                <p>Palo Alto, CA, 94306</p>
            </div>

            <p className="font-light mb-3">
                We also accept donations via PayPal:
            </p>
            {/* TODO: insert paypal image */}

            <p className="font-light mb-4">
                You can also use our <a href="https://www.brightfunds.org/organizations/grt-boosters" target="_blank" rel="noopener noreferrer">Bright Funds</a> site
                to donate.
            </p>

            <p className="font-light mb-10">
                If you want to see your donation in action, please feel free to stop by the shop (room L-5 at Gunn High
                School) for a tour! To set up a time, please email us at <a href="mailto:gunnrobotics192@gmail.com">gunnrobotics192@gmail.com</a>.
            </p>

            <strong className="block font-medium mb-2">Other ways to help</strong>
            <p className="font-light">
                If you do not have financial means to contribute to the team but would like to help in another way, please
                send us an email at the address mentioned above or visit us in L-5 at Gunn High School to find out other
                ways to fill our needs. If you have experience working in machine shops, engineering, computer science,
                or with an organization like FIRST, please let us know! We would love to have your expertise. Thank you!
            </p>
        </Layout>
    )
}
