import {ReactNode} from 'react';
import HomeNavBar from './HomeNavBar';


export default function Layout(props: {children: ReactNode}) {
    return (
        <>
            <HomeNavBar />
            {props.children}
        </>
    )
}
