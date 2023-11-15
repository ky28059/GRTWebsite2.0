import {Metadata} from 'next';
import { ReactNode } from 'react';


export const metadata: Metadata = {
    title: "2024 Updates"
}

export default function Updates2024() {
    return(
        <>
            <section className="spcae-y-16 py-16">
                <Update name="Pre-Build Update" className="container">
                        <p className="font-light mb-6">
                            stuff happenned !!
                        </p>
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