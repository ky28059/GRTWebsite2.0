import {ReactNode} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';


// The layout for all pages except for the home page.
export default function Layout(props: {children: ReactNode}) {
    return (
        <>
            <NavBar />
            <main className="container pt-16 pb-24 flex-grow">
                {props.children}
            </main>
            <Footer />
        </>
    )
}
