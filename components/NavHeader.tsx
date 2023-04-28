import {ReactNode} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Popover} from '@headlessui/react';
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
                    {renderRoutes(routes.sm, NavLink)}
                </div>
                {/* Hidden when screen width < 768px */}
                <div className="hidden md:flex">
                    {renderRoutes(routes.md, NavLink)}
                </div>
                {/* Hidden when screen width < 1024px */}
                <div className="hidden lg:flex">
                    {renderRoutes(routes.lg, NavLink)}
                </div>
                {/* Hidden when screen width < 1280px */}
                <div className="hidden xl:flex">
                    {renderRoutes(routes.xl, NavLink)}
                </div>

                <Popover className="relative self-center px-3 pt-1 h-max xl:hidden">
                    <Popover.Button aria-label="Expand nav">
                        <BsThreeDots className="text-white text-3xl p-1" />
                    </Popover.Button>
                    <AnimatedPopover className="absolute top-full right-0 z-10 rounded-lg py-3 bg-black/60 shadow-lg backdrop-blur-sm">
                        <div className="sm:hidden">
                            {renderRoutes(routes.sm, PopoverNavLink)}
                        </div>
                        <div className="md:hidden">
                            {renderRoutes(routes.md, PopoverNavLink)}
                        </div>
                        <div className="lg:hidden">
                            {renderRoutes(routes.lg, PopoverNavLink)}
                        </div>
                        <div className="xl:hidden">
                            {renderRoutes(routes.xl, PopoverNavLink)}
                        </div>
                    </AnimatedPopover>
                </Popover>
            </nav>
        </header>
    )
}

// TODO: abstract this to own file?
type RouteSegment = {name: string, href: string}
type Route = {name: string, routes: RouteSegment[]} | RouteSegment
type Routes = {
    sm: Route[], md: Route[], lg: Route[], xl: Route[]
}
const routes: Routes = {
    sm: [
        {name: 'About', routes: [
            {name: 'About', href: '/#about'},
            {name: 'FIRST', href: '/FIRST'},
            {name: 'Subgroups', href: '/subgroups'},
            {name: 'Mentors', href: '/mentors'}
        ]},
        {name: 'Summer', href: '/summer'},
        {name: 'Seasons', href: '/seasons'},
        {name: 'Updates', href: '/updates'},
    ],
    md: [
        // {name: 'Resources', href: '/resources'},
        {name: 'Sponsors', href: '/#sponsors'},
    ],
    lg: [
        {name: 'Join', href: '/join'}
    ],
    xl: [
        {name: 'Donations', href: '/donations'}
    ]
}

function renderRoutes(
    r: Route[],
    component: (props: {href: string, children: ReactNode}) => JSX.Element,
) {
    const NavLink = component;

    return r.map((route) => 'routes' in route ? (
        <NavDropdown component={NavLink} routes={route.routes} key={route.name} />
    ) : (
        <NavLink href={route.href} key={route.name}>{route.name}</NavLink>
    ))
}

type NavDropdownProps = {
    component: (props: {href: string, children: ReactNode}) => JSX.Element,
    routes: RouteSegment[]
}
function NavDropdown(props: NavDropdownProps) {
    const NavLink = props.component;

    return (
        <div className="relative group flex">
            <NavLink href={props.routes[0].href}>
                {props.routes[0].name} <AiFillCaretDown />
            </NavLink>
            <div className="hidden group-hover:block absolute top-full left-0 z-10 rounded-lg py-3 bg-black/60 shadow-lg backdrop-blur-sm">
                {props.routes.map(({name, href}) => (
                    <PopoverNavLink href={href} key={name}>{name}</PopoverNavLink>
                ))}
            </div>
        </div>
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
