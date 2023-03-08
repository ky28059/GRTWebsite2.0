import Head from 'next/head';

// Components
import HomeNavBar from '../components/HomeNavBar';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Sponsors from '../components/Sponsors';


export default function Home() {
    return (
        <>
            <Head>
                <title>Home | GRT</title>
            </Head>

            <HomeNavBar />

            <Slideshow />
            <About />
            <Timeline />
            <Sponsors />

            <Footer />
        </>
    )
}
