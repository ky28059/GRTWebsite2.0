import Head from 'next/head';
import Layout from '../../components/Layout';
import SectionHeader from '../../components/SectionHeader';
import CaptionedImage from '../../components/CaptionedImage';


export default function CNC() {
    return (
        <Layout>
            <Head>
                <title>CNC | GRT</title>
            </Head>

            <h1 className="text-4xl font-medium mb-6 text-center">
                CNC
            </h1>

            {/* <h3 className="text-lg font-medium mb-3">History</h3> */}
            <p className="font-light mb-6">
                Here on GRT, we are fortunate enough to have a CNC mill in our shop dedicated to team usage. This opens
                up all kinds of possibilities when we design and manufacture parts for prototypes, the robot, and other
                projects. Our original CNC mill was a used Hurco machine, far older than the team itself. Although it
                could produce parts with complex contours, the software was difficult to work with and highly limiting,
                and the control hardware began to sporadically fail. With a generous grant from our sponsor the Palo Alto
                Partners In Education, we were able to purchase a Milltronics VKM4 mill in 2009.
            </p>
            <CaptionedImage src="/assets/subgroups/cam.jpg" alt="CNC CAM software" className="max-w-2xl mx-auto mb-4">
                Autodesk Inventor is used to generate toolpaths for the CNC mill.
            </CaptionedImage>
            <p className="font-light mb-10">
                The CNC is much more complex than using a manual mill. Because of this, we require all students who wish
                to be trained on the CNC to be well versed with our Bridgeport manual mills. During Fall 2010, a few of
                our rookie team members took an interest in our machine, affectionately named Fluffy. They spent hours
                learning machine operation and how to use CAM software with one of our mentors. Ever since then, the CNC
                group has been a consistent, highly skilled group within the team.
            </p>

            <SectionHeader id="what-we-do">What we do</SectionHeader>
            <p className="font-light mb-6">
                Our primary role within the team is manufacturing the most complicated and intensive mill pieces that the
                team produces: the plates for our custom gearboxes. Our gearboxes are freshly designed or iterated upon
                every year, meaning the needs for each run of plates differs from year to year, and often week to week
                during build. The other primary manufacturing goal of the CNC group also lies within the realm of drive
                train, and that is manufacturing the box beam tubes that house the belts for the drive system. These two
                main production tasks require an intense knowledge of our chosen CAM software, MasterCAM, as well as of
                the machining process in general.
            </p>
            <CaptionedImage src="/assets/subgroups/cnc.jpg" alt="CNC mill" className="max-w-2xl mx-auto mb-4">
                A CNC member inserts a collet into the CNC mill.
            </CaptionedImage>
            <p className="font-light mb-10">
                To prepare students for this work we run a complex training program every fall to prepare the students
                in the group for meeting the needs of the team. When we do not have any drive train machining on our plates,
                we transition to producing the more complicated mechanism parts for the robot that often cannot be produced
                efficiently on one of our manual mills. If we even get ahead of that task, we start machining less
                complicated parts to speed up the manufacturing process. Parts run on Fluffy are often pocketed in order
                to save weight for competition requirements and add a little flair.
            </p>

            <SectionHeader id="challenges">Challenges</SectionHeader>
            <p className="font-light">
                The biggest challenge we encounter is workholding. We will often need to come up with creative solutions
                to holding our stock metal, plastic, or whatever else we happen to be machining. The majority of our time
                spent using the mill is all about figuring out how to mount the stock for typically unique parts. It will
                not be uncommon for us to have to create mounting fixtures, such as aluminum or wooden sub-plates that we
                bolt and clamp the stock to. Sheet metal tends to be difficult to mount effectively due to bending and the
                necessity of using a mount plate. The challenge of workholding is greatest when machining very large parts,
                especially when those parts exceed Fluffy's travel range and require multiple CAMs and remounting, as zeroes
                and orientation must be maintained when repositioning the part.
            </p>
        </Layout>
    )
}
