import {Metadata} from 'next';
import { ReactNode } from 'react';
import Section from '../../../components/Section';
import ImageCarousel from '../../../components/ImageCarousel';
import CaptionedImage from '../../../components/CaptionedImage';

export const metadata: Metadata = {
    title: "2025 Updates"
}

export default function Updates2025() {
    return(
        <>
            <Section className="space-y-16 py-14">
                <Update name="Preseason Update" className='container flex flex-col justify-center items-center'>
                    <div className="flex flex-col gap-y-8 justify-center">
                    <p className='font-light pb-2.5'>
                        From fall to winter, our team spent time preparing for build season in the spring. We reviewed safe machining practices, 
                        learned new procedures, and practiced these skills on a mandatory “evaluation part”. Members used 
                        their leadership and collaboration skills during a blue-box challenge (using limited materials to knock down cups) 
                        and during an annual shop project robot competition between class periods. 
                    </p>
                    <div className="hidden lg:flex gap-1.5 mb-10 w-full justify-center items-center">
                        <img src='/assets/updates/2025/Bluebox.jpg' alt='Bluebox'className='max-h-64 h-auto w-auto'/> 
                        <img src='/assets/updates/2025/Safety.jpg' alt='safety' className='max-h-64 h-auto w-auto'/> 
                        <img src='/assets/updates/2025/Lathe.jpg' alt='lathe'className='max-h-64 h-auto w-auto'/>  
                    </div>
                    <p className='font-light pb-2.5'>
                        During this time we also designed moving mechanisms for a haunted house which we presented at a local elementary school. This year,
                        the house featured a chomping “among-us” figure, a startling clown, a dangling spider, a poking skeleton head, a rabbit popping out 
                        of a box, a Minecraft creeper cracking open, and a mummy peering out the window.
                    </p>
                    <div className="hidden lg:flex gap-1.5 mb-10 w-full justify-center items-center">
                        <img src='/assets/updates/2025/HHphoto.jpg' alt='Haunted house' className='max-h-64 h-auto w-auto'/>
                        <img src='/assets/updates/2025/HHBuilding.jpg' alt='Building'className='max-h-64 h-auto w-auto'/>  
                        <img src='/assets/updates/2025/HHclown.jpg' alt='Clown'className='max-h-64 h-auto w-auto'/>  
                    </div>
                    </div>
                </Update>
                <Update name="Competition Update" className='container flex flex-col justify-center items-center'>
                    <div className="flex flex-col gap-y-8 justify-center">
                    <p className='font-light pb-2.5'> 
                        In the first week of build season, we spent a lot of time discussing optimal strategy for the Reefscape game. 
                        Although this discussion continued throughout the season, we settled on prioritizing coral scoring on all four levels with a source 
                        intake. We first worked on robot 1 which revealed some design flaws that were overlooked before. After a few design reviews, we started 
                        on robot 2 which had improved mechanisms. Notably, we added spring bearings to the elevator and fixed the center of mass for climb.
                    <br/>
                        After weeks of intense work, we competed in the Pinnacles Regional early on in the competition season. There, we discovered some of our
                        robot’s strengths (scoring on barge) and weaknesses (pivot stability and intake geometry). Even though we didn’t qualify for play-offs, 
                        being at Pinnacles helped us to prepare for Idaho. In our four weeks between Pinnacles and Idaho, we had to decide whether we wanted to 
                        alter our intake or start with a completely new design. In the end, we decided to alter the intake and shift our focus toward algae 
                        scoring. We capped off our season at the Idaho Regional, where each sub group played a crucial role in building a robot we’re proud of. 
                    </p>
                    <div className="hidden lg:flex gap-1.5 mb-10 w-full justify-center items-center">
                        <img src ='/assets/updates/2025/ReefAndRobot.jpg'alt='reef' className='max-h-80 h-auto w-auto'/> 
                        <img src ='/assets/updates/2025/Drivers.jpg' alt='drivers'  className='max-h-80 h-auto w-auto'/> 
                        <video src='/assets/updates/2025/Autoalign.MP4' className='max-h-80 h-auto w-auto' autoPlay loop muted/>
                    </div>
                    </div>
                </Update>
                <Update name="Postseason Update" className='container flex flex-col justify-center items-center'>
                    <p className='font-light pb-2.5'>
                    With the competition season wrapped up, we're turning our attention to outreach, training, and planning for the year ahead. To prepare for life outside of highschool, we spend time researching and 
                    presenting different topics to the class as well as curating our resumes. Towards the end of the year, we start organizing 
                    for our hands-on summer camp to teach elementary and middle schoolers more about robotics. 
                    </p>
                </Update>
            </Section>
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