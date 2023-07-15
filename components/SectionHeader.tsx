import {ReactNode} from 'react';
import {FiLink} from 'react-icons/fi';


type SectionHeaderProps = {id: string, children: ReactNode};
export default function SectionHeader(props: SectionHeaderProps) {
    return (
        <div className="relative mb-3">
            <span id={props.id} className="absolute -top-24" />
            <a href={`#${props.id}`} className="text-inherit group flex gap-1.5 items-center hover:underline decoration-1 underline-offset-4 decoration-secondary decoration-dotted">
                <h3 className="text-lg font-medium">
                    {props.children}
                </h3>
                <FiLink className="hidden group-hover:block text-lg pb-0.5 mt-1 stroke-[1.5px]" />
            </a>
        </div>
    )
}
