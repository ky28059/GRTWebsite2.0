import {Metadata} from 'next';
import { ReactNode } from 'react';
import Section from '../../../components/Section';

export const metadata: Metadata = {
    title: "2025 Updates"
}

export default function Updates2025(){
    return(
        <>
            <Section className="space-y-16 py-14 px-28">
                <Update name="2025 Competition Update" className='container flex flex-col justify-center items-center'>
                    <div className="flex flex-col-reverse lg:flex-row gap-x-12 gap-y-8 justify-center">
                        {/* <img src='/assets/updates/2025/HHdragon.jpeg' alt ='HHdragon' className = 'w-full rounded max-w-md mx-auto lg:mx-0 h-48 scale-110'/> */}
                    <p className='font-light pb-2.5'>
                        After months of intense work, we competed in the Pinnacles Regional early on in the competition season. There, we discovered some of our 
                        robot’s weaknesses (pivot stability) which helped us prepare for the next competition. We capped off our season at the Idaho Regional,
                        where our robot performed far more reliably and our team grew stronger than ever. Despite earlier struggles forcing us to streamline our 
                        design, each sub group played a crucial role in building a robot we’re proud of. Along the way, we earned the Team Spirit Award at the 
                        Idaho Regional and forged lasting bonds with teams from across the world. 
                    </p>
                    </div>
                    <p className='font-light pb-2.5'>
                        <br/>
                        Post-season, we're turning our attention to outreach, training, and planning for the year ahead. We're hosting our hands-on summer camp for
                        potential members, reviewing this year's problems, and looking forward to off-season events like FLL (First Lego League) and both our 
                        annual shop project and our haunted house. The business team is also working on new ways to share our story and expand our community through 
                        new sponsors and community engagement. Though build season is over, the energy in the shop hasn't slowed down—if anything, we’re more motivated 
                        than ever to keep learning, growing, and gearing up for what comes next!
                    </p>
                </Update>
            </Section>
        </>
    )

}

function Update(props: {name: string, children: ReactNode, className?: string}) {
    return (
        <section className={props.className}>
            <h3 className="text-2xl font-medium mb-6 text-center">{props.name}</h3>
            {props.children}
        </section>
    )
}

