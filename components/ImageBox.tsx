import {ReactNode} from 'react';
import Link from 'next/link';


// Renders an image box with link and title. Pass the caption / subheading as children.
type ImageBoxProps = {name: string, src: string, href: string, children: ReactNode};
export default function ImageBox(props: ImageBoxProps) {
    return (
        <Link href={props.href} className="flex text-inherit hover:no-underline">
            <div className="rounded-lg overflow-hidden max-w-md border border-gray-300 hover:border-gray-600 transition duration-200">
                <img src={props.src} alt={props.name} className="h-64 w-[28rem] object-cover" />
                <div className="px-5 py-4">
                    <h3 className="font-medium mb-1">{props.name}</h3>
                    <p className="font-light text-sm">{props.children}</p>
                </div>
            </div>
        </Link>
    )
}
