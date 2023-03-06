import {ReactNode} from 'react';
import Link from 'next/link';
import NavHeader from './NavHeader';


// The transparent navbar displayed on the home page. The main differences between this component and `<NavBar>`
// are the lack of background, carets, and a subnavbar.
// TODO: is this component necessary?
export default function HomeNavBar() {
    return (
        <NavHeader
            component={HomeNavLink}
            className="absolute top-0 w-full z-30"
        />
    )
}

type HomeNavLinkProps = {href: string, children: ReactNode};
function HomeNavLink(props: HomeNavLinkProps) {
    const {href, children} = props;
    return (
        <Link href={href} className="relative p-4 text-white hover:bg-black/40 transition duration-200">
            {children}
        </Link>
    )
}
