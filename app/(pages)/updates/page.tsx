import {Metadata} from 'next';
import { ReactNode } from 'react';


export const metadata: Metadata = {
    title: "2024 Updates"
}

export default function Updates2024() {
    return(
        <>
            <section className="space-y-16 py-14 px-20">
                <Update name="Build Season: January Update" className='container'>
                    <p className='font-light pb-2.5'>
                        This 2024 season, our annual kickoff potluck lasted from 8-2 on the first Saturday. 
                        After breakfast, we watched the game live stream together and brainstormed ideas. 
                        This year's game involves shooting rings into narrow spaces. After discussing potential 
                        robot ideas, we split into groups to discuss the game rules, and then joined together to 
                        share thoughts.
                    </p>
                    <h2 className='text-xl font-light italic text-slate-600 py-1.5'>
                        Week 1:
                    </h2>
                    <p className='font-light py-2.5'>
                        In the first week, our four mech groups started by brainstorming, developing, and prototyping
                        ideas for full robot designs. This concluded in a town hall-style meeting on Wednesday in 
                        which we established an agreed-upon robot design. Groups then diligently made their first 
                        CAD models which were critiqued by our mentors during several design reviews.
                    </p>
                    <p className='font-light py-2.5'>
                    The subgroups have been hard at work as the season begins. Drivetrain has been working on swerve
                     modules, and controls has been programming each mechanism and swerve for our first robot iteration. 
                     The business subgroup has been working on competition awards, and animations recently submitted their
                     animation called Pass it Forward for the Digital Animation Award on January 18th.
                    </p>
                    <div className='flex w-full justify-center py-10'>
                        <iframe width="610" height="365" src="https://www.youtube.com/embed/lR_LU8zNb8M?si=cD__IWdGPiK20-Yg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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