import {Fragment, useEffect, useState} from 'react';
import {Transition} from '@headlessui/react';
import Head from 'next/head';
import {BsChevronCompactDown} from 'react-icons/bs';

// Components
import HomeNavBar from '../components/HomeNavBar';
import Footer from '../components/Footer';


export default function Home() {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        'drill_bits.jpg', 'spools.jpg', 'pipes.jpg', 'bandsaw.jpg', /* 'plate.jpg', */
        'lathe.jpg', 'panel.jpg', /* 'robot_driving.JPG', */ 'robot_aiming.JPG', 'robot_podium.JPG'
    ];

    // Transition the image slideshow every 8 seconds
    useEffect(() => {
        const id = setInterval(
            () => setImageIndex((imageIndex) => (imageIndex + 1) % images.length),
            8 * 1000
        );
        return () => clearInterval(id);
    }, []);

    return (
        <div className="relative h-full">
            <Head>
                <title>GRT | Home</title>
            </Head>

            <HomeNavBar />

            <section className="relative h-full text-white">
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/40">
                    <h1 className="text-6xl font-medium tracking-widest mb-3">
                        GRT 192
                    </h1>
                    <p className="mb-6">
                        A robotics team from Henry M. Gunn High School (Palo Alto, CA) competing since 1997 in the annual
                        FIRST robotics FRC competition as Team 192.
                    </p>
                    <a href="#about" className="text-inherit text-4xl">
                        <BsChevronCompactDown className="animate-bounce" />
                    </a>
                </div>

                {images.map((src, i) => (
                    <SlideshowImage src={src} show={imageIndex === i} key={src} />
                ))}
            </section>

            <section id="about" className="container pt-16 pb-24">
                <h3 className="text-2xl font-medium text-center mb-6">ABOUT US</h3>
                <div className="flex gap-6">
                    <div className="flex-grow font-light space-y-6">
                        <p>
                            The Gunn Robotics Team (GRT) is a student-managed team that competes in the FIRST Robotics
                            competition. We CAD our own designs, write our own software, and wire our own robots;
                            we manage our sponsorships, organize and staff outreach events. Being on the Gunn Robotics
                            Team gives every student the opportunity to make real decisions, learn from the results,
                            and produce something amazing in the process.
                        </p>
                        <p>
                            All GRT students learn how to CAD and work in the shop, and develop additional expertise
                            working in small groups focused on skills such as programming, welding, gearbox design,
                            pneumatics, and more. We stay connected with our community, building projects for local
                            schools and community events. We have been fortunate to work with generous sponsors, who
                            assist us with resources and training.
                        </p>
                    </div>
                    <img src="/assets/about/team.JPG" alt="GRT" className="w-1/2" />
                </div>
            </section>

            <Footer />
        </div>
    )
}

// An individual slideshow image. The way the slideshow is implemented is using headlessui `<Transition>`s:
// each image is mapped to a `<Transition>` element which is hidden unless the `imageIndex` state is set to
// its index. When `imageIndex` changes, the previous image will transition out while the next image will
// become unhidden.
type SlideshowImageProps = {src: string, show: boolean}
function SlideshowImage(props: SlideshowImageProps) {
    return (
        <Transition
            as={Fragment}
            show={props.show}
            leave="transition-opacity duration-500 z-10"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <img
                src={`/assets/slideshow/${props.src}`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
        </Transition>
    )
}
