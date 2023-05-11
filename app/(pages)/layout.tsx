import {ReactNode} from 'react';
import NavBar from '../../components/NavBar';


export default function Layout(props: {children: ReactNode}) {
    return (
        <>
            <NavBar />
            <main className="container pt-16 pb-24 flex-grow">
                {props.children}
            </main>
        </>
    )
}
