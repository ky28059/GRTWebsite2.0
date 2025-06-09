import {ReactNode} from 'react';


type ResourceProps = {src: string, href: string, name: string, children: ReactNode}
export default function Resource(props: ResourceProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-x-6 gap-y-4">
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                <img
                    src={props.src}
                    alt={props.name}
                    className="mx-auto max-h-80 max-w-sm outline outline-1 outline-gray-400 hover:ring-4 ring-secondary/80"
                />
            </a>
            <div>
                <h3 className="font-medium mb-2">{props.name}</h3>
                <div className="text-secondary text-sm">{props.children}</div>
            </div>
        </div>
    )
}
