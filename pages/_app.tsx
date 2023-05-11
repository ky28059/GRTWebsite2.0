import {AppProps} from 'next/app';
import {Roboto} from 'next/font/google';

// Components
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import '../styles/globals.css';


const roboto = Roboto({
    weight: ['300', '400', '500'],
    subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={'relative h-full flex flex-col ' + roboto.className}>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </main>
    );
}
