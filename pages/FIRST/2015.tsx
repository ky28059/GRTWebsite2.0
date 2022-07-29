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
                    Recycle Rush
                </h1>
                <h3 className="text-lg text-center mb-6">GRT 2014-2015</h3>
                <p className="font-light">
                    Recycle Rush is played on a standard carpeted 27 ft by 54 ft field. The field is divided into two
                    zones, one for red and one for blue. The main purpose of the game is to stack totes on top of white,
                    slightly elevated strips. 2 points are awarded per tote on the strip, and stacking a recycling bin
                    on a stack multiplies each totes value by 3. Totes can be collected by either the landfill, a group
                    of totes near the middle of the field; or the human player stations near the drivers. During
                    qualification matches, teams can place four yellow totes on the middle barrier to earn 20 points,
                    with an additional 20 points awarded if the totes are stacked. Teams are also allowed to throw litter
                    into the opposing alliances side to gain 4 points per noodle.
                </p>
            </WriteupSection>

            <WriteupSection secondary>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Our robot: Brontosaurus Rex
                </h2>
                {/* TODO: unsure how to handle this image. the aspect ratio combined with the low resolution makes it */}
                {/* look bad on its own, but even in a flex layout there's still too much whitespace */}
                <div className="md:flex gap-8">
                    <img src="/assets/first/2015-brontosaurus-rex.jpg" alt="2015 robot" className="mx-auto mb-6 md:mb-0" />
                    <p className="font-light mb-6">
                        For Recycle Rush, GRT built Brontosaurus Rex, a robot weighing 120 pounds with a dedicated bin grabber
                        that is optimized to quickly make a 4-stack and put a bin on top. A large, flat chassis allows the
                        robot to steadily, yet quickly navigate the field without fear of toppling our stacks over. The tote
                        lifter has self-adjusting fingers that conform to the tote's contour in order to quickly grab the tote
                        with minimal driver intervention.
                    </p>
                </div>
            </WriteupSection>

            <WriteupSection>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Tote stacker
                </h2>
                <p className="font-light">
                    Inspired by the design of a forklift, our elevator slides over a pair of 2x1 box beam with precision-placed
                    ball bearings to prevent binding and bending. The whole system is powered by a custom-made, 2-CIM gearbox
                    with a chain drive. At the end of the modular elevator box is a number of aluminum fingers that reach
                    under tote's ridge to securely and quickly lift the container. Each finger is held up by a rubber band
                    that allows for conformity to the tote's underside while still collectively able to lift up to 3 totes
                    at once.
                </p>
            </WriteupSection>

            {/* TODO: images? + decide on whether to carry over the worm gearbox background image for this section */}
            <WriteupSection secondary>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Drivetrain
                </h2>
                <p className="font-light">
                    Despite designing improvements to our previous year's two-speed gearbox, our drivetrain team decided
                    that a single-speed gearbox would provide the necessary stability and reliability that moving stacks
                    of totes requires. Combined with our traditional belt-in-tube west-coast drive, it allowed for an
                    extremely smooth and steady drive that took up a minimal amount of space on the chassis.
                </p>
            </WriteupSection>

            <WriteupSection>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Bin grabber
                </h2>
                <p className="font-light mb-6">
                    Arguably more important than our tote stacker, our dedicated bin grabber can easily grab bins from the middle barrier and hold it upright even when moving around and performing other actions. Combined with our autonomous, it allowed our team to make a 24-point stack within the first 30 seconds of teleop. The simple and effective triangle on the end is kept upright no matter what angle the arm is at thanks to a clever linkage system.
                </p>

                {/* TODO: more content would be nice, but 2015 was a long time ago and it's doubtful more can be */}
                {/* added here. */}
            </WriteupSection>
        </WriteupLayout>
    )
}
