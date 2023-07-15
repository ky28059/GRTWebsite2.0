import {Metadata} from 'next';
import Section from '../../../../components/Section';
import SectionHeader from '../../../../components/SectionHeader';
import CaptionedImage from '../../../../components/CaptionedImage';


export const metadata: Metadata = {
    title: 'Drivetrain'
}

export default function Drivetrain() {
    return (
        <Section>
            <h1 className="text-4xl font-medium mb-6 text-center">
                Drivetrain
            </h1>

            {/* <h3 className="text-lg font-medium mb-3">About</h3> */}
            <p className="font-light mb-10">
                Drive trains are the systems that make the robot move, and often form the backbone of the chassis. The
                GRT drivetrain group is well-known within the FIRST Robotics community for our student-designed and -built
                gearboxes, intricate design work, and precision manufacturing. Since the need for robot movement is
                universal to any game design, the drive train group does significant work each fall semester to study
                gearbox designs, practice designing modified versions of past gearboxes, and develop precision machining
                skills. Redesign considerations range from power use to manufacturability. New designs are fabricated by
                student machinists in our shop, who create high precision parts on our mills and lathes. One of DT's most
                important recent achievements is the implementation of "swerve" drive.
            </p>

            <SectionHeader id="swerve-drive">Swerve drive</SectionHeader>
            <p className="font-light mb-6">
                Swerve drive allows a robot to be omnidirectional: it can move from side to side without changing the
                way the robot faces. Other omnidirectional drivetrains such as Mecanum often sacrifice grip to make this
                happen, but swerve drive maintains traction by using a normal wheel housed in a rotating fork. GRT first
                started using swerve drive in the 2017 FIRST game, Steamworks, becoming one of the first teams to pioneer
                the then new drive system. Though swerve has now entered the mainstream, with several manufacturers selling
                prefabbed modules to teams wanting to try out the unique drive, GRT continues to design and manufacture
                our own custom swerve, improving and iterating upon previous designs.
            </p>
            <CaptionedImage src="/assets/subgroups/2017-swerve-module.jpg" alt="2017 swerve" className="max-w-2xl mx-auto mb-4">
                GRT's original 2017 swerve module design.
            </CaptionedImage>
            <p className="font-light mb-6">
                Historically, GRT has manufactured our own gearbox modules using a variety of machines. For our 2019
                gearbox, we used a laser cutter to make custom gears and pulleys, a CNC mill to make gearbox plates, a
                3D printer to make swerve gearbox forks, and a lathe to turn all the axles and modify sprockets.
                {/* TODO: info about 2023 swerve? */}
            </p>
            <CaptionedImage src="/assets/subgroups/2023-swerve-module.jpg" alt="2023 swerve" className="max-w-2xl mx-auto mb-10">
                GRT's 2023 swerve module design.
            </CaptionedImage>
            {/* TODO: info about 2023 swerve? talk about strain wave planetary gearbox? */}

            <SectionHeader id="2-speed-drive">2-speed drive</SectionHeader>
            <p className="font-light mb-6">
                Earlier GRT drivetrains featured 2-speed, ball-shifting gearboxes. Pictured is a shifting gearbox with a
                3-stage reduction, which allows the use of 6 inch or larger wheels (a larger wheel would otherwise gear up the
                transmission).
            </p>
            <CaptionedImage src="/assets/subgroups/2016-2-speed-dt.jpg" alt="2-speed gearbox" className="max-w-2xl mx-auto mb-4">
                2016 2-speed gearbox design.
            </CaptionedImage>
            <p className="font-light mb-4">
                GRT's shifter gearboxes were designed to minimize space requirement, with a footprint extending
                from the transmissions only 2.7 inches. This came courtesy of several innovations, most notable of which
                are the inverted shifters: pneumatics that drive the shifting cluster that were turned around and
                set within the gearbox itself, cutting about 2 inches out of the width. Using this linkage to pull the
                shifter from afar, the cluster performed better than an off-the-shelf equivalent, holding a gear and shifting
                down to 25 PSI of pressure. Other innovations include the first reduction of the gearbox, accomplished
                through a belt drive on the face of the box. This further reduces profile, and allows the motors to be
                turned backwards, with most of their volume outside of the robot base area.
            </p>
            <CaptionedImage src="/assets/subgroups/2014-awards.jpeg" alt="2014 awards" className="max-w-3xl mx-auto mb-10">
                The 2014 shifter gearbox, accompanied by GRT's 3 engineering excellence awards that year.
            </CaptionedImage>

            <SectionHeader id="belt-in-tube-transmission">Belt-in-tube transmission</SectionHeader>
            <p className="font-light">
                In tandem with 2-speed drive gearboxes, GRT has used transmissions that transfer power to the wheels
                via a series of GT3 belts, laid inside box-beam transmission tubes. These box-beam tubes serve as effective
                housing and as core components of the robot's structure. In response to the terrain obstacles of FIRST
                Stronghold (2016), GRT adapted this arrangement in a bent-tube design, maintaining the characteristics of
                our traditional design, while lifting the large front and back wheels off the ground to help us tackle
                the worst of the obstacles.
            </p>

            {/* TODO: training */}
        </Section>
    )
}
