import {Metadata} from 'next';
import Section from '../../../../components/Section';
import CaptionedImage from '../../../../components/CaptionedImage';
import Resource from '../../resources/Resource';
import ImageCarousel from '../../../../components/ImageCarousel';


export const metadata: Metadata = {
    title: '2023'
}

export default function GRT2023() {
    return (
        <>
            <Section>
                <h1 className="text-4xl font-medium mb-3 text-center">
                    FIRST | Charged Up
                </h1>
                <h3 className="text-lg text-center mb-6">GRT 2022-2023</h3>
                <p className="font-light mb-6">
                    In the Charged Up game, robots were challenged to score cones and cubes in a grid of pegs and shelves.
                    During the endgame, robots balanced the charge station, an 8ft-long pivoting platform.
                </p>
                <p className="font-light">
                    Read more about the FRC game in the <a href="https://firstfrc.blob.core.windows.net/frc2023/Manual/2023FRCGameManual.pdf" target="_blank" rel="noopener noreferrer">game manual</a>{' '}
                    and watch the <a href="https://www.youtube.com/watch?v=0zpflsYc4PA" target="_blank" rel="noopener noreferrer">game animation video</a> on YouTube.
                </p>
            </Section>

            <Section secondary className="flex flex-col-reverse lg:flex-row gap-x-12 gap-y-8 justify-center">
                <img
                    src="/assets/seasons/2023-robot.jpg"
                    alt="2023 robot"
                    className="rounded w-full max-w-md mx-auto lg:mx-0"
                />
                <div className="lg:py-4 lg:max-w-lg">
                    <h2 className="text-2xl font-medium mb-6">
                        VERMILION — OUR 2023 ROBOT
                    </h2>
                    <div className="font-light">
                        <p className="flex gap-2">
                            <strong className="font-medium">Name:</strong>
                            Vermilion
                        </p>
                        <p className="flex gap-2">
                            <strong className="font-medium">Dimensions:</strong>
                            26.5” W x 33.25” L x 38.5” H
                        </p>
                        <p className="flex gap-2">
                            <strong className="font-medium">Weight:</strong>
                            100 lbs
                        </p>
                        <p><strong className="font-medium">Features:</strong></p>
                        <ul className="list-outside list-disc pl-8">
                            <li>Student-designed and manufactured</li>
                            <li>Swerve drivetrain reaching 16.7 ft/s max speed</li>
                            <li>2-stage, fixed-angle, cascade-strung elevator capable of reaching all 3 grid levels</li>
                            <li>Roller intake with gripping feature, capable of intaking and holding cubes and cones</li>
                            <li>Auto-balance and auto-deposit sequences</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Resource name="Technical Binder" src="/assets/resources/2023-technical-binder.jpg" href="/resources/2023-technical-binder.pdf">
                    Our 2023 Technical Binder highlights our Charged Up season robot, Vermillion. We provide comprehensive
                    documentation of our design process including: strategy, timelines, custom swerve, prototyping, mechanism
                    iterations, and software.
                </Resource>
                <Resource name="Impact Booklet" src="/assets/resources/2023-impact-booklet.jpg" href="/resources/2023-impact-booklet.pdf">
                    Our 2023 Impact Booklet celebrates our team growth and outreach during the 2022-2023 school year and
                    includes our Impact Award submission for the Charged Up season. We feature preseason events, our new
                    FLL Explore Team, our moonshot projects, and a variety of annual GRT outreach traditions.
                </Resource>
            </Section>

            <Section>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Competitions
                </h2>
                <p className="font-light mb-8">
                    This year, over 90% of our team members attended both the Utah Regional in Salt Lake City and the
                    Monterey Bay Regional in Seaside. During competition, all students had the opportunity to contribute
                    to the robot’s success working in the drive team, pit crew, strategy team, Impact Award presentation
                    team, and/or scouting team.
                </p>

                <h3 className="text-lg font-medium mb-3">
                    Utah Regional
                </h3>
                <div className="mb-5 pl-6 border-l-4 border-secondary/50">
                    <p className="flex gap-2 font-light">
                        <strong className="font-normal">Rank:</strong> 8
                    </p>
                    <p className="flex gap-2 font-light">
                        <strong className="font-normal">Semifinalists with 3rd-seed alliance:</strong>
                        5851, 192, 9037
                    </p>
                    <p>Autonomous award</p>
                </div>
                {/* Transitions between an image carousel on small screens, and just displaying all 3 images on large screens. */}
                <ImageCarousel
                    sources={['/assets/seasons/2023-utah-2.jpg', '/assets/seasons/2023-utah-3.jpg', '/assets/seasons/2023-utah-1.jpg']}
                    alts={['Utah triple balance', 'Utah pit-crew work', 'Utah team cheer']}
                    className="lg:hidden mb-10"
                />
                <div className="hidden lg:flex gap-1.5 mb-10">
                    <img src="/assets/seasons/2023-utah-2.jpg" alt="Utah triple balance" className="min-w-0 rounded-sm" />
                    <img src="/assets/seasons/2023-utah-3.jpg" alt="Utah pit-crew work" className="min-w-0 rounded-sm" />
                    <img src="/assets/seasons/2023-utah-1.jpg" alt="Utah team cheer" className="min-w-0 rounded-sm" />
                </div>

                <h3 className="text-lg font-medium mb-3">
                    Monterey Bay Regional
                </h3>
                <div className="mb-5 pl-6 border-l-4 border-secondary/50">
                    <p className="flex gap-2 font-light">
                        <strong className="font-normal">Rank:</strong> 22
                    </p>
                    <p className="flex gap-2 font-light">
                        <strong className="font-normal">Quarterfinalists with 5th-seed alliance:</strong>
                        2486, 192, 6884
                    </p>
                    <p>Quality award</p>
                </div>
                {/* TODO: photos */}
            </Section>
        </>
    )
}
