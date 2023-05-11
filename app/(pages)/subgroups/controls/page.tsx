import {Metadata} from 'next';
import Section from '../../../../components/Section';
import SectionHeader from '../../../../components/SectionHeader';
import CaptionedImage from '../../../../components/CaptionedImage';


export const metadata: Metadata = {
    title: 'Controls'
}

export default function Controls() {
    return (
        <Section>
            <h1 className="text-4xl font-medium mb-6 text-center">
                Controls
            </h1>

            {/* <h3 className="text-lg font-medium mb-3">About</h3> */}
            <p className="font-light mb-6">
                The GRT controls subgroup is responsible for the crucial electrical components, wiring, and software for
                our robots. Controls collaborates with the mechanism and drivetrain teams to incorporate necessary sensors
                and controlling hardware for motors and pneumatic devices. Wiring the components requires technical skills
                including crimping, soldering, and troubleshooting.
            </p>
            {/* <img src="/assets/subgroups/sparkmax-wide.jpg" alt="REV SparkMax motor controller" className="max-w-2xl mx-auto mb-4 rounded"/> */}
            <p className="font-light mb-10">
                Since the 2019 season, controls has written its software in Java, a language officially supported by FIRST.
                All code written for competitions and outreach events are available at <a href="https://github.com/grt192" target="_blank" rel="noopener noreferrer">https://github.com/grt192.</a>
            </p>

            <SectionHeader id="swerve-drive-software">Swerve drive software</SectionHeader>
            <p className="font-light mb-6">
                A historical achievement of the controls subgroup was software controlling the robot's omnidirectional
                "swerve" drive{/* TODO: wording? */}. In 2017, GRT developed a swerve drivetrain with four omnidirectional
                gearboxes to control robot motion. This drive system required a much more complex control system due to
                additional degrees of freedom created by four rotating and translating gearboxes. The controls team installed
                VEX Robotics VersaPlanetary encoders on each gearbox module to control the angle of the wheel, and limit
                switches for real-time zeroing. The driver was given the option for Ackerman steering, a control scheme
                similar to but more sophisticated than previous GRT drive control systems, and strafing, in which the robot
                moves in any direction without changing orientation, allowing the driver to quickly move across the field
                around defense robots and then make accurate movements to score points.
            </p>
            <CaptionedImage src="/assets/subgroups/vscode.jpg" alt="Swerve code" className="max-w-2xl mx-auto mb-4">
                2023 preseason swerve code.
            </CaptionedImage>
            <p className="font-light mb-10">
                Since 2017, GRT controls members have refined and improved our swerve code based on competition performance.
                {/* TODO: finish */}
            </p>

            <SectionHeader id="vision-control">Vision control</SectionHeader>
            <p className="font-light mb-6">
                In 2016, GRT developed a robot vision system using OpenCV to detect the goals (marked by reflective tape
                on the field). During autonomous control, this vision system helped us consistently score high goal shots,
                and during teleop it improved driver control of the shooting mechanism by aiming and firing at the press
                of a single button.
            </p>
            <CaptionedImage src="/assets/subgroups/2017-controls-vision.jpg" alt="Vision testing" className="max-w-2xl mx-auto mb-4">
                Controls members test their vision software using reflective tape, 2017
            </CaptionedImage>
            <p className="font-light mb-10">
                In later years, GRT worked on further expanding the vision system, using Kalman filters to combine data from
                computer vision and drivetrain sensors to accurately estimate the robot's position on the field. In 2019,
                this allowed the drivers to use a touchscreen monitor to view and control the robot's position. In 2020,
                controls incorporated a Jetson Nano coprocessor to offload expensive vision and lidar processing,
                communicating with and streaming data to the main processor over network tables on an ethernet
                connection. In 2022, vision processing on the Jetson provided ground-truth data to the turret mechanism
                for hub locking.
            </p>
            {/* TODO: more images! the 2019 monitor, maybe 2022 vision stuff? */}

            <SectionHeader id="electrical-systems">Electrical systems</SectionHeader>
            <p className="font-light mb-6">
                In addition to writing software, controls is responsible for wiring, integrating, and troubleshooting all
                the electrical components aboard the robot. The most important component (the "brain") on the robot is the
                AndyMark roboRIO, the main computer that stores and runs all of the robot's code. To keep all of our
                components powered, a REV PDP or PDH (power distribution panel or hub respectively) takes power from the
                battery and distributes it to the RIO, radio, and our SparkMax and TalonSRX motor controllers and pneumatics.
            </p>
            <CaptionedImage src="/assets/subgroups/2017-controls-electrical.jpg" alt="Wiring" className="max-w-2xl mx-auto">
                A controls member checks wiring on the robot, 2017
            </CaptionedImage>
            {/* TODO: talk about the bomb? */}

            {/* TODO: auton? idk if we should talk about auton */}

            {/* TODO: training */}
        </Section>
    )
}
