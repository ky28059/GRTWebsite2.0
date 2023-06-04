import {Metadata} from 'next';
import Section from '../../../../components/Section';
import CaptionedImage from '../../../../components/CaptionedImage';


export const metadata: Metadata = {
    title: '2014'
}

export default function GRT2014() {
    return (
        <>
            <Section>
                <h1 className="text-4xl font-medium mb-3 text-center">
                    Aerial Assist
                </h1>
                <h3 className="text-lg text-center mb-6">GRT 2013-2014</h3>
                <p className="font-light mb-6">
                    Aerial Assist is played by two competing Alliances of three Robots each on a flat 25 x 54 foot field,
                    straddled by a lighting truss suspended just over five feet above the floor. The objective is to score
                    as many balls in goals as possible during a 2 minute and 30 second match. The more Alliances score
                    their ball in their goals, and the more they work together to do it, the more points their alliance
                    receives.
                </p>
                <p className="font-light">
                    The match begins with one 10-second Autonomous Period in which robots operate independently of driver.
                    Each robot may begin with a ball and attempt to score it in a goal. Alliances earn bonus points for
                    scoring balls in this mode and for any of their robots that move into their zones. Additionally, each
                    high/low pair of goals will be designated hot for five seconds, but the order of which side is first
                    is randomized. For each ball scored in a hot goal, the Alliance earns additional bonus points. page
                    8 / 93 For the rest of the match, drivers remotely control robots from behind a protective wall. Once
                    all balls in autonomous are scored, only one ball is re-entered in to play, and the Alliances must
                    cycle a single ball as many times as possible for the remainder of the match. With the single ball,
                    they try to maximize their points earned by throwing balls over the truss, catching balls launched
                    over the truss, and scoring in the high and low goals on the far side of the field. Alliances receive
                    large bonuses for assists, which are earned for each robot that has possession of the ball in a zone
                    as the ball moves down the field.
                </p>
            </Section>

            <Section secondary>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Our robot: Redshift
                </h2>
                <p className="font-light mb-6">
                    For Aerial Assist, GRT built Redshift, a robot weighing 120 pounds that features a triple-award winning
                    drivetrain which can quickly pick up and shoot into the high goal from 20 feet away. Redshift has a
                    lightweight and quick-to-deploy pickup that can reliably feed the ball into our high-powered shooter.
                    A compact, high-efficiency, two-speed gearbox lets Redshift traverse the field very quickly, yet have
                    enough torque to win most pushing matches.
                </p>
                <img src="/assets/seasons/2014-redshift.jpg" alt="2014 robot" className="rounded w-full max-w-3xl mx-auto" />
                {/* TODO: caption? "Redshift at Nixon elementary school ..." */}
            </Section>

            <Section>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Pickup
                </h2>
                <p className="font-light mb-6">
                    Redshift's ball pickup mechanism consists of a deployable roller held up by two PVC pipes. The roller
                    is deployed by two car window motors with a large chain reduction in order to quickly and sturdily
                    hold out the essential mechanism. The roller itself is powered by a single chain-driven motor, easily
                    capable of dragging the large ball over the bumper.
                </p>
                <CaptionedImage src="/assets/seasons/2014-redshift-pickup.jpg" alt="2014 robot" className="max-w-2xl mx-auto mb-4">
                    Redshift outside the robotics shop. {/* TODO: citation needed */}
                </CaptionedImage>
                <p className="font-light">
                    Our team decided to use PVC tubing for the arm as a fail point, since in a high-speed game like
                    Aerial Assist, any objects protruding from the bumper are bound to break. By making the arm something
                    easily replaceable and breakable, we protect the more delicate metal parts and can quickly replace a
                    part.
                </p>
            </Section>

            {/* TODO: images? + decide on whether to carry over the worm gearbox background image for this section */}
            <Section secondary>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Drivetrain
                </h2>
                <p className="font-light">
                    Redshifts belt-in-tube west-coast drive allows for an efficient and compact power transfer, leaving
                    more space for onboard mechanisms.
                </p>
                {/* TODO: more content is needed, but hard; see TODO in `2015.tsx` */}
            </Section>

            <Section>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Shooter
                </h2>
                <p className="font-light mb-6">
                    A simple spring-powered catapult, Redshift's short throw allows us to fire from distance reliably and
                    without any rev-up time. The catapult is powered by a custom ball-shift winch which will shift into
                    neutral to release the ball and fire. Unlike traditional catapults, Redshift's catapult has practically
                    no leverage, meaning the catapult is compact enough to fit entirely onto the base of the robot.
                </p>

                {/* TODO: see TODO in `2015.tsx` */}
            </Section>
        </>
    )
}
