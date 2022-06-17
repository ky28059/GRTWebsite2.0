import {ReactNode} from 'react';
import NavBar from './NavBar';


// The layout for all pages except for `index.tsx`.
export default function Layout(props: {children: ReactNode}) {
    return (
        <div>
            <NavBar />
            <main className="container py-16">
                {props.children}
            </main>
        </div>
    )
}
