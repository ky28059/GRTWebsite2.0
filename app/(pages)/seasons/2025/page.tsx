import {Metadata} from 'next';
import Section from '../../../../components/Section';
import CaptionedImage from '../../../../components/CaptionedImage';
import Resource from '../../resources/Resource';
import ImageCarousel from '../../../../components/ImageCarousel';
import AutoCarousel from '../../../../components/AutoCarousel';

export const metadata: Metadata = {
    title: '2025'
}

export default function GRT2025(){
    return(
        <>
            <Section>
                <h1 className="text-4xl font-medium mb-3 text-center">
                    FIRST | Reefscape
                </h1>
                <h3 className="text-lg text-center mb-6">GRT 2024-2025</h3>
                <p className="font-light mb-6">
                    In REEFSCAPE, teams are immersed in an ocean conservation-themed challenge where alliances of three robots 
                    each collect and score two types of game pieces: PVC pipe "Coral" and green rubber "Algae" balls. 
                    During matches, robots strategically place Coral on their alliance's Reef structure and deliver 
                    Algae to their Barge or Processor, aiming to maximize points through precise placement and coordination. 
                    The game culminates in an endgame where robots climb onto suspended Cages on the Barge, simulating efforts to 
                    restore and balance reef ecosystems.
                </p>
                <p className="font-light">
                Read more about the 2025 FRC game in the <a href="https://firstfrc.blob.core.windows.net/frc2025/Manual/2025GameManual.pdf" 
                target = "_blank" rel="noopener noreferrer" >Game Manual</a>  and watch the <a href="https://www.youtube.com/watch?v=YWbxcjlY9JY&ab_channel=FIRSTRoboticsCompetition" target="_blank" rel="noopener noreferrer">game animation video </a>on YouTube.
                </p>
            </Section>
            <Section secondary className="flex flex-col-reverse lg:flex-row gap-x-12 gap-y-8 justify-center">
                <img
                    src="/assets/seasons/2025/Incarnadine.jpeg"
                    alt="2025 robot"
                    className="rounded w-full max-w-xs mx-auto lg:mx-0"
                />
                <div className="lg:py-4 lg:max-w-lg">
                    <h2 className="text-2xl font-medium mb-6">
                        INCARNADINE — OUR 2025 ROBOT
                    </h2>
                    <div className="font-light">
                        <p className="flex gap-2">
                            <strong className="font-medium">Name:</strong>
                            Incarnadine
                        </p>
                        <p className="flex gap-2">
                            <strong className="font-medium">Dimensions:</strong>
                            33” W x 27” L x 38” H
                        </p>
                        <p className="flex gap-2">
                            <strong className="font-medium">Weight:</strong>
                            114 lbs
                        </p>
                        <p><strong className="font-medium">Features:</strong></p>
                        <ul className="list-outside list-disc pl-8">
                            <li>3 Stage elevator</li>
                            <li>4 Roller dual-purpose intake (picks up coral and algae)</li>
                            <li>Dual-climb hooks for deep climb </li>
                            <li>Optimized acceleration to sprint 16 ft in 1.1 seconds</li>
                        </ul>
                    </div>
                </div>
            </Section>
            <Section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Resource name="Technical Binder" src="/assets/resources/2025-technical-binder.jpeg" href="/resources/2025-technical-binder.pdf">
                    Our 2025 Technical Binder 
                </Resource>
                <Resource name="Drivetrain Binder" src="/assets/resources/2025-DT-binder.jpg" href="/resources/2025-DT-binder.pdf">
                    Our 2025 Drivetrain Technical Binder
                </Resource>
            </Section>
            <Section>
                <h2 className="text-2xl font-medium text-center mb-6">
                    Competitions
                </h2>
                <p  className="font-light mb-8">
                    This year, our team members attended both the Pinnacles Regional in Hollister, California and the Idaho Regional in Nampa, Idaho.
                    During competition, all students contributed to the robot’s success by working on the drive team, pit crew, strategy team, 
                    impact/ business team, and/or scouting team.
                </p>
                
                <h3 className="text-lg font-medium mb-3">
                    Pinnacles Regional
                </h3>
                <div className="mb-5 pl-6 border-l-4 border-secondary/50">
                    <p className="flex gap-2 font-light">
                        <strong className="font-normal">Rank:</strong>19
                    </p>
                </div>
                <h3 className="text-lg font-medium mb-3">
                    Idaho Regional
                </h3>
                <div className="mb-5 pl-6 border-l-4 border-secondary/50 ">
                    <p className="flex gap-2 font-light">
                        <strong className="font-normal">Rank:</strong>15
                    </p>
                    <p className="flex gap-2 font-light">
                        <strong className="font-normal">Quarter finalists with 4th seed alliance:</strong>
                        696, 115, 192
                    </p>
                </div>
                <div className="py-3 px-10">
                <AutoCarousel
                    sources ={[ '/assets/seasons/2025/RobotEatAlgae.jpg', '/assets/updates/2025/ReefAndRobot.jpg', '/assets/updates/2025/HangingRobot.jpg']}
                    alts={[ 'Intaking Algae', 'Reef and Robot', 'Hanging Robot']}
                    captions = {['Intaking Algae' , 'Reef and Robot', 'Hanging Robot']}

                    // sources ={[ '/assets/seasons/2025/JesseAndTony.jpg', '/assets/seasons/2025/MishaAndLucca.jpg', '/assets/seasons/2025/RobotEatAlgae.jpg']}
                    // alts={['Students calibrating vision', 'Drive team', 'Intaking Algae']}
                    // captions = {[ 'Calibrating vision', 'Drive team', 'Intaking Algae']}
                />
                </div>
            </Section>

        </>
    )
}