import {Metadata} from 'next';
import { ReactNode } from 'react';


export const metadata: Metadata = {
    title: "2024 Updates"
}

export default function Updates2024() {
    return(
        <>
            <section className="space-y-16 py-14 px-28">
                <Update name="Build Season: January Update" className='container flex flex-col justify-center items-center'>
                    <p className='font-light pb-2.5'>
                    This season began with our annual kickoff potluck, where the team got together to analyze the 
                    2024 FRC game <a href = 'https://www.youtube.com/watch?v=9keeDyFxzY4'>2024 FIRST Robotics Competition CRESCENDO presented by Haas Game Animation</a>
                    . Summarized, the game is designed for robots to deliver foam rings to different areas on the map. 
                    This year's game also consisted of an unusual climb, in which the robot must hang on a chain alongside
                    other robots after the two minute game period.  After breakfast, the team watched the game reveal
                    live stream video and brainstormed potential ideas. Over 20 generous GRT alums visited the shop and 
                    built the game pieces. Our kickoff weekend concluded with a humanized version of the game, with 
                    team members playing the robots.
                    </p>
                    <div className='w-full md:w-1/2 py-10'>
                        <img src='/assets/updates/2024/gamefield.png'/>
                    </div>
                    <p className='font-light py-2.5'>
                    In our first week of kickoff our four mechanism groups, the climb, intake, shooter and elevator, brainstormed 
                    potential ideas for full robot designs. We then established our full robot in a town-hall style meeting with the
                    team, mechanism leads, and mentors. The shooter and intake provided unique difficulties this year, since the 
                    ring must be capable of reaching several areas on the map and be picked up at different angles. After designing, 
                    machining and assembling our first robot, we used lessons learnt in its creation to make an improved robot two. 
                    </p>
                    <p className='font-light py-2.5'>
                    In this time, subgroups have been hard at work on their designated aspects of the team. Recently, the drivetrain
                     has been machining the swerve drive for our second robot. The controls subgroup is programming the autonomous 
                     section of the competition, which involves picking up and placing the rings on a foot tall wooden stage. Business just 
                     finished the Impact Award (formerly known as The Chairman's Award), capable of sending us to The World 
                     Championships if won, and the animation subgroup recently submitted the Digital Animation Award:
                    </p>
                    <div className='py-10'>
                        <iframe width="610" height="365" src="https://www.youtube.com/embed/lR_LU8zNb8M?si=cD__IWdGPiK20-Yg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                    <p className='font-light py-2.5'>
                    We are excited to watch our finalized robot in action as we wrap up the final weeks of the build season. This year we
                     will be attending the Silicon Valley Regional (SVR), for the first time in competition week one, and the Idaho Regional 
                     during week four. Please feel free to visit us during tournaments! In preparation for competitions, our members adhered 
                     to our longstanding tradition by once again dying our hair a bright hue of red!
                    </p>
                </Update>
                <Update name="Build Season: February and March Update" className='container flex flex-col justify-center items-center'>
                    <p className='font-light pb-2.5'>      
                    We learnt a great deal from our recent competition at SVR. Our robot was accustomed the old game pieces, and struggled 
                    to adjust to the new ones. Currently, we are actively practicing with both the old and updated game pieces in order to mitigate
                     this problem. Our climb mechanism also string began unraveling the opposite direction at a certain point, so we increased 
                     the length of our string that pulls the robot upwards. Alongside the technical aspects, the tournament was just as much fun.
                    We got to interact with GRT alumni, cheer OUICHA per usual, and stress about the robot in the pits together!
                    </p>
                    <div className='w-full md:w-1/3 py-10'>
                        <img src='/assets/updates/2024/SVR.png'/>
                    </div>
                    <p className='font-light pb-2.5'>      
                    We recently competed in the Idaho Regional. Throughout the competition, we faced countless issues with controls and 
                    mechs to overcome. Our swerve’s tread fell off, we had CAN issues, and various hard collisions heavily damaged our robot
                     all around. Thus, we lost our first few matches, ranking last place with zero ranking points. Our intake’s Falcon burnt out 
                     and our spare motor couldn't connect, forcing us to borrow a Falcon from Peninsula Robotics (6036). This let us get the 
                     robot back up and running during lunch, win our next two matches, and bring us up to 21st out of the 43 teams. Later, 
                     one of our swerve modules stopped working after collisions that pushed the battery until it broke the mounting zip ties 
                     and broke a circuit. 
                    </p>
                    <p className="font-light pb-2.5">
                    After overcoming many over our controls and mech-related issues, we made it to the playoffs as a first-pick team on the 
                    7th Alliance. Our alliance consisted of the Tators(2122) and Bullbots(1891). In our first match, Match 3, we played the 
                    2nd ranked alliance, we won with a final score of 104-61. In our next match, Match 8, we lost 72-76, sending us to the
                     lower bracket. Although disappointed, we still maintained high morale. We continued to win Matches 10, 12, and 13, 
                     eventually advancing us to the finals! Although the odds were against us, we were so proud to have made it this far. We 
                     won both the first and third finals rounds, winning  the competition as a whole and bringing home a prized blue banner!
                    </p>
                    <div className='w-full md:w-1/3 py-4 pt-8 h-1/3 gap-4 flex flex-col md:flex-row justify-center'>
                        <img src='/assets/updates/2024/IdahoTeam.png'/>
                        <img src='/assets/updates/2024/IdahoDrive.png'/>
                    </div>
                    <div className='w-full md:w-1/3 pb-4 gap-4 flex flex-row'>
                        {/* <img src='/assets/updates/2024/IdahoCheer.png'/> */}
                        <img src='/assets/updates/2024/IdahoFlag.png'/>
                    </div>
                </Update>
            </section>
        </>
    )
}

// An update block. Renders a section with centered title.
function Update(props: {name: string, children: ReactNode, className?: string}) {
    return (
        <section className={props.className}>
            <h3 className="text-2xl font-medium mb-6 text-center">{props.name}</h3>
            {props.children}
        </section>
    )
}