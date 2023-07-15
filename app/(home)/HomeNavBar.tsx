'use client'

import {ReactNode} from 'react';
import Link from 'next/link';

// Components
import NavHeader from '../../components/NavHeader';
import HomeNavDropdown from './HomeNavDropdown';


// The transparent navbar displayed on the home page. The main differences between this component and `<NavBar>`
// are the lack of background, carets, and a subnavbar.
// TODO: is this component necessary?
export default function HomeNavBar() {
    return (
        <NavHeader
            component={HomeNavLink}
            dropdownComponent={HomeNavDropdown}
            className="absolute top-0 w-full z-30"
        />
    )
}

type HomeNavLinkProps = {href: string, children: ReactNode};
function HomeNavLink(props: HomeNavLinkProps) {
    const {href, children} = props;
    return (
        <Link href={href} className="relative flex items-center gap-2 p-4 text-white hover:bg-black/40 transition duration-200">
            {children}
        </Link>
    )
}
