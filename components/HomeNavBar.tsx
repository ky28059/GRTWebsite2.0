import {ReactNode} from 'react';
import Link from 'next/link';
import {Popover} from '@headlessui/react';

// Components
import NavHeader, {PopoverNavLink, RouteSegment} from './NavHeader';
import AnimatedPopover from './AnimatedPopover';

// Icons
import {AiFillCaretDown} from 'react-icons/ai';


// The transparent navbar displayed on the home page. The main differences between this component and `<NavBar>`
// are the lack of background, carets, and a subnavbar.
// TODO: is this component necessary?
export default function HomeNavBar() {
    return (
        <NavHeader
            component={HomeNavLink}
            dropdownComponent={HomeNavDropdown}
            className="absolute top-0 w-full z-30"
        />
    )
}

type HomeNavLinkProps = {href: string, children: ReactNode};
function HomeNavLink(props: HomeNavLinkProps) {
    const {href, children} = props;
    return (
        <Link href={href} className="relative flex items-center gap-2 p-4 text-white hover:bg-black/40 transition duration-200">
            {children}
        </Link>
    )
}

type HomeNavDropdownProps = {
    routes: RouteSegment[],
    children: ReactNode
}
function HomeNavDropdown(props: HomeNavDropdownProps) {
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
