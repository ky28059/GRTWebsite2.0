import {ReactNode} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';


// The transparent navbar displayed on the home page. The main differences between this component and `<NavBar>`
// are the lack of background, carets, and a subnavbar.
// TODO: is abstraction possible with `<NavBar>`?
export default function HomeNavBar() {
    return (
        <header className="absolute top-0 w-full z-30 flex items-stretch justify-between px-5">
            <Link href="/">
                <a className="flex items-center">
                    <img src="/logo.svg" alt="GRT Logo" className="w-20 my-3" />
                </a>
            </Link>

            <nav className="flex">
                <HomeNavLink href="/#about">About</HomeNavLink>
                <HomeNavLink href="/updates">Updates</HomeNavLink>
                <HomeNavLink href="/FIRST">FIRST</HomeNavLink>
                <HomeNavLink href="/subgroups">Subgroups</HomeNavLink>
                <HomeNavLink href="/mentors">Mentors</HomeNavLink>
                <HomeNavLink href="/resources">Resources</HomeNavLink>
                <HomeNavLink href="/#sponsors">Sponsors</HomeNavLink>
                <HomeNavLink href="/join">Join</HomeNavLink>
                <HomeNavLink href="/summer">Summer</HomeNavLink>
                <HomeNavLink href="/donations">Donations</HomeNavLink>
            </nav>
        </header>
    )
}

type HomeNavLinkProps = {href: string, children: ReactNode};
function HomeNavLink(props: HomeNavLinkProps) {
    const {href, children} = props;
    const {pathname} = useRouter();
    const active = pathname.startsWith(href);

    return (
        <Link href={href}>
            <a className="relative p-4 text-white hover:bg-black/40 transition duration-200">
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
