import {ReactNode} from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';


export default function Accolades() {
    return (
        <Layout>
            <Head>
                <title>Accolades | GRT</title>
            </Head>

            <h1 className="text-4xl font-medium mb-6 text-center">
                GRT Awards by Year
            </h1>

            <div className="flex flex-col gap-8">
                <Season year="2023">
                    <Event name="Utah Regional">
                        <Award name="Autonomous Award" />
                    </Event>
                </Season>

                <Season year="2022">
                    <Event name="Monterey Regional">
                        <Award name="Team Spirit Award" />
                    </Event>
                </Season>

                <Season year="2019">
                    <Event name="Monterey Regional">
                        <Award name="Gracious Professionalism Award">
                            Throughout the regional, GRT generously offered help to other teams, and was recognized for
                            its efforts with the gracious professionalism award.
                        </Award>
                    </Event>
                    <Event name="Del Mar Regional">
                        <Award name="Autonomous Award">
                            For this year's "sandstorm" autonomous period, GRT developed a highly innovative system that
                            made for intuitive driving via a touchscreen.
                        </Award>
                    </Event>
                    <Event name="Silicon Valley Regional">
                        <Award name="Autonomous Award" />
                    </Event>
                </Season>

                <Season year="2018">
                    <Event name="Lone Star Regional">
                        <Award name="Innovation in Controls">
                            GRT was recognized for its especially innovative controls solutions, including the usage of
                            a field-centric swerve control system, as well as the application of a Neural Network in
                            tracking cubes.
                        </Award>
                    </Event>
                    <Event name="Silicon Valley Regional">
                        <Award name="Creativity Award">
                            {/* TODO: is this award text even necessary? It sounds a bit redundant */}
                            GRT received the creativity award for its constant efforts in innovating.
                        </Award>
                        <Award name="Safety Award">
                            Throughout the 2018 season, GRT implemented various creative and effective safety measures,
                            being recognized with the safety awards.
                        </Award>
                    </Event>
                </Season>

                <Season year="2017">
                    <Event name="Hub City Regional">
                        <Award name="Delphi Excellence in Engineering Design" />
                    </Event>
                    <Event name="Arizona North Regional">
                        <Award name="Champions (with teams 115 and 4135)" />
                        <Award name="Delphi Excellence in Engineering Design" />
                        <Award name="Dr. William Murphy Woodie Flowers Award (Seth Mallory)" />
                    </Event>
                    <Event name="Silicon Valley Regional">
                        <Award name="Delphi Excellence in Engineering Design" />
                    </Event>
                    <Event name="Houston National Championship">
                        <Award name="Rank 15" />
                    </Event>
                </Season>

                <Season year="2016">
                    <Event name="Arizona North Regional">
                        <Award name="Regional Finalists" />
                    </Event>
                    <Event name="Wisconsin Regional">
                        <Award name="Rockwell Automation Innovation in Control" />
                    </Event>
                </Season>

                <Season year="2015">
                    <Event name="Utah Regional">
                        <Award name="Chrysler Team Spirit Award" />
                    </Event>
                </Season>

                <Season year="2014">
                    <Event name="Hub City Regional">
                        <Award name="Delphi Excellence in Engineering Design" />
                    </Event>
                    <Event name="Wisconsin Regional">
                        <Award name="Delphi Excellence in Engineering Design" />
                    </Event>
                    <Event name="Silicon Valley Regional">
                        <Award name="Delphi Excellence in Engineering Design" />
                    </Event>
                </Season>

                <Season year="2013">
                    {/* The old website has "Utah Regional" listed twice, with 2 different awards. */}
                    {/* I'm assuming that both awards were from Utah, and the duplicated name is not a copy-paste mistake. */}
                    <Event name="Utah Regional">
                        <Award name="Champions (with teams 359 and 3239)" />
                        <Award name="Delphi Excellence in Engineering Design" />
                    </Event>
                </Season>

                <Season year="2012">
                    <Event name="FRC Championship">
                        <Award name="Excellence in Design Award (3D Animation) sponsored by Autodesk" />
                    </Event>
                    {/* See comment above. */}
                    <Event name="Chesapeake Bay Regional">
                        <Award name="Champions (with teams 2377, 3419, 181)" />
                        <Award name="Underwriters Laboratories Safety Award" />
                        <Award name="Delphi Excellence in Engineering Design" />
                    </Event>
                </Season>

                <Season year="2011">
                    <Event name="Seattle Olympic Regional">
                        <Award name="Creativity Award sponsored by Xerox" />
                    </Event>
                    <Event name="Silicon Valley Regional">
                        <Award name="Autodesk Visualization Award" />
                    </Event>
                </Season>

                <Season year="2009">
                    <Event name="Portland Regional">
                        <Award name="Rockwell Automation Innovation in Control Award" />
                    </Event>
                    {/* See comment above. */}
                    <Event name="Silicon Valley Regional">
                        <Award name="General Motors Industrial Design Award" />
                        <Award name="Autodesk Visualization Award" />
                    </Event>
                    <Event name="Hawaii Regional">
                        <Award name="Rockwell Automation Innovation in Control Award" />
                    </Event>
                </Season>

                <Season year="2008">
                    <Event name="Silicon Valley Regional">
                        <Award name="Finalists" />
                        <Award name="Delphi Driving Tomorrow's Technology Award" />
                        <Award name="Autodesk Visualization Award" />
                    </Event>
                </Season>

                <Season year="2006">
                    <Event name="FRC Championship">
                        <Award name="Autodesk Visualization Award Grand Prize Winner" />
                    </Event>
                    <Event name="Silicon Valley Regional">
                        <Award name="Xerox Creativity Award" />
                        <Award name="Chairman's Award" />
                        <Award name="Woodie Flowers Regional Award - Bill Dunbar" />
                    </Event>
                </Season>

                <Season year="2006 CAL Games">
                    <Event name="FIRST Tournament">
                        <Award name="Finalist" />
                    </Event>
                    <Event name="Cal Games">
                        <Award name="Autonomous Mode Challenge Champion" />
                    </Event>
                </Season>

                <Season year="2005">
                    <Event name="Silicon Valley Regional">
                        <Award name="Autodesk Visualization Award" />
                    </Event>
                </Season>

                <Season year="2004">
                    <Event name="Arizona Regional">
                        <Award name="Autodesk Visualization Award" />
                    </Event>
                </Season>

                <Season year="2003">
                    <Event name="Arizona Regional">
                        <Award name="Regional Finalist" />
                        <Award name="Leadership in Control Award" />
                        <Award name="Autodesk Visualization Award" />
                    </Event>
                    <Event name="Silicon Valley Regional">
                        <Award name="General Motors Industrial Design Award" />
                        <Award name="Imagery Award" />
                        <Award name="Autodesk Visualization Award" />
                    </Event>
                    <Event name="Pacific Northwest Regional">
                        <Award name="Autodesk Visualization Award" />
                    </Event>
                    <Event name="Sacramento Regional">
                        <Award name="Autodesk Visualization Award" />
                    </Event>
                    <Event name="Southern California Regional">
                        <Award name="Autodesk Visualization Award" />
                    </Event>
                </Season>

                <Season year="2002">
                    <Event name="Lone Star Regional">
                        <Award name="Regional Champion" />
                    </Event>
                    <Event name="Silicon Valley Regional">
                        <Award name="Chairman's Award" />
                    </Event>
                </Season>

                <Season year="2001">
                    <Event name="National Championships">
                        <Award name="Curie Division Finalist" />
                    </Event>
                    <Event name="Southern California Regional">
                        <Award name="Regional Finalist" />
                        <Award name="Xerox Creativity Award" />
                    </Event>
                    <Event name="Silicon Valley Regional">
                        <Award name="Motorola Quality Award" />
                    </Event>
                </Season>

                <Season year="1999">
                    <Event name="National Championship">
                        <Award name="9th place" />
                        <Award name="Honeywell Leadership in Control Award" />
                    </Event>
                    <Event name="NASA Ames Regional">
                        <Award name="3rd place" />
                    </Event>
                </Season>

                <Season year="1998">
                    <Event name="National Championship">
                        <Award name="Top 25" />
                    </Event>
                </Season>

                <Season year="1997">
                    <Event name="National Championship">
                        <Award name="Top 25" />
                        <Award name="Autodesk Award for Excellence in Engineering Creativity and Communication" />
                    </Event>
                </Season>
            </div>
        </Layout>
    )
}

// A <Season> represents a GRT build year. This component renders the centered year heading, with regionals attended
// during the year passed as children.
function Season(props: {year: string, children: ReactNode}) {
    return (
        <section>
            <h2 className="text-3xl text-center mb-2">{props.year}</h2>
            <div className="flex flex-col gap-6">
                {props.children}
            </div>
        </section>
    )
}

// An <Event> represents a specific regional attended, with awards received at that regional passed as children
// to this component.
function Event(props: {name: string, children: ReactNode}) {
    return (
        <div>
            <h3 className="text-red-700 mb-1.5">{props.name}</h3>
            <div className="flex flex-col gap-0.5">
                {props.children}
            </div>
        </div>
    )
}

// An <Award> represents a specific award won. The name of the award should be passed as `props.name`, with any
// description of the award passed as children.
function Award(props: {name: string, children?: ReactNode}) {
    // TODO: headless-ui disclosure
    return (
        <div className="font-light">{props.name}</div>
    )
}
