import {Fragment, useEffect, useState} from 'react';
import {Transition} from '@headlessui/react';
import {BsChevronCompactDown} from 'react-icons/bs';


// The slideshow section on the home page.
export default function Slideshow() {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        'drill_bits.jpg', 'spools.jpg', 'pipes.jpg', 'bandsaw.jpg', /* 'plate.jpg', */
        'lathe.jpg', 'panel.jpg', /* 'robot_driving.JPG', */ 'robot_aiming.jpg', 'robot_podium.jpg'
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
        <section className="relative h-full text-white">
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/40">
                <h1 className="text-6xl font-medium tracking-widest mb-3">
                    GRT 192
                </h1>
                <p className="mb-6 max-w-prose text-center mx-2">
                    A robotics team from Henry M. Gunn High School (Palo Alto, CA) competing since 1997 in the annual
                    FIRST robotics FRC competition as Team 192.
                </p>
                <a href="#about" className="text-inherit text-4xl">
                    <BsChevronCompactDown className="animate-bounce" />
                    <span className="sr-only">Jump to About</span>
                </a>
            </div>

            {images.map((src, i) => (
                <SlideshowImage src={src} show={imageIndex === i} key={src} />
            ))}
        </section>
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
                alt="" // TODO
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
        </Transition>
    )
}
