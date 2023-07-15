'use client'

import {Fragment, useEffect, useState} from 'react';
import {Transition} from '@headlessui/react';
import {BsChevronCompactDown, BsYoutube, BsInstagram, BsGithub, BsEnvelope} from 'react-icons/bs';


// The slideshow section on the home page.
export default function Slideshow() {
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
        <section className="relative h-full flex-none text-white">
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/40">
                <h1 className="text-6xl font-medium tracking-widest mb-3">
                    GRT 192
                </h1>
                <p className="mb-3.5 max-w-prose text-center mx-2">
                    A robotics team from Henry M. Gunn High School (Palo Alto, CA) competing since 1997 in the annual
                    FIRST robotics FRC competition as Team 192.
                </p>
                <div className="flex gap-4 items-center mb-6 text-2xl">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/gunnrobotics192" className="text-white">
                        <BsYoutube />
                        <span className="sr-only">Youtube</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gunnrobotics192" className="text-white">
                        <BsInstagram />
                        <span className="sr-only">Instagram</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:gunnrobotics192@gmail.com" className="text-white">
                        <BsEnvelope />
                        <span className="sr-only">Email</span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/grt192" className="text-white">
                        <BsGithub />
                        <span className="sr-only">Github</span>
                    </a>
                </div>
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
