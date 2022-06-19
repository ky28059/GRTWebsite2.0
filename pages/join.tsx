import {ReactNode} from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';


export default function Join() {
    return (
        <Layout>
            <Head>
                <title>Join | GRT</title>
            </Head>

            <h1 className="text-4xl font-medium mb-6 text-center">
                Join GRT
            </h1>

            <p className="font-light mb-10">
                The Gunn Robotics Team (GRT) is both a team and a class, and members must be concurrently enrolled in
                the Engineering Technology course. GRT and the Engineering Technology course is open to all sophomores,
                juniors and seniors at Gunn High School. No specific prior knowledge or classes are required for acceptance
                as the team requires a variety of skills. However, engineering classes offered at Gunn such as Introduction
                to Engineering Design or Principles of Engineering would teach skills directly applicable to robot design.
                Members are expected to put in time and effort during and outside of school hours. This includes fund-raising
                activities and community outreach events. During build season, from early January to late February, each
                member is expected to spend at least 8-12 hours a week outside of school (after-school, evenings, and
                weekends) working on the robot and/or other team tasks. Applicants with many extra-curricular activities
                or time restraints should keep this in mind before applying.
            </p>

            {/* TODO: can this be abstracted with FIRST's <Section>s? */}
            <h3 className="text-2xl font-medium text-center mb-6">Applying for the team</h3>
            <p className="font-light mb-10">
                Applications to join the team are available in the robotics shop (L-5) or the guidance office in late
                January. Applications may include segments and prompts such as a personal statement, short responses,
                and creativity challenges. The selection process for the team is competitive and applicants should have
                other elective choices in case they are not accepted into the team. It is recommended to pick up the
                forms as early as they are available, to allow adequate time to thoughtfully complete the responses.
            </p>

            {/* TODO: expand on these */}
            <h3 className="text-2xl font-medium text-center mb-6">What do we do on GRT?</h3>
            <div className="space-y-8 mb-10">
                <LabelledList name="Participate in the annual FIRST Robotics Competition (FRC)">
                    <li>Design, build, and program a robot for competitions</li>
                    <li>Apply for written awards</li>
                    <li>Apply for animation awards</li>
                </LabelledList>
                <LabelledList name="Community outreach">
                    <li>Build a mechanized haunted house for Juana Briones Elementary School</li>
                    <li>Teach engineering to younger students</li>
                </LabelledList>
            </div>

            <h3 className="text-2xl font-medium text-center mb-6">What can you learn?</h3>
            <div className="space-y-8 mb-10">
                <LabelledList name="Everyone learns:">
                    <li>Design and iteration process</li>
                    <li>Machining in the GRT shop on the lathe, mill, and over a dozen hand tools</li>
                    <li>CAD (Computer Aided Design) on Onshape</li>
                </LabelledList>
                <LabelledList name="Specific subgroups learn:">
                    <li>Wiring the electrical components of a robot (Controls)</li>
                    <li>Programming a robot in Java (Controls)</li>
                    <li>Gearbox ratios for drivetrains and mechanisms (DT)</li>
                    <li>3D animation in Autodesk Maya (Animation)</li>
                    <li>Operating and generating instructions for a CNC router (CNC)</li> {/* reword? */}
                    <li>Connecting and powering pneumatic systems (Pneumatics)</li>
                    <li>TIG welding (Welding)</li>
                    <li>Professional writing and fundraising (Business)</li>
                    <li>Leadership</li>
                </LabelledList>
            </div>

            {/* TODO: this might be better at the start, but that would require some reorganization */}
            <p className="font-light mb-6">
                Whether your interest is in programming or poster design, industrial machining or DIY projects, GRT has
                a place for you. {/* "Come join our family! Apply now." but less cheesy perhaps */}
            </p>
            <img src="/assets/join/2019-20Camping.jpeg" alt="GRT 2019-2020" className="mb-2" />
            <p className="text-sm text-secondary italic">GRT 2019-2020</p>
        </Layout>
    )
}

function LabelledList(props: {name: string, children: ReactNode}) {
    return (
        <div>
            <p className="font-medium mb-2">{props.name}</p>
            <ul className="list-disc list-inside font-light">
                {props.children}
            </ul>
        </div>
    )
}
