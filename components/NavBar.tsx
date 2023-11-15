'use client'

import {ReactNode} from 'react';
import Link from 'next/link';
import {useSelectedLayoutSegment, useSelectedLayoutSegments} from 'next/navigation';
import {Popover} from '@headlessui/react';

// Components
import NavHeader, {PopoverNavLink, RouteSegment} from './NavHeader';
import AnimatedPopover from './AnimatedPopover';

// Icons
import {AiFillCaretDown} from 'react-icons/ai';


// The red navbar displayed on evey page except for the home page.
export default function NavBar() {
    return (
        <div>
            <NavHeader component={NavLink} dropdownComponent={NavDropdown} className="bg-theme" />

            {/* Subnav */}
            <div className="overflow-x-auto bg-black text-white">
                <nav className="flex w-max mx-auto min-h-[1rem] px-5">
                    <Match href="/seasons">
                        <SubNavLink href="/seasons">Accolades</SubNavLink>
                        <SubNavLink href="/seasons/2023">2023</SubNavLink>
                        <SubNavLink href="/seasons/2019">2019</SubNavLink>
                        <SubNavLink href="/seasons/2018">2018</SubNavLink>
                        <SubNavLink href="/seasons/2016">2016</SubNavLink>
                        <SubNavLink href="/seasons/2015">2015</SubNavLink>
                        <SubNavLink href="/seasons/2014">2014</SubNavLink>
                        <SubNavLink href="/seasons/2013">2013</SubNavLink>
                        <SubNavLink href="/seasons/2012">2012</SubNavLink>
                    </Match>
                    <Match href="/subgroups">
                        <SubNavLink href="/subgroups">Subgroups</SubNavLink>
                        <SubNavLink href="/subgroups/controls">Controls</SubNavLink>
                        <SubNavLink href="/subgroups/drivetrain">Drivetrain</SubNavLink>
                        <SubNavLink href="/subgroups/cnc">CNC</SubNavLink>
                        <SubNavLink href="/subgroups/pneumatics">Pneumatics</SubNavLink>
                        <SubNavLink href="/subgroups/animation">Animation</SubNavLink>
                        <SubNavLink href="/subgroups/welding">Welding</SubNavLink>
                        <SubNavLink href="/subgroups/business">Business</SubNavLink>
                    </Match>
                    <Match href="/mentors">
                        <SubNavLink href="/mentors">Mentors</SubNavLink>
                        <SubNavLink href="/mentors/kristina">Kristina</SubNavLink>
                        <SubNavLink href="/mentors/seth">Seth</SubNavLink>
                        <SubNavLink href="/mentors/karl">Karl</SubNavLink>
                        <SubNavLink href="/mentors/phil">Phil</SubNavLink>
                        <SubNavLink href="/mentors/zach">Zach</SubNavLink>
                    </Match>
                    <Match href="/updates">
                        <SubNavLink href="/updates/2024">2024</SubNavLink>
                        <SubNavLink href="/updates">2023</SubNavLink>
                        <SubNavLink href="/updates/2022">2022</SubNavLink>
                    </Match>
                </nav>
            </div>
        </div>
    )
}

// TODO: move this and dropdown into own file?
type NavLinkProps = {href: string, children: ReactNode};
function NavLink(props: NavLinkProps) {
    const {href, children} = props;
    const pathname = '/' + useSelectedLayoutSegments().join('/');
    const active = pathname.startsWith(href);

    return (
        <Link href={href} className="relative flex items-center gap-2 p-4 text-white hover:bg-[rgb(97_0_0)] transition duration-200">
            {children}
            {active && (
                // CSS triangle; the width of the triangle is `2 * border-x-width`, and the height is
                // `border-b-width`. The color of the triangle is the color of the bottom border.
                <span
                    className="absolute bottom-0 inset-x-0 mx-auto w-0 h-0 border-b-[12px] border-b-black border-x-[16px] border-x-transparent"
                />
            )}
        </Link>
    )
}

type NavDropdownProps = {
    routes: RouteSegment[],
    children: ReactNode
}
function NavDropdown(props: NavDropdownProps) {
    const pathname = useSelectedLayoutSegment();

    // Active if any sub-route matches
    const active = props.routes.some(({href}) => pathname?.startsWith(href.slice(1)));

    return (
        <Popover className="relative flex">
            {({open}) => (<>
                <Popover.Button className="relative flex items-center gap-2 p-4 text-white hover:bg-[rgb(97_0_0)] transition duration-200">
                    {props.children} <AiFillCaretDown className={'transition-transform duration-200' + (open ? ' rotate-180' : '')} />
                    {active && (
                        <span className="absolute bottom-0 inset-x-0 mx-auto w-0 h-0 border-b-[12px] border-b-black border-x-[16px] border-x-transparent" />
                    )}
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

// A `<Match>` component which renders its children if the current path matches the provided `href`.
// TODO: does this component need to exist?
// TODO: is there a better way of implementing subnavs? This still does not work with hover without complicating
// props.
type MatchProps = {href: string, children: ReactNode};
function Match(props: MatchProps) {
    const {href, children} = props;
    const pathname = useSelectedLayoutSegment();

    if (!pathname?.startsWith(href.slice(1))) return null;
    return <>{children}</>;
}

function SubNavLink(props: NavLinkProps) {
    const pathname = '/' + useSelectedLayoutSegments().join('/');
    const active = pathname === props.href;

    return (
        <Link href={props.href} className={'relative p-5 text-sm transition duration-200 ' + (active ? 'text-white' : 'text-secondary hover:text-white')}>
            {props.children}
            {active && (
                // CSS triangle; see comment above.
                <span
                    className="absolute bottom-0 inset-x-0 mx-auto w-0 h-0 border-b-[12px] border-b-white border-x-[16px] border-x-transparent"
                />
            )}
        </Link>
    )
}
