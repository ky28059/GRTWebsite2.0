import {Metadata} from 'next';
import Section from '../../../../components/Section';


export const metadata: Metadata = {
    title: '2012'
}

export default function GRT2012() {
    return (
        <>
            <Section>
                <h1 className="text-4xl font-medium mb-3 text-center">
                    FIRST | Rebound Rumble
                </h1>
                <h3 className="text-lg text-center mb-6">GRT 2011-2012</h3>
                <p className="font-light mb-6">
                    "Rebound Rumble" is played on a 27' by 54' carpeted area with 7.5" foam basketballs. Alliances of
                    three robots each attempt to score on 4 different hoops at each end of the field, with the top hoop
                    being worth 3 points, the middle hoops 2 points, and the bottom hoop 1 point. The match begins with
                    a 15 second hybrid period when one robot per alliance may be controlled with with a Microsoft Kinect.
                    An extra three points are earned for each successful basket. Following the hybrid period, the teleop
                    period begins and drivers may control their robots.
                </p>
                <p className="font-light">
                    At the end of the game, robots from the same alliance may balance on one of the three bridges in the
                    center of the field to earn points. During qualification rounds, balancing 1 robot on a bridge is worth
                    10 points, and balancing 2 or 3 robots is worth 20 points. During elimination rounds, balancing 1
                    robot is worth 10 points, 2 robots is worth 20 points, and 3 robots is worth 40 points. Balancing
                    with a robot from the opposing alliance however, can earn both robots valuable "Coopertition Points"
                    during the qualification stages.
                </p>
            </Section>

            <Section secondary>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Our robot: Steakhouse Rodriguez
                </h2>
                <p className="font-light mb-6">
                    For Rebound Rumble, GRT built Steakhouse Rodriguez. Weighing in at 120 pounds, Rodriguez features an
                    award winning worm-gear drive train, is capable of a top speed of 9.5 ft/s, shoots 3 point shots from
                    the key, and is capable of easily crossing the bump in the field. Steakhouse Rodriguez has a reliable
                    intake, which is capable of obtaining balls from anywhere on the field, as well as lowering the bridge.
                    Surgical tubing flails are used on the external roller to neutralize bouncing balls, as well as gathering
                    balls stuck along the walls of the field. To shoot, SR uses a high speed flywheel shooter, which can shoot
                    three top hoop shots in less than 3 seconds. A camera-based tracking system allows the robot to shoot
                    from any location, range permitting. The same system allows for reliable autonomous scoring.
                </p>
                <img src="/assets/seasons/2012-steakhouse-rodriguez.jpg" alt="2012 robot" className="rounded w-full max-w-3xl mx-auto" />
            </Section>

            <Section className="flex gap-8">
                <img src="/assets/seasons/2012-shooter.jpg" alt="2012 shooter" className="rounded hidden md:block md:max-w-xs lg:max-w-md h-max" />
                <div>
                    <h2 className="text-2xl font-medium text-center md:text-left mb-6">
                        Shooter
                    </h2>
                    <p className="font-light mb-6">
                        Our shooter went through seven vastly different iterations before becoming the final version
                        it is now. The final shooting mechanism features twin 6" flywheels powered by two Fisher-Price
                        motors with a 4:1 gear reduction. This combination allows the shooter to have the top speed
                        to launch the ball across the field. On the way out of the shooter, the ball glides between
                        the flywheels, rolling along three plastic ABS plastic plates at the back. Behind the three
                        flexible plates is a pushing mechanism, powered by a motor with a lead screw. By pushing the
                        flexible plates into different curvatures, this lead screw mechanism provides precise angle
                        adjustment.
                    </p>
                    <p className="font-light">
                        The shooter is mounted on a 15" Lazy Susan, powered via timing belt by a window motor. On the
                        front is a centered Axis camera. Vision tracking, paired with the rotating turret, allows for
                        quick automatic vision tracking. The entire shooter, including motors, camera, and rotation
                        mechanism, weighs under 8 pounds. Through extensive testing, our shooter shot 30 shots from
                        the key in a row, from 3 different arbitrary locations on the key, and scored 27 balls. This
                        90% accuracy is attributed to completely automatic code tracking algorithms as well as the
                        robustness of the mechanical design, and it qualifies this shooter as one of the best.
                    </p>
                </div>
            </Section>

            {/* TODO: images? + decide on whether to carry over the worm gearbox background image for this section */}
            {/* This is the only drivetrain section allowed to use the 2012 worm gear background image */}
            <Section secondary>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Drivetrain
                </h2>
                <p className="font-light mb-6">
                    This year Drivetrain focused on simplifying its design and creating a more elegant drive system. To
                    achieve this, we adopted the popular West Coast Drive, while adding our own flair. To achieve the
                    proper tension required for the lighter #25 chain, we custom cnc-milled bearing blocks and spacers
                    to keep them perfectly parallel. We used high performance chrome molybdenum steel for stiff live
                    axles and drilled out the center to save weight. Eight 6-inch AndyMark performance wheels give our
                    robot great mobility and versatility. HDPE skid plates on the front and back of the robot allow us
                    to easily traverse the center barrier with no damage to our frame.
                </p>
                <p className="font-light">
                    GRT also pioneered a brand new worm-based transmission to power the wheels. The 4-start high-efficiency
                    worm gear is paired with a 40 tooth bronze gear for smooth operation. This setup allows 2 CIM's to be
                    mounted parallel to the sides of the robot, freeing up room for electronics in the center of the robot.
                    In addition, the use of a worm gear allows for a very compact form factor and tiny weight impact. It
                    also makes backdriving our robot much more difficult, which proved very handy on bridges. The 14:1
                    gearing provides ample torque to win pushing matches. Our revolutionary gearbox is completely student
                    designed and built, and won the Excellence in Engineering Design Award at the Chesapeake Bay Regional
                    2012.
                </p>
            </Section>

            <Section>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Ball pickup
                </h2>
                <p className="font-light mb-6">
                    The ball pickup mechanism is a unique and essential part to the robot. We figured that the shooting
                    abilities of high performing teams would be very similar, and that the real key to being a competitive
                    team would be having an unparalleled ball pickup system. With this in mind, we designed our ball pickup
                    system to be quick, effective, versatile and reliable. We designed a flip down, external ball pickup
                    system that was able to pick up balls as well as push down the ramps in the middle of the field. To
                    ensure quick and effective ball pickup, we added surgical tubing flails to our external ball pickup
                    mechanism. This surgical tubing allowed us to pick balls up quickly, easily collect balls that are
                    bouncing or rolling away from us, and retrieve balls from against the wall or corners of the field.
                </p>
                <img src="/assets/seasons/2012-ball-pickup.jpg" alt="2012 ball pickup" className="rounded w-full max-w-2xl mx-auto" />
                {/* TODO: caption? */}
            </Section>
        </>
    )
}
