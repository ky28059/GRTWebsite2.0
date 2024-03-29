import {ReactNode} from 'react';


export default function Section(props: {children: ReactNode, secondary?: boolean, className?: string}) {
    return (
        <section className={'py-16' + (props.secondary ? ' bg-[rgb(245,_245,_245)]' : '')}>
            <div className={'container' + (props.className ? ` ${props.className}` : '')}>
                {props.children}
            </div>
        </section>
    )
}
