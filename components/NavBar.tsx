import {ReactNode} from 'react';
import Link from 'next/link';


export default function NavBar() {
    return (
        <header className="bg-theme flex items-center justify-between px-5">
            <Link href="/">
                <a><img src="/logo.svg" alt="GRT Logo" className="w-20 my-3" /></a>
            </Link>

            <nav className="flex">
                {/* TODO: subnavs */}
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
