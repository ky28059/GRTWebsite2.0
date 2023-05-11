import {ReactNode} from 'react';
import NavBar from '../../components/NavBar';


export default function Layout(props: {children: ReactNode}) {
    return (
        <>
            <NavBar />
            <main className="pb-8 flex-grow">
                {props.children}
            </main>
        </>
    )
}
