import {ReactNode} from 'react';


// A special layout for the year-by-year writeups in `/FIRST`.
// TODO: is this component needed?
export default function WriteupLayout(props: {children: ReactNode}) {
    return (
        <main className="pb-8 flex-grow">
            {props.children}
        </main>
    )
}

export function WriteupSection(props: {children: ReactNode, secondary?: boolean}) {
    return (
        <section className={'py-16' + (props.secondary ? ' bg-[rgb(245,_245,_245)]' : '')}>
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}
