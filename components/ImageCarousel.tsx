'use client'

import {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';


// Renders an image carousel from several sources and captions.
// Pass the image `src`s, alt texts, and captions as props. Indices correspond to one another when rendering. TODO: wording
export type ImageCarouselProps = {sources: string[], alts: string[], captions?: string[], className?: string};
export default function ImageCarousel(props: ImageCarouselProps) {
    const {sources, alts, captions, className} = props;

    // The index of the currently selected image.
    const [index, setIndex] = useState(0);

    return (
        <div className={'relative flex sm:gap-4 justify-center' + (className ? ` ${className}` : '')}>
            <button className="w-6 sm:w-8 flex-none flex items-center justify-center text-2xl" onClick={() => setIndex((((index - 1) % sources.length) + sources.length) % sources.length)}>
                <BsChevronCompactLeft />
            </button>
            <div className="relative max-w-2xl">
                <img
                    src={sources[index]}
                    alt={alts[index]}
                    className="rounded w-full mx-auto aspect-video object-cover object-center"
                />
                {captions && (
                    <p className="absolute top-[calc(100%_+_0.5rem)] text-sm text-secondary italic col-start-2">
                        {captions[index]}
                    </p>
                )}
            </div>
            <button className="w-6 sm:w-8 flex-none flex items-center justify-center text-2xl" onClick={() => setIndex((index + 1) % sources.length)}>
                <BsChevronCompactRight />
            </button>

            <div className="absolute inset-x-0 flex gap-1 justify-center bottom-4">
                {sources.map((_, i) => (
                    <button
                        className={'w-[1.625rem] h-[0.275rem] transition duration-100 ' + (index === i ? 'bg-white/90' : 'bg-white/30')}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </div>
    )
}
