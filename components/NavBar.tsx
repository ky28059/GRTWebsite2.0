import {ReactNode} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import NavHeader from './NavHeader';


// The red navbar displayed on evey page except for the home page.
export default function NavBar() {
    return (
        <div>
            <NavHeader component={NavLink} className="bg-theme" />

            {/* Subnav */}
            <nav className="flex justify-center bg-black text-white min-h-[1rem] px-5">
                <Match href="/FIRST">
                    <SubNavLink href="/FIRST">FIRST</SubNavLink>
                    <SubNavLink href="/FIRST/accolades">Accolades</SubNavLink>
                    <SubNavLink href="/FIRST/2019">2019</SubNavLink>
                    <SubNavLink href="/FIRST/2018">2018</SubNavLink>
                    <SubNavLink href="/FIRST/2016">2016</SubNavLink>
                    <SubNavLink href="/FIRST/2015">2015</SubNavLink>
                    <SubNavLink href="/FIRST/2014">2014</SubNavLink>
                    <SubNavLink href="/FIRST/2013">2013</SubNavLink>
                    <SubNavLink href="/FIRST/2012">2012</SubNavLink>
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
