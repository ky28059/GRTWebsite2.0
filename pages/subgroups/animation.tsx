import Head from 'next/head';
import Layout from '../../components/Layout';
import SectionHeader from '../../components/SectionHeader';
import CaptionedImage from '../../components/CaptionedImage';


export default function Controls() {
    return (
        <Layout>
            <Head>
                <title>Animation | GRT</title>
            </Head>

            <h1 className="text-4xl font-medium mb-6 text-center">
                Animation
            </h1>

            {/* <h3 className="text-lg font-medium mb-3">About</h3> */}
            <p className="font-light mb-10">
                The animation group produces 3D animations to compete for the annual FIRST Robotics Safety Animation Award
                and Digital Animation Award. The group works with software such as Autodesk Maya, Adobe Photoshop, and
                Adobe Premiere to create original and expressive animations while highlighting some of the medium's most
                exciting possibilities. Members work together to write stories, model objects, animate characters, and
                develop scenes.
            </p>
            {/* TODO: image of autodesk maya rendering? */}

            <SectionHeader id="projects">Projects</SectionHeader>
            <p className="font-light mb-6">
                The animation team primarily participates in the Safety Animation and FIRST Competition projects. For
                those competitions, we follow a certain theme announced by FIRST, creating a storyline and scenes and
                producing an animation including a soundtrack. The Safety Animation Project is focused on the theme of
                safety{/* TODO: "...while the FIRST competition is themed around ..." */}. View all of our past animations
                here:
            </p>
            <iframe
                className="w-full aspect-video rounded-lg shadow-lg max-w-4xl mx-auto border-none mb-6"
                src="https://www.youtube.com/embed/videoseries?list=PLPDNSe7IWHTy2KebpvTLlg_2SjrqGteBk"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
            <p className="font-light mb-10">
                Beyond the FIRST Safety and Digital Animation awards, the animation team helps other groups with graphics
                and designs where needed. In the 2020-2021 season, the animation team worked with the Game Design project
                group to create a storyboard and script for an animation for their game submission to the FRC Game Design
                Challenge. In the 2018-2019 season, GRT prepared for the build season by producing its own offseason
                robotics competition, meant to mirror the feeling of build season and gave rookies a taste of the second
                semester rush. The animation team provided graphics to flesh-out the rulebook and represent important parts
                of the game visually.
            </p>

            <SectionHeader id="training">Training</SectionHeader>
            <p className="font-light">
                Animation team rookies are not required to have any animation knowledge prior to joining. At the beginning
                of each year, the animation lead organizes 3D modeling sessions in which both rookies and veterans can
                work together. Veterans teach rookies what they need to know to participate. Rookies also utilize free,
                online resources such as YouTube tutorials, 3D modeling forums, and open source projects. After training,
                all members know how to model, texture, and rig. Animation of models, scene composition, lighting, camera
                angles, and rendering are all taught by the veterans most experienced in those areas.
            </p>
            {/* TODO: images; composition, rendering, etc. */}
        </Layout>
    )
}
