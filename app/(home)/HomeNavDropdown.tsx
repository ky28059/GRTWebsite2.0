import {ReactNode} from 'react';
import {Popover} from '@headlessui/react';
import {AiFillCaretDown} from 'react-icons/ai';

// Components
import {PopoverNavLink, RouteSegment} from '../../components/NavHeader';
import AnimatedPopover from '../../components/AnimatedPopover';


type HomeNavDropdownProps = {
    routes: RouteSegment[],
    children: ReactNode
}
export default function HomeNavDropdown(props: HomeNavDropdownProps) {
    return (
        <Popover className="relative flex">
            {({open}) => (<>
                <Popover.Button className="relative flex items-center gap-2 p-4 text-white hover:bg-black/40 transition duration-200">
                    {props.children} <AiFillCaretDown className={'transition-transform duration-200' + (open ? ' rotate-180' : '')} />
                </Popover.Button>
                <AnimatedPopover className="absolute top-full left-0 z-10 rounded-lg py-3 bg-black/60 shadow-lg backdrop-blur-sm">
                    {props.routes.map(({name, href}) => (
                        <PopoverNavLink href={href} key={name}>{name}</PopoverNavLink>
                    ))}
                </AnimatedPopover>
            </>)}
        </Popover>
    )
}
