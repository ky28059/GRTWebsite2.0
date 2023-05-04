import {ReactNode} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Disclosure, Popover} from '@headlessui/react';
import AnimatedPopover from './AnimatedPopover';

// Icons
import {BsThreeDots} from 'react-icons/bs';
import {AiFillCaretDown} from 'react-icons/ai';


// A nav header abstraction to render the `<header>` with the GRT logo and nav displayed on both the home and non-home
// navbars. This automatically handles hiding nav links on low-width screens, rendering an expand menu for the hidden
// routes. The component to use for the nav links (the home nav uses a different component) is passed to `props.component`,
// and additional classes to apply to the `<header>` are passed to `props.className`.
type NavHeaderProps = {
    className?: string,
    component: (props: {href: string, children: ReactNode}) => JSX.Element,
    dropdownComponent: (props: {routes: RouteSegment[], children: ReactNode}) => JSX.Element
};
export default function NavHeader(props: NavHeaderProps) {
    const NavLink = props.component;
    const NavDropdown = props.dropdownComponent;

    return (
        <header className={'flex items-stretch justify-between px-2 md:px-5' + (props.className ? ` ${props.className}` : '')}>
            <Link href="/" className="flex items-center">
                <img src="/logo.svg" alt="GRT Logo" className="w-20 my-3" />
            </Link>

            <nav className="flex">
                {/* Hidden when screen width < 640px */}
                <div className="hidden sm:flex">
                    {renderRoutes(routes.sm, NavLink, NavDropdown)}
                </div>
                {/* Hidden when screen width < 768px */}
                <div className="hidden md:flex">
                    {renderRoutes(routes.md, NavLink, NavDropdown)}
                </div>
                {/* Hidden when screen width < 1024px */}
                <div className="hidden lg:flex">
                    {renderRoutes(routes.lg, NavLink, NavDropdown)}
                </div>
                {/* Hidden when screen width < 1280px */}
                <div className="hidden xl:flex">
                    {renderRoutes(routes.xl, NavLink, NavDropdown)}
                </div>

                <Popover className="relative self-center px-3 pt-1 h-max xl:hidden">
                    <Popover.Button aria-label="Expand nav">
                        <BsThreeDots className="text-white text-3xl p-1" />
                    </Popover.Button>
                    <AnimatedPopover className="absolute top-full right-0 z-50 rounded-lg py-3 bg-black/60 shadow-lg backdrop-blur-sm">
                        <div className="sm:hidden">
                            {renderRoutes(routes.sm, PopoverNavLink, PopoverNavDropdown)}
                        </div>
                        <div className="md:hidden">
                            {renderRoutes(routes.md, PopoverNavLink, PopoverNavDropdown)}
                        </div>
                        <div className="lg:hidden">
                            {renderRoutes(routes.lg, PopoverNavLink, PopoverNavDropdown)}
                        </div>
                        <div className="xl:hidden">
                            {renderRoutes(routes.xl, PopoverNavLink, PopoverNavDropdown)}
                        </div>
                    </AnimatedPopover>
                </Popover>
            </nav>
        </header>
    )
}

// TODO: abstract this to own file?
export type RouteSegment = {name: string, href: string}
type Route = {name: string, routes: RouteSegment[]} | RouteSegment
type Routes = {
    sm: Route[], md: Route[], lg: Route[], xl: Route[]
}
const routes: Routes = {
    sm: [
        {name: 'About', routes: [
            {name: 'About us', href: '/#about'},
            {name: 'FIRST', href: '/FIRST'},
            {name: 'Subgroups', href: '/subgroups'},
            {name: 'Mentors', href: '/mentors'}
        ]},
        {name: 'Summer', href: '/summer'},
        {name: 'Seasons', href: '/seasons'},
        {name: 'Updates', href: '/updates'},
    ],
    md: [
        {name: 'Sponsors', href: '/#sponsors'},
    ],
    lg: [
        {name: 'Resources', href: '/resources'},
        {name: 'Join', href: '/join'}
    ],
    xl: [
        {name: 'Donations', href: '/donations'}
    ]
}

function renderRoutes(
    r: Route[],
    component: (props: {href: string, children: ReactNode}) => JSX.Element,
    dropdownComponent: (props: {routes: RouteSegment[], children: ReactNode}) => JSX.Element,
) {
    const NavLink = component;
    const NavDropdown = dropdownComponent;

    return r.map((route) => 'routes' in route ? (
        <NavDropdown routes={route.routes} key={route.name}>
            {route.name}
        </NavDropdown>
    ) : (
        <NavLink href={route.href} key={route.name}>{route.name}</NavLink>
    ))
}

// TODO: abstract into own file?
export function PopoverNavLink(props: {href: string, children: ReactNode}) {
    const {href, children} = props;
    const {pathname} = useRouter();
    const active = pathname.startsWith(href);

    return (
        <Link href={href} className={'block text-white hover:no-underline hover:bg-black/40 px-4 py-2 transition duration-100' + (active ? ' bg-black/40' : '')}>
            {children}
        </Link>
    )
}

type PopoverNavDropdownProps = {
    routes: RouteSegment[],
    children: ReactNode
}
function PopoverNavDropdown(props: PopoverNavDropdownProps) {
    return (
        <Disclosure>
            {({open}) => (<>
                <Disclosure.Button className="flex items-center gap-2 w-full text-white hover:no-underline hover:bg-black/40 px-4 py-2 transition duration-100">
                    {props.children} <AiFillCaretDown className={'transition-transform duration-200' + (open ? ' rotate-180' : '')} />
                </Disclosure.Button>
                <Disclosure.Panel className="">
                    {props.routes.map(({name, href}) => (
                        <PopoverNavLink href={href} key={name}>{name}</PopoverNavLink>
                    ))}
                </Disclosure.Panel>
            </>)}
        </Disclosure>
    )
}
