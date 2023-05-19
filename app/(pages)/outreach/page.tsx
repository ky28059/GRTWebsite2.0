import {Metadata} from 'next';
import Link from 'next/link';
import Section from '../../../components/Section';
import SectionHeader from '../../../components/SectionHeader';
import ImageCarousel from '../../../components/ImageCarousel';


export const metadata: Metadata = {
    title: 'Outreach'
}

export default function Outreach() {
    return (
        <>
            <div className="relative py-24 bg-black/40 text-white text-center">
                <video
                    className="absolute inset-0 w-full h-full object-cover object-center -z-10"
                    src="/assets/outreach/may-fete-2023.mp4"
                    loop
                    autoPlay
                    muted
                />

                <h1 className="text-4xl font-medium mb-2">
                    Outreach
                </h1>
                {/* TODO: actual numbers */}
                <h2 className="text-xl font-medium">
                    2000+ HOURS ⬩ 450+ STUDENTS IMPACTED ⬩ 100% PARTICIPATION
                </h2>
            </div>

            <Section className="flex gap-6">
                {/* TODO: better responsivity */}
                <aside className="hidden lg:block pl-8 pr-10 py-8 sticky top-0 self-start w-64 xl:w-80 2xl:w-[22rem] flex-none">
                    <h3 className="font-medium text-lg mb-4">Table of contents</h3>

                    <h4 className="font-medium mb-1">Annual outreach</h4>
                    <ul className="list-disc list-outside pl-8 flex flex-col gap-1 mb-3">
                        <li>
                            <a href="#haunted-house" className="hover:underline">Haunted House</a>
                        </li>
                        <li>
                            <a href="#fll" className="hover:underline">FLL</a>
                        </li>
                        <li>
                            <a href="#showcases" className="hover:underline">Showcases</a>
                        </li>
                    </ul>

                    <h4 className="font-medium mb-1">Special projects</h4>
                    <ul className="list-disc list-outside pl-8 flex flex-col gap-1">
                        <li>
                            <a href="#trumpet" className="hover:underline">Trumpet</a>
                        </li>
                        <li>
                            <a href="#soccerduck" className="hover:underline">SoccerDuck</a>
                        </li>
                        <li>
                            <a href="#upcoming" className="hover:underline">Upcoming</a>
                        </li>
                    </ul>
                </aside>

                <div className="sm:py-8">
                    <h2 className="text-2xl font-medium mb-4">Annual outreach</h2>

                    <SectionHeader id="haunted-house">Haunted House</SectionHeader>
                    <p className="mb-8">
                        Every October, we design and showcase a haunted house for Juana Briones Elementary School. This
                        partnership has been going on for the past few years and helps establish a connection between
                        younger and older students. Many current GRT students are Briones alums!
                    </p>
                    <ImageCarousel
                        sources={['/assets/outreach/haunted-house-1.jpg', '/assets/outreach/haunted-house-2.JPG', '/assets/outreach/haunted-house-3.jpg']}
                        alts={['Briones students at the GRT shop', 'Machining for haunted house in the GRT shop', 'Haunted House at Briones']}
                        captions={[
                            'Briones students arrive at the Gunn robotics shop to sketch ideas.',
                            'Over the next few weeks, students design and build pneumatic-powered mechanisms to mount on the trailer house.',
                            'Showcasing the haunted house during the day for class visits and through recess and lunch.'
                        ]}
                        className="mb-20"
                    />

                    <SectionHeader id="fll">FLL</SectionHeader>
                    <p className="mb-8">
                        Every November, GRT organizes and hosts a First Lego League competition for local Bay Area teams.
                        Every GRT member plays a role in putting on this event. Find local FLL events on the{' '}
                        <a href="https://www.playingatlearning.org/events/categories/fll/" target="_blank" rel="noopener noreferrer">FIRST NorCal website</a>.
                    </p>
                    <ImageCarousel
                        sources={['/assets/outreach/fll-1.jpg', '/assets/outreach/fll-2.jpg']}
                        alts={['FLL competition', 'GRT team photo']}
                        captions={['Teams competing at our 2022 tournament.', 'GRT team photo post-tournament.']}
                        className="mb-16"
                    />

                    <SectionHeader id="showcases">Showcases</SectionHeader>
                    <p className="mb-16">
                        GRT showcases our robot at various locations around the Bay, including local middle and elementary
                        Back-to-School nights!
                    </p>

                    <h2 className="text-2xl font-medium mb-4">Special projects</h2>

                    <SectionHeader id="trumpet">Trumpet</SectionHeader>
                    <p className="mb-6">
                        A local elementary school student with cerebral palsy contacted GRT in search of a device that
                        would help him play trumpet. Check out the <Link href="/resources">Resources</Link> tab for more
                        information, the User Guide, and related files for 3D printing.
                    </p>
                    <ImageCarousel
                        sources={['/assets/outreach/trumpet-1.jpg', '/assets/outreach/trumpet-2.jpg']}
                        alts={['Angled view', 'Trumpet in action']}
                        className="mb-10"
                    />

                    <SectionHeader id="soccerduck">SoccerDuck</SectionHeader>
                    <p className="mb-6">
                        After Joel’s parents contacted GRT seeking a device that would enable Joel to play soccer with
                        his brother, GRT students spent the next few months designing and building a custom wheelchair
                        attachment. Check out the <Link href="/resources">Resources</Link> tab for more information and
                        the User Guide.
                    </p>
                    <ImageCarousel
                        sources={['/assets/outreach/wheelchair-1.jpg', '/assets/outreach/wheelchair-2.jpg']}
                        alts={['Preparing the mechanism', 'Testing with Joel']}
                        className="mb-10"
                    />

                    <SectionHeader id="upcoming">Upcoming</SectionHeader>
                    <p>In the works: Hand-Raising, T-Shirt Launcher, and a new FLL program at the YMCA!</p>
                </div>
            </Section>
        </>
    )
}
