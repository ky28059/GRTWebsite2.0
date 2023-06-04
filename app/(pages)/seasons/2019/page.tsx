import {Metadata} from 'next';
import Section from '../../../../components/Section';
import CaptionedImage from '../../../../components/CaptionedImage';


export const metadata: Metadata = {
    title: '2019'
}

export default function GRT2019() {
    return (
        <>
            <Section>
                <h1 className="text-4xl font-medium mb-3 text-center">
                    Destination: Deep Space
                </h1>
                <h3 className="text-lg text-center mb-6">GRT 2018-2019</h3>
                <p className="font-light mb-6">
                    In 2019, GRT competed in a Martian wasteland during Destination: Deep Space. Robots got points by
                    placing cargo into and sealing hatches onto space ships, and by climbing distances of up to 21 inches
                    in the habitat. With plenty of interesting changes and mechanics, including a one defense robot limit
                    and the addition of the 15 second sandstorm phase, in which drivers' vision of the field was obscured,
                    Deep Space proved to be an engaging and skill-testing game.
                </p>
                <CaptionedImage src="/assets/first/grt-2019.JPG" alt="GRT 2018-2019" className="max-w-3xl mx-auto">
                    GRT 2018-2019
                </CaptionedImage>
            </Section>

            <Section secondary>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Alpha
                </h2>
                <p className="font-light mb-6">
                    During Kickoff, students and alumni alike gathered to watch the reveal of the game rules, before
                    quickly breaking into groups to build mock game pieces and discuss strategy. In the first few days,
                    the team decided on utilizing the Swerve Drive we've used for the last two years, capable of flexible
                    movement in any direction, based on the code-base and designs developed in 2018. We also built a
                    plethora of wooden models of possible game-piece manipulators, a few which ended up becoming our
                    robot's mechanisms. Our robot, Jonah, was on its way to becoming a reality.
                </p>
                <CaptionedImage src="/assets/first/2019-del-mar.JPG" alt="Prototyping and design" className="max-w-3xl mx-auto">
                    Jonah at the 2019 Del Mar Regional.
                </CaptionedImage>
            </Section>

            <Section>
                <div className="flex flex-wrap-reverse md:flex-nowrap gap-6 md:gap-8 mb-16">
                    <img src="/assets/seasons/2019-jonah.jpg" alt="2019 robot" className="rounded md:max-w-xs lg:max-w-md mx-auto self-start" />
                    <div>
                        <h2 className="text-2xl font-medium text-center md:text-left mb-6">
                            Beta and Omega
                        </h2>
                        <p className="font-light mb-6">
                            Once our Beta phase started, we went through a few robot designs, before settling on our final
                            setup, which we kept for our two Omega robots. 50 budding young engineers spent a cumulative
                            total of over 6000 hours CADing, machining, and assembling parts in a frantic dash to create
                            a great robot. Despite a few design setbacks along the way, Jonah was completed on time, and
                            under the weight limit.
                        </p>
                        <p className="font-light">
                            Jonah's design was simple, but effective. Using laser-cut wooden gears and 3D-printed
                            manipulators to reduce weight, Jonah passed inspection on its first try, in large part due to
                            the efforts of our exceptional bumpers team. We used two separate mechanisms, one on each side,
                            to pick up cargo and hatches, utilizing swerve's mobility to offset the awkwardness of having
                            multiple mechanisms. Our cargo mechanism used a set of spinning wheels to both intake and
                            place the large orange balls, saving valuable space. Meanwhile, our hatch pickup mechanism
                            used a simple pair of extendable "scissors," which could secure the yellow discs quickly,
                            allowing for reduced cycle time. Near the end of build season, Jonah also got a small pair
                            of extendable legs, which allowed it to climb to the second level of the Hab.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-medium text-center mb-6">
                    Outreach
                </h2>
                <p className="font-light mb-16">
                    As always, every member of the Gunn Robotics Team displayed our community-friendly spirit, allowing
                    us to show up at 11 events over the course of the year. We demonstrated our robot, discussed design,
                    and advocated for STEAM at various events such as the Maker Faire, May Fete Parade, and Pacific Dream
                    Machine.
                </p>

                <h2 className="text-2xl font-medium text-center mb-6">
                    Results
                </h2>
                <p className="font-light">
                    GRT had a great year, making it to the quarterfinals in all three competitions we competed in: Del Mar,
                    Silicon Valley, and the newly established Monterey Regional. At both Del Mar and SVR, we won the
                    Autonomous Award, due to our controls team's powerful multi-pronged approach, which combined precise
                    robotic movements, backed up by computer vision, with a camera system that allowed human problem
                    solving. In addition, at Monterey, we won the Gracious Professionalism Award for the first time in
                    our team's history, helping out other teams, volunteering to help the competition run smoothly, and
                    showing our team spirit with a few new cheers. Overall, 2019 was a great season, and we're looking
                    forward to rising up to the challenge next year and beyond.
                </p>
            </Section>
        </>
    )
}
