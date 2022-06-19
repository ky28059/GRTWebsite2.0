import {ReactNode} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';


// The red navbar displayed on evey page except for the home page.
export default function NavBar() {
    return (
        <div>
            <header className="bg-theme flex items-stretch justify-between px-5">
                <Link href="/">
                    <a className="flex items-center">
                        <img src="/logo.svg" alt="GRT Logo" className="w-20 my-3" />
                    </a>
                </Link>

                <nav className="flex">
                    <NavLink href="/#about">About</NavLink>
                    <NavLink href="/updates">Updates</NavLink>
                    <NavLink href="/FIRST">FIRST</NavLink>
                    <NavLink href="/subgroups">Subgroups</NavLink>
                    <NavLink href="/mentors">Mentors</NavLink>
                    <NavLink href="/resources">Resources</NavLink>
                    <NavLink href="/#sponsors">Sponsors</NavLink>
                    <NavLink href="/join">Join</NavLink>
                    <NavLink href="/summer">Summer</NavLink>
                    <NavLink href="/donations">Donations</NavLink>
                </nav>
            </header>

            {/* Subnav */}
            <nav className="flex justify-center bg-black text-white min-h-[1rem] px-5">
                <Match href="/FIRST">
                    <SubNavLink href="/FIRST">FIRST</SubNavLink>
                    <SubNavLink href="/FIRST/accolades">Accolades</SubNavLink>
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
            </nav>
        </div>
    )
}

type NavLinkProps = {href: string, children: ReactNode};
function NavLink(props: NavLinkProps) {
    const {href, children} = props;
    const {pathname} = useRouter();
    const active = pathname.startsWith(href);

    return (
        <Link href={href}>
            <a className="relative p-4 text-white hover:bg-[rgb(97_0_0)] transition duration-200">
                {children}
                {active && (
                    // CSS triangle; the width of the triangle is `2 * border-x-width`, and the height is
                    // `border-b-width`. The color of the triangle is the color of the bottom border.
                    <span
                        className="absolute bottom-0 inset-x-0 mx-auto w-0 h-0 border-b-[12px] border-b-black border-x-[16px] border-x-transparent"
                    />
                )}
            </a>
        </Link>
    )
}

// A `<Match>` component which renders its children if the current path matches the provided `href`.
// TODO: does this component need to exist?
// TODO: is there a better way of implementing subnavs? This still does not work with hover without complicating
// props.
type MatchProps = {href: string, children: ReactNode};
function Match(props: MatchProps) {
    const {href, children} = props;
    const {pathname} = useRouter();

    if (!pathname.startsWith(href)) return null;
    return <>{children}</>;
}

function SubNavLink(props: NavLinkProps) {
    const {pathname} = useRouter();
    const active = pathname === props.href;

    return (
        <Link href={props.href}>
            <a className={'relative p-5 text-sm transition duration-200 ' + (active ? 'text-white' : 'text-secondary hover:text-white')}>
                {props.children}
                {active && (
                    // CSS triangle; see comment above.
                    <span
                        className="absolute bottom-0 inset-x-0 mx-auto w-0 h-0 border-b-[12px] border-b-white border-x-[16px] border-x-transparent"
                    />
                )}
            </a>
        </Link>
    )
}
