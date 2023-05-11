import {Metadata} from 'next';

// Components
import Slideshow from './Slideshow';
import About from './About';
import Timeline from './Timeline';
import Sponsors from './Sponsors';


export const metadata: Metadata = {
    title: 'Home'
}

export default function Home() {
    return (
        <>
            <Slideshow />
            <About />
            <Timeline />
            <Sponsors />
        </>
    )
}
