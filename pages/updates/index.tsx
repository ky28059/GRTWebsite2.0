import {ReactNode} from 'react';
import Head from 'next/head';
import WriteupLayout from '../../components/WriteupLayout';
import CaptionedImage from '../../components/CaptionedImage';


// TODO: is using `WriteupLayout` here appropriate?
export default function Updates2022() {
    return (
        <WriteupLayout>
            <Head>
                <title>2022 Updates | GRT</title>
            </Head>

            <section className="space-y-16 py-16">
                <Update name="January Update" className="container">
                    <p className="font-light mb-6">
                        This January, we have been hard at work for the 2022 FIRST Robotics Competition, Rapid React. We
                        split into four mechanism groups: intake, shooter, climb, and internals. Each group spent the first
                        week brainstorming and prototyping so we wouldn't come to a hasty decision without testing. Over the
                        next two weeks we worked on 3D modeling, more prototyping, and redesigning. During the last few days
                        of January we started machining parts for our first complete robot this season!
                    </p>
                    <img src="/assets/updates/2022/january-update.png" alt="January update" className="w-full max-w-2xl mx-auto mb-4" />
                    <p className="font-light mb-6">
                        Our animation team also submitted the 2022 FIRST animation: Droid Drop Off on January 27.
                    </p>
                    <iframe
                        className="w-full aspect-video rounded-lg shadow-lg max-w-2xl mx-auto border-none"
                        src="https://www.youtube.com/embed/QS8HXqAl1dA"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </Update>

                <Update name="November Update" className="container">
                    <p className="font-light mb-6">
                        Throughout November, GRT has been competing between our two class periods in a competition designed
                        to simulate build season for the FRC tournament. GRT uses this competition as training to discover
                        and solve problems and to develop team coordination and planning to further prepare us for the
                        FIRST robotics tournament.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <img src="/assets/updates/2022/november-update-1.png" alt="November update 1" />
                        <img src="/assets/updates/2022/november-update-2.png" alt="November update 2" />
                    </div>
                </Update>

                <Update name="October Update" className="container">
                    <p className="font-light mb-6">
                        During the month of October, GRT has been passionately working on the annual haunted house project
                        for our community. We constructed pneumatically-operated "haunted house" mechanisms inspired by
                        elementary schoolers' drawings. We showcased our haunted house during the last week of October at
                        Juana Briones Elementary School.
                    </p>
                    <img src="/assets/updates/2022/haunted-house.png" alt="GRT Haunted House" className="w-full max-w-2xl mx-auto mb-4" />
                    <p className="font-light">
                        In addition to haunted house mechanisms, shop time has focused on additional training during October
                        for controls, drivetrain, pneumatics, CNC, welding, animation, and business. New members accepted
                        into these subgroups will help our team in future projects.
                    </p>
                </Update>

                <Update name="September Update">
                    <p className="container font-light">
                        Our team completed shop and safety training during the month of September. Everyone will be shop
                        safe and ready for machining in early October. The three main training sections taught at GRT are
                        lathe, mill, and hand tools. Some operations we taught were parting and turning for lathe, slotting
                        and facing for mill, and a variety of hand tools and machines like the chop saw and hand drill.
                    </p>

                    <ScrollSection>
                        <ScrollSnapImage src="/assets/updates/2022/september-update-1.png" alt="September update 1" />
                        <ScrollSnapImage src="/assets/updates/2022/september-update-2.png" alt="September update 2" />
                        <ScrollSnapImage src="/assets/updates/2022/september-update-3.png" alt="September update 3" />
                        <ScrollSnapImage src="/assets/updates/2022/september-update-4.png" alt="September update 4" />
                    </ScrollSection>

                    <p className="container font-light">
                        We also had our GRT Beach Trip where the whole team spent time together at Monterey Bay. Everyone
                        had lunch together and participated in an assortment of fun activities from volleyball, sand castle
                        competitions, football, and hanging out at the water. At the end of our trip, we all hiked up the
                        cliffside and took a group picture to commemorate the experience.
                    </p>

                    <ScrollSection>
                        <ScrollSnapImage src="/assets/updates/2022/beach-trip-2.jpg" alt="Beach trip 2" />
                        <ScrollSnapImage src="/assets/updates/2022/beach-trip-3.jpg" alt="Beach trip 3" />
                        <ScrollSnapImage src="/assets/updates/2022/beach-trip-4.jpg" alt="Beach trip 4" />
                        <ScrollSnapImage src="/assets/updates/2022/beach-trip-5.jpg" alt="Beach trip 5" />
                    </ScrollSection>

                    <CaptionedImage src="/assets/updates/2022/beach-trip-1.png" alt="Beach trip 1" className="max-w-2xl mx-auto">
                        GRT 2021-2022
                    </CaptionedImage>
                </Update>
            </section>
        </WriteupLayout>
    )
}

// An update block. Renders a section with centered title.
function Update(props: {name: string, children: ReactNode, className?: string}) {
    return (
        <section className={props.className}>
            <h3 className="text-2xl font-medium mb-6 text-center">{props.name}</h3>
            {props.children}
        </section>
    )
}

// A scroll-snap, secondary colored section for displaying a separated row of small images.
// Pass `ScrollSnapImage`s as children.
function ScrollSection(props: {children: ReactNode}) {
    return (
        <section className="flex justify-center bg-[rgb(245,_245,_245)] my-6">
            <div className="flex gap-2 overflow-x-auto snap-x px-6 py-8">
                {props.children}
            </div>
        </section>
    )
}

// An image for use in a `ScrollSection`, snapping to their center on scroll.
function ScrollSnapImage(props: {src: string, alt: string}) {
    return (
        <img
            {...props}
            className="w-full max-w-sm snap-center"
        />
    )
}
