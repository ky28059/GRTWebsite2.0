import Head from 'next/head';
import WriteupLayout, {WriteupSection} from '../../components/WriteupLayout';
import CaptionedImage from '../../components/CaptionedImage';


export default function GRT2018() {
    return (
        <WriteupLayout>
            <Head>
                <title>2018 | GRT</title>
            </Head>

            <WriteupSection>
                <h1 className="text-4xl font-medium mb-3 text-center">
                    FIRST Power Up
                </h1>
                <h3 className="text-lg text-center mb-6">GRT 2017-2018</h3>
                <p className="font-light mb-6">
                    In 2018, GRT participated in the 2018 FRC game, FIRST Power Up. The season began early in the morning
                    for the reveal of the 2018 game as the team gathered to watch the kick off live and followed up with
                    a discussion about possible strategies for the game. Students then discussed the goals of the robot
                    and what capabilities it should have to be successful in the upcoming competitions. In the following week, {/* TODO: citation needed */}
                    the team experimented with possible mechanisms in the Alpha prototyping stage and the designs were
                    demonstrated in front of the team.
                </p>
                <p className="font-light mb-6">
                    After a group meeting, the team decided upon an initial design and the season progressed
                    into the Beta machining phase, where GRT created its first robot for testing. Testing this robot proved
                    that the initial design, which involved a linkage arm to raise power cubes, was not ideal, so the team
                    decided to modify the design. After designing a new mechanism in CAD, an elevator replaced the linkage.
                    Following this change, Omega machining began and identical robots Omega 1 and 2 were created. One of
                    these robots was sent to competition while the other remained at the shop for continued testing.
                </p>
                <CaptionedImage src="/assets/first/grt-2018.JPG" alt="GRT 2017-2018" className="max-w-3xl mx-auto">
                    GRT 2017-2018
                </CaptionedImage>
            </WriteupSection>

            <WriteupSection secondary>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Design
                </h2>
                <p className="font-light mb-6">
                    For FIRST Power Up, GRT elected to use a swerve drivetrain, which allowed the robot to spin while
                    moving in the same direction. This more complex drivetrain required the drivetrain and controls
                    subgroups to work extremely hard, but in the end the results were worth it. The robot also featured
                    an outer pickup mechanism to bring power cubes into the robot, and then an inner pickup to hold the
                    power cubes while the elevator lifted the cubes into the air. Both pickup mechanisms used flywheels,
                    which allowed the blocks to be spun out of the robot and onto the switches and scale during the game.
                </p>
                <img src="/assets/first/2018-design.jpg" alt="Prototyping and design" className="w-full max-w-3xl mx-auto mb-6" />
                <p className="font-light">
                    The controls teams this year converted the code from past years from Python to Java. The subgroup
                    also experimented with virtual reality this year, attempting to allow the driver to have a first person
                    view of the game. In addition, controls wrote code for vision tracking, allowing the robot to use
                    reflective tape in the game to both orient and guide the robot. Finally, the group created the code
                    for the autonomous period of the game, allowing the robot to cross the auto line and place a cube on
                    the switch.
                </p>
            </WriteupSection>

            <WriteupSection>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Competition
                </h2>
                <p className="font-light mb-6">
                    GRT went to three competitions this past year, beginning with the Week 1 Utah Regional, then the Lone
                    Star Central Regional in Houston in Week 3, and finally the Silicon Valley Regional in Week 5. In both
                    the Utah and Lone Star Central competitions, GRT was an alliance captain, but both times lost in the
                    quarterfinals. At the Silicon Valley Regional, GRT was picked to be on the fourth alliance but lost
                    in the opening round. Though GRT did not win any competitions, the team won numerous awards, including
                    the Creativity Award and Safety Award from the Silicon Valley Regional and the Innovation in Controls
                    Award from the Lone Star Central Regional.
                </p>
                <CaptionedImage src="/assets/first/2018-lone-star.JPG" alt="Robot depositing power cube" className="max-w-2xl mx-auto mb-16">
                    The robot depositing a power cube at Lone Star Regional.
                </CaptionedImage>

                <h2 className="text-2xl font-medium text-center mb-6">
                    Outreach
                </h2>
                <p className="font-light mb-6">
                    After build season concluded at the end of March, the team participated in the May Fete Parade in Palo
                    Alto, where students rolled the robot through the parade and demonstrated it to the public afterwards.
                    Gunn High School graduation was on May 31, and the GRT seniors, some of whom had been members of the
                    team for three years, officially finished high school. As per GRT tradition, the seniors wore red metal
                    chains throughout the ceremony. This summer, GRT held its first Summer Camp from June 11 through June
                    15, where GRT students served as counselors and taught campers about VEX IQ Robotics and ran a few
                    small competitions at the GRT shop. A few GRT students also went to the Apricot STEM Fair on June 24,
                    where they ran the 2018 robot.
                </p>
                <img src="/assets/first/2018-comps.JPG" alt="2018 robot at competition" className="w-full max-w-2xl mx-auto" />
                {/* TODO: caption? where is this? */}
            </WriteupSection>
        </WriteupLayout>
    )
}
