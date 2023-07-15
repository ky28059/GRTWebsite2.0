import {ReactNode} from 'react';


export default function Question(props: {name: string, children: ReactNode}) {
    return (
        <section>
            <h3 className="text-lg font-medium mb-2">{props.name}</h3>
            <p className="border-l-2 border-gray-100 pl-4 font-light">{props.children}</p>
        </section>
    )
}
