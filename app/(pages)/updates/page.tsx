import {Metadata} from 'next';
import { ReactNode } from 'react';


export const metadata: Metadata = {
    title: "2024 Updates"
}

export default function Updates2024() {
    return(
        <>
            <section className="space-y-16 py-16">
                <Update name="November Update" className="container">
                    <p className="font-light mb-6 px-12">
                        shop project
                        - explain basics
                    </p>
                    <div className="flex justify-center gap-2">
                        shop proj images
                    </div>
                    <p className="font-light mb-6 px-12">
                        FLL that we hosted
                        - robot demo
                    </p>
                    <div className="flex justify-center gap-2">
                        FLL images
                    </div>
                </Update>
                <Update name="October Update" className="container">
                    <p className="font-light mb-6 px-12">
                        Haunted House
                        - introduce the mechs
                    </p>
                    <p className="font-light mb-6 px-12">
                        mention subgroup training?
                    </p>
                    <div className="flex justify-center gap-2">
                        haunted house images
                    </div>
                </Update>
                <Update name="September Update" className="container">
                    <p className="font-light mb-6 px-12">
                        This month our rookies took part in shop training to learn new skills applicable to the team. This was taught through four
                        rotations consisting of CAD, lathe, mill, and hand tools. 
                        - explain shop training
                        - mention cad plus
                    </p>
                    <div className="flex justify-center gap-2">
                        shop training images
                    </div>
                    <p className="font-light mb-6 px-12" >
                        - concession started (include?)
                    </p>
                    <p className="font-light mb-6 px-12">
                        - we went camping
                    </p>
                    <div className="flex justify-center gap-2">
                        camping images
                    </div>
                    <p className="font-light mb-6 px-12">
                        FLL (include?)
                    </p>
                    <div className="flex justify-center gap-2">
                        FLL images
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