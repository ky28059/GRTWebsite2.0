import {ReactNode} from 'react';
import {Metadata} from 'next';
import Section from '../../../components/Section';


export const metadata: Metadata = {
    title: 'FIRST'
}

export default function FIRST() {
    return (
        <Section>
            <h1 className="text-4xl font-medium mb-6 text-center">
                FIRST
            </h1>

            <div className="space-y-10">
                <section>
                    <div className="border-l-2 border-gray-100 bg-gray-50 p-6 font-light space-y-4 mb-6">
                        <p>
                            FIRST was founded in 1989 to inspire young people's interest and participation in science and
                            technology. Based in Manchester, NH, the 501 (c) (3) not-for-profit public charity designs accessible,
                            innovative programs that motivate young people to pursue education and career opportunities in science,
                            technology, engineering, and math, while building self-confidence, knowledge, and life skills.
                        </p>
                        <p>
                            Our mission is to inspire young people to be science and technology leaders, by engaging them in
                            exciting mentor-based programs that build science, engineering and technology skills, that inspire
                            innovation, and that foster well-rounded life capabilities including self-confidence, communication,
                            and leadership.
                        </p>
                        <p>(<a href="https://firstinspires.org">firstinspires.org</a>)</p>
                    </div>

                    <p className="font-light">
                        GRT was one of the first FRC teams in the state of California when it was founded in 1997. We have
                        since competed in countless FIRST Robotics competitions, earning numerous awards. More importantly,
                        however, we serve as a model for FIRST programs and other engineering opportunities around the
                        San Francisco Bay Area.
                    </p>
                </section>

                <FIRSTSection heading="A New Emphasis on Engineering">
                    <p>
                        Where once there was nothing but a struggling class with eight students, there is now a thriving program
                        with 10 classes and 4 suggested pathways. GRT has been so successful that there is a new hunger at our
                        school for project-based classes that connect students to the real world. Engineering instructor Bakari
                        Holmes has introduced Digital Electronics and Introduction to Engineering Design, both of which are
                        Project Lead the Way® courses, and both of which feed into our Engineering Technology classes. Mr. Holmes
                        and Mr. Dunbar have worked closely with Josh Paley, our computer science instructor, to create cohesive
                        pathways for students that give them meaningful, contextual engineering experience while still in high
                        school.
                    </p>
                    <img src="/assets/first/mentor.jpg" className="brightness-105 contrast-[1.05] saturate-[1.2]" alt="Mentor" />
                </FIRSTSection>

                <FIRSTSection heading="Mentors to Veterans to Rookies">
                    {/* TODO: rewrite to emphasize mentor hands-off-ness and student leadership */}
                    <p>
                        We bring in mentors from industry to help coach students along. These mentors do not work the
                        tools in general, but they are there to help the students do what they need to do. More
                        experienced students help the newer students as well. Veteran students know that they are to
                        take a rookie with them every time they need to make something, so that the newer student can
                        be a helper and learn by working along.
                    </p>
                </FIRSTSection>

                <FIRSTSection heading="Cooperation and Competition">
                    <p>
                        We rely on two very strong motivators on this team: the team members' knowledge that their
                        designs may be in completion with other designs, and their knowledge that the rest of the team
                        is depending upon them. This is so unlike most other classroom situations, and it's a big reason
                        why the students on the team work so hard to do well!
                    </p>
                    <img src="/assets/first/group.jpg" alt="Group" />
                </FIRSTSection>
            </div>
        </Section>
    )
}

// TODO: naming, can this be abstracted with the imported section?
function FIRSTSection(props: {heading: string, children: ReactNode}) {
    return (
        <section className="space-y-6 font-light">
            <h3 className="text-2xl font-medium text-center">{props.heading}</h3>
            {props.children}
        </section>
    )
}
