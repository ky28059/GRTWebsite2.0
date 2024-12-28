import {Metadata} from 'next';
import Section from '../../../../components/Section';
import CaptionedImage from '../../../../components/CaptionedImage';
import Resource from '../../resources/Resource';
import ImageCarousel from '../../../../components/ImageCarousel';


export const metadata: Metadata = {
    title: '2024'
}

export default function GRT2023() {
    return (
        <>
            <Section>
                <h1 className="text-4xl font-medium mb-3 text-center">
                    FIRST | Crescendo
                </h1>
                <h3 className="text-lg text-center mb-6">GRT 2023-2024</h3>
                <p className="font-light mb-6">
                    In the CRESCENDO! game, robots could choose from a variety of scoring objectives:
                    the speaker (a shooter objective), the amp
                    (a vertical drop objective, which amplified all points for an alliance), the stage
                    (a climb objective, in which the robot had to lift itself off the ground), and the trapdoor
                    (another vertical slot objective that could only be accessed through the climb objective).
                </p>
                <p className="font-light">
                    Read more about the FRC game in the <a href="https://firstfrc.blob.core.windows.net/frc2024/Manual/2024GameManual.pdf" target="_blank" rel="noopener noreferrer">game manual</a>{' '}
                    and watch the <a href="https://www.youtube.com/watch?v=9keeDyFxzY4" target="_blank" rel="noopener noreferrer">game animation video</a> on YouTube.
                </p>
            </Section>

            <Section secondary className="flex flex-col-reverse lg:flex-row gap-x-12 gap-y-8 justify-center">
                <img
                    src="/assets/seasons/2024-robot.jpg"
                    alt="2024 robot"
                    className="rounded w-full max-w-md mx-auto lg:mx-0"
                />
                <div className="lg:py-4 lg:max-w-lg">
                    <h2 className="text-2xl font-medium mb-6">
                        DISSONANCE — OUR 2024 ROBOT
                    </h2>
                    <div className="font-light">
                        <p className="flex gap-2">
                            <strong className="font-medium">Name:</strong>
                            Dissonance
                        </p>
                        <p className="flex gap-2">
                            <strong className="font-medium">Dimensions:</strong>
                            36.575” W x 36.575” L x 25.5” H
                        </p>
                        <p className="flex gap-2">
                            <strong className="font-medium">Weight:</strong>
                            120 lbs
                        </p>
                        <p><strong className="font-medium">Features:</strong></p>
                        <ul className="list-outside list-disc pl-8">
                            <li>2 stage intake elevator with plastic sliders</li>
                            <li>4 bar linkage intake/outtake with Falcon 500 pivot motor</li>
                            <li>Dual 2-stage climb arms</li>
                            <li>Dual opposing horizontal axle shooter with sector gear pivot</li>
                            <li>Custom Swerve: Gear Ratio of 6.92, prioritizing acceleration</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Resource name="Technical Binder" src="/assets/resources/2024-technical-binder.jpg" href="/resources/2024-technical-binder.pdf">
                    Our 2024 Technical Binder highlights our CRESCENDO! season robot, Dissonance. We provide comprehensive
                    documentation of our design process including: strategy, timelines, custom swerve, prototyping, mechanism
                    iterations, and software.
                </Resource>
                <Resource name="Impact Booklet" src="/assets/resources/2024-impact-binder.jpg" href="/resources/2024-impact-booklet.pdf">
                    Our 2024 Impact Booklet celebrates our team growth and outreach during the 2023-2024 school year and
                    includes our Impact Award submission for the Charged Up season. We feature preseason events, our new
                    FLL Explore Team, our moonshot projects, and a variety of annual GRT outreach traditions.
                </Resource>
            </Section>

            <Section>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Competitions
                </h2>
                <p className="font-light mb-8">
                    This year, our team members attended both the Silicon Valley Regional in San Jose and the
                    Idaho Regional in Boise. During competition, all students had the opportunity to contribute
                    to the robot’s success working in the drive team, pit crew, strategy team, Impact Award presentation
                    team, and/or scouting team.
                </p>

                <h3 className="text-lg font-medium mb-3">
                    Silicon Valley Regional
                </h3>
                <div className="mb-5 pl-6 border-l-4 border-secondary/50">
                    <p className="flex gap-2 font-light">
                        <strong className="font-normal">Rank:</strong>36
                    </p>
                    <p className="flex gap-2 font-light">
                        <strong className="font-normal">2rd-seed alliance:</strong>
                        841, 987, 192
                    </p>
                </div>
                {/* Transitions between an image carousel on small screens, and just displaying all 3 images on large screens. */}
                <ImageCarousel
                    sources={['/assets/seasons/2023-utah-2.jpg', '/assets/seasons/2023-utah-3.jpg', '/assets/seasons/2023-utah-1.jpg']}
                    alts={['Utah triple balance', 'Utah pit-crew work', 'Utah team cheer']}
                    className="lg:hidden mb-10"
                />


                <h3 className="text-lg font-medium mb-3">
                    Idaho Regional
                </h3>
                <div className="mb-5 pl-6 border-l-4 border-secondary/50">
                    <p className="flex gap-2 font-light">
                        <strong className="font-normal">Rank:</strong> 22
                    </p>
                    <p className="flex gap-2 font-light">
                        <strong className="font-normal">Event Winner with 7th-seed alliance:</strong>
                        2122, 192, 1891
                    </p>
                </div>
                <div className="hidden lg:flex gap-1.5 mb-10">
                    <img src="/assets/seasons/2024-idaho-1.jpg" alt="idaho alliance photo"
                         className="min-w-0 rounded-sm w-1/3"/>
                    <img src="/assets/seasons/2024-idaho-2.jpg" alt="idaho match" className="min-w-0 rounded-sm w-1/3"/>
                    <img src="/assets/seasons/2024-idaho-3.jpg" alt="idaho drive team" className="min-w-0 rounded-sm w-1/3"/>
                </div>
            </Section>
        </>
    )
}
