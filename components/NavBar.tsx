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

            <SubNav
                match="/FIRST"
                routes={[{name: 'FIRST', href: ''}, {name: 'Accolades', href: '/accolades'}]}
            />
        </div>
    )
}

type NavLinkProps = {href: string, children: ReactNode};
function NavLink(props: NavLinkProps) {
    return (
        <Link href={props.href}>
            <a className="p-4 text-white hover:bg-[rgb(97_0_0)] transition duration-200">
                {props.children}
            </a>
        </Link>
    )
}

// A page-specific subnav. These will render if the path passed to `props.match` matches the current URL, mapping
// the provided route objects to links.
// TODO: this is not a great way to implement subnavs, and does not support changing subnavs on hover without
// complicating props further.
type SubNavProps = {match: string, routes: {name: string, href: string}[]};
function SubNav(props: SubNavProps) {
    const {match, routes} = props;
    const {pathname} = useRouter();

    if (!pathname.startsWith(match)) return null;

    return (
        <nav className="flex bg-black text-white px-5">
            {routes.map(({name, href}) => (
                <SubNavLink href={props.match + href}>{name}</SubNavLink>
            ))}
        </nav>
    )
}

function SubNavLink(props: NavLinkProps) {
    const {pathname} = useRouter();
    const active = pathname === props.href;

    return (
        <Link href={props.href}>
            <a className={'p-5 text-sm ' + (active ? 'text-white' : 'text-[rgb(150_150_150)]')}>
                {props.children}
            </a>
        </Link>
    )
}
