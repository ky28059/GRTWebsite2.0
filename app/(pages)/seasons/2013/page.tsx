import {Metadata} from 'next';
import Section from '../../../../components/Section';
import CaptionedImage from '../../../../components/CaptionedImage';


export const metadata: Metadata = {
    title: '2013'
}

export default function GRT2013() {
    return (
        <>
            <Section>
                <h1 className="text-4xl font-medium mb-3 text-center">
                    Ultimate Ascent
                </h1>
                <h3 className="text-lg text-center mb-6">GRT 2012-2013</h3>
                <p className="font-light mb-6">
                    Ultimate Ascent is a frisbee game where the goal is to score as many points as possible by shooting
                    frisbees into designated goals at either end of the field. The game is played on a 27' x 54' field
                    with two pyramid structures located ~1/3 of the way from each alliance wall. The pyramid structures
                    are used as an additional goal and to facilitate the endgame.
                </p>
                <p className="font-light mb-6">
                    Teams start with up to 2 or 3 discs on the robot at the beginning of the match. Robots which begin
                    touching the carpet behind their colored Auto Line may have three discs; others may have only two.
                    They can score these in autonomous or wait for the teleoperated period. Only the 6 discs of an alliance's
                    color count when scored on top of its pyramid; white or opposing colored discs will not count. Since
                    the human players may not put any colored discs in play until teleoperated, scoring in the pyramid
                    is not possible in autonomous. Teams can score points as follows by scoring discs into goals.
                </p>
                <CaptionedImage src="/assets/first/2013-robot.jpg" alt="2013 robot" className="max-w-3xl mx-auto">
                    The 2013 robot. {/* TODO: better caption */}
                </CaptionedImage>
            </Section>

            {/* TODO: usually a "meet the robot" section goes here, but they don't seem to have one, and */}
            {/* neither do they seem to have a robot name */}
            <Section secondary>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Shooter
                </h2>
                <p className="font-light mb-6">
                    The shooter used in this year's robot consists of a horizontally-mounted single flywheel that rapidly
                    propels the frisbees at the goals. The frisbee is fed into the shooter through a hopper, which stores
                    the frisbees until needed. The shooting mechanism is mounted such that the whole shooter can be moved
                    into a flat position when needed, allowing the robot to drive below the pyramids to take a more direct
                    path around the field or to avoid opponents.
                </p>
                <img src="/assets/first/2013-robot-shooter.jpg" alt="2013 shooter" className="rounded w-full max-w-3xl mx-auto" />
                {/* TODO: caption? */}
            </Section>

            <Section>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Pickup
                </h2>
                <p className="font-light">
                    The pickup mechanism used on this year's robot used a chalupa design in order to pickup the frisbees
                    and drop them into the hopper. {/* TODO: expand; see TODO in `2015.tsx` */}
                </p>
            </Section>

            {/* TODO: images? + decide on whether to carry over the worm gearbox background image for this section */}
            <Section secondary>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Drivetrain
                </h2>
                <p className="font-light">
                    2013 marks the second year that GRT's drivetrain team pushed to engineer a compact drivetrain system.
                    This year, the team used a single-speed bevel gear drivetrain to move the robot. This gearbox worked
                    very well and allowed the robot to move quickly and efficiently around the field. The bevel gear system
                    allowed the gearbox to be very compact and were placed right next to the wheels. This gives more space
                    for the pickup and shooter mechanisms on the robot.
                </p>
            </Section>

            <Section>
                <h2 className="text-2xl font-medium text-center mb-6">
                    The team
                </h2>
                <p className="font-light mb-6">
                    GRT had a great season this year GRT was able to get into the playoffs at all of the regional
                    competitions we attended. We won the Utah Regional and were able to advance to the U.S. Championship
                    in St. Louis (Galileo Division). In addition, the team was awarded the Excellence in Engineering Award
                    at Utah. Our robot was well built and shot frisbees quite consistently, allowing us to score goals
                    efficiently.
                </p>
            </Section>
        </>
    )
}
