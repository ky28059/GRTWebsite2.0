import {ReactNode} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Popover} from '@headlessui/react';
import AnimatedPopover from './AnimatedPopover';
import {BsThreeDots} from 'react-icons/bs';


// A nav header abstraction to render the `<header>` with the GRT logo and nav displayed on both the home and non-home
// navbars. This automatically handles hiding nav links on low-width screens, rendering an expand menu for the hidden
// routes. The component to use for the nav links (the home nav uses a different component) is passed to `props.component`,
// and additional classes to apply to the `<header>` are passed to `props.className`.
type NavHeaderProps = {
    className?: string,
    component: (props: {href: string, children: ReactNode}) => JSX.Element
};
export default function NavHeader(props: NavHeaderProps) {
    const NavLink = props.component;

    return (
        <header className={'flex items-stretch justify-between px-2 md:px-5' + (props.className ? ` ${props.className}` : '')}>
            <Link href="/" className="flex items-center">
                <img src="/logo.svg" alt="GRT Logo" className="w-20 my-3" />
            </Link>

            <nav className="flex">
                {/* Hidden when screen width < 640px */}
                <div className="hidden sm:flex">
                    <NavLink href="/#about">About</NavLink>
                    <NavLink href="/FIRST">FIRST</NavLink>
                    <NavLink href="/seasons">Seasons</NavLink>
                    <NavLink href="/updates">Updates</NavLink>
                    <NavLink href="/subgroups">Subgroups</NavLink>
                </div>
                {/* Hidden when screen width < 768px */}
                <div className="hidden md:flex">
                    {/* <NavLink href="/resources">Resources</NavLink> */}
                    <NavLink href="/mentors">Mentors</NavLink>
                </div>
                {/* Hidden when screen width < 1024px */}
                <div className="hidden lg:flex">
                    <NavLink href="/#sponsors">Sponsors</NavLink>
                    <NavLink href="/join">Join</NavLink>
                    <NavLink href="/summer">Summer</NavLink>
                </div>
                {/* Hidden when screen width < 1280px */}
                <div className="hidden xl:flex">
                    <NavLink href="/donations">Donations</NavLink>
                </div>

                <Popover className="relative self-center px-3 pt-1 h-max lg:hidden">
                    <Popover.Button aria-label="Expand nav">
                        <BsThreeDots className="text-white text-3xl p-1" />
                    </Popover.Button>
                    <AnimatedPopover className="absolute top-full right-0 z-10 rounded-lg py-3 bg-black/60 shadow-lg backdrop-blur-sm">
                        <div className="sm:hidden">
                            <PopoverNavLink href="/#about">About</PopoverNavLink>
                            <PopoverNavLink href="/updates">Updates</PopoverNavLink>
                            <PopoverNavLink href="/FIRST">FIRST</PopoverNavLink>
                            <PopoverNavLink href="/subgroups">Subgroups</PopoverNavLink>
                            <PopoverNavLink href="/mentors">Mentors</PopoverNavLink>
                        </div>
                        <div className="md:hidden">
                            {/* <PopoverNavLink href="/resources">Resources</NavLink> */}
                            <PopoverNavLink href="/#sponsors">Sponsors</PopoverNavLink>
                        </div>
                        <div className="lg:hidden">
                            <PopoverNavLink href="/join">Join</PopoverNavLink>
                            <PopoverNavLink href="/summer">Summer</PopoverNavLink>
                            <PopoverNavLink href="/donations">Donations</PopoverNavLink>
                        </div>
                    </AnimatedPopover>
                </Popover>
            </nav>
        </header>
    )
}

function PopoverNavLink(props: {href: string, children: ReactNode}) {
    const {href, children} = props;
    const {pathname} = useRouter();
    const active = pathname.startsWith(href);

    return (
        <Link href={href} className={'block text-white hover:no-underline hover:bg-black/40 px-4 py-2 transition duration-100' + (active ? ' bg-black/40' : '')}>
            {children}
        </Link>
    )
}
