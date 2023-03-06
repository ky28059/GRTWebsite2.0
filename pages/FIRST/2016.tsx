import Head from 'next/head';
import WriteupLayout, {WriteupSection} from '../../components/WriteupLayout';
import CaptionedImage from '../../components/CaptionedImage';


export default function GRT2016() {
    return (
        <WriteupLayout>
            <Head>
                <title>2016 | GRT</title>
            </Head>

            <WriteupSection>
                <h1 className="text-4xl font-medium mb-3 text-center">
                    FIRST Stronghold
                </h1>
                <h3 className="text-lg text-center mb-6">GRT 2015-2016</h3>
                <p className="font-light">
                    FIRST Stronghold is played by two alliances of three teams each. Alliances compete against each other to
                    breach their opponents' defenses, known as outer works, and capture their tower. They score points by
                    crossing elements of their opponents' outer works, scoring boulders in their opponents' tower goals, and
                    surrounding and scaling their opponents' tower itself.
                </p>
            </WriteupSection>

            <WriteupSection secondary>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Our robot: the Red Giant
                </h2>
                <p className="font-light mb-6">
                    For FIRST Stronghold, GRT built the 'Red Giant', a short robot specially engineered to overcome the
                    challenging terrain presented in the game.
                </p>
                <img src="/assets/first/2016-red-giant.jpg" alt="2016 robot" className="rounded w-full max-w-3xl mx-auto mb-6" />
                <p className="font-light">
                    The pickup mechanism on the Red Giant uses two car window motors attached to a roller arm to move
                    the ball into the shooter mechanism. The roller arm consists of a metal roller to which was tied
                    surgical tubing (called 'Chalupa') that served to slap the ball into the robot. The arm was built to
                    cross defenses: wheels were added to the roller arm to move the portcullis up and over the robot,
                    while the entire roller arm is capable of moving up and down in order to cross the Cheval de Frise.
                </p>
            </WriteupSection>

            <WriteupSection>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Shooter
                </h2>
                <p className="font-light mb-6">
                    For Stronghold, GRT's shooter mechanism was unique compared those on other robots as it contained an
                    integrated shooter and hopper. The flywheel is mounted on top of four pneumatics that raise and lower
                    to create a cage while the ball is in transit, and launches the ball once aimed. When the ball is
                    picked up, the flywheel mechanism is raised so the pickup can deposit the ball in the middle of
                    the shooter. The stationary flywheel is then lowered onto the ball to secure it as the robot drives
                    over the defenses. As the vision tracking software aims the ball at the goal, the flywheel is raised
                    and accelerates up to appropriate speed. The pneumatics then drop the flywheel down onto the ball,
                    launching the ball at the goal.
                </p>
                <CaptionedImage src="/assets/first/2016-outreach.jpg" alt="2016 robot on display" className="max-w-2xl mx-auto mb-4">
                    The Red Giant on display. {/* TODO: "at ..." */}
                </CaptionedImage>
                <p className="font-light">
                    The shooting mechanism is supported by several aluminum plates and incorporates an adjustable hood
                    to fine tune the arc of the ball upon initial launch. The entire mechanism is set on top of a Lazy
                    Susan that is attached to a motor, which allows the shooter a fairly wide range to aim and shoot.
                </p>
            </WriteupSection>

            {/* TODO: images? + decide on whether to carry over the worm gearbox background image for this section */}
            <WriteupSection secondary>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Drivetrain
                </h2>
                <p className="font-light mb-6">
                    This year, our drivetrain team designed a 2-speed gearbox that performed well during competition season.
                    This gearbox consists of 3 CIM motors that use a 3 stage reduction between the motors and the output
                    shaft. The shifting mechanism incorporates a ball shifter that is pneumatically actuated. The shifter
                    uses two pneumatic pistons instead of one to allow the mechanism to shift efficiently with reduced
                    risk of the gearbox seizing during shifting. The high gear was utilized for general movement around
                    the field with a speed of 13.5 feet/second, while the low gear was geared towards aiding the robot
                    claw through defenses better and push other robots if needed (at 6.0 feet/second).
                </p>
                <p className="font-light">
                    This gearbox was engineered to create space for the robot's other mechanisms. For the past five years,
                    GRT has made an effort to downsize the drivetrain while maintaining and maximizing power output.
                    This has prepared us for the year's game, since many aspects of FRC Stronghold emphasize compactness
                    of design.
                </p>
            </WriteupSection>

            <WriteupSection>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Space restrictions
                </h2>
                <p className="font-light mb-6">
                    One of the defenses was the low bar, which is about 16" off the ground on an elevated platform. We
                    designed the robot to tackle the low bar from the start. This meant that our robot needed to be
                    designed as small as possible. After creating the initial design for the robot, we examined changes
                    that could be made to the robot's design to create a wider range for the shooter to rotate.
                    This made it easier to aim the shooter when shooting the ball.
                </p>
                <CaptionedImage src="/assets/first/2016-red-giant-render.jpg" alt="2016 robot render" className="max-w-2xl mx-auto mb-4">
                    A render of the robot CAD. {/* TODO: wording */}
                </CaptionedImage>
                <p className="font-light mb-16">
                    Another way we tackled space restrictions was to integrate multiple uses for the same mechanism. For
                    example, the pickup mechanism was utilized for picking up balls and for crossing over two defenses,
                    while the shooter mechanism doubled as a way to store the ball while crossing the defenses. Overcoming
                    the space restrictions allowed us to build a better robot and compete better in competition.
                </p>

                <h2 className="text-2xl font-medium text-center mb-6">
                    Controls
                </h2>
                <p className="font-light mb-16">
                    This year, controls worked hard to give the 'Red Giant' the ability to 'see' the goal. The goals in
                    the towers were surrounded by reflective tape, giving the Controls team the opportunity to use vision
                    tracking software to create a program that could aim the shooter mechanism at the tower, predict the
                    amount of power necessary to make the shot, and adjust the angle of the hood. This software took data
                    from a webcam mounted on the robot that is surrounded by a ring of LED lights. The light emitted from
                    the LEDs is reflected by the tape and received by a sensor. The vision tracking software reads the
                    signals from the sensors and collects data based on this, and subsequently uses an algorithm to obtain
                    the optimal speed of the flywheel and angle of the shooter hood. This setup worked very well during
                    competition and allowed the Controls team to earn the 'Innovation in Control Award' at the Wisconsin
                    Regional.
                </p>

                <h2 className="text-2xl font-medium text-center mb-6">
                    The team
                </h2>
                <p className="font-light">
                    The 2016 Build and Competition season has been one of our best, from Kickoff Day to our last day at
                    the Silicon Valley Regional (SVR). Our robot performed phenomenally during most of the matches at the
                    regionals that we attended. We were able to become finalists at the Arizona North Regional and advance
                    to the quarterfinals at the other regionals attended. In order to achieve this, GRT worked diligently
                    throughout build season to engineer and fabricate a robot that ended up doing well during competition.
                </p>
            </WriteupSection>
        </WriteupLayout>
    )
}
