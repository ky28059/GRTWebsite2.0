'use client'
import "slick-carousel/slick/slick.css";
import styles from './AutoCarousel.module.css';
import Slider from "react-slick";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {useState} from 'react';

export type AutoCarouselProps = {sources: string[], alts: string[], captions?: string[]};
export default function AutoCarousel(props: AutoCarouselProps){
    const {sources, alts, captions} = props;
    const[currentSlide, setCurrentSlide] = useState(0);
    const settings={
        className: "center",
        infinite: true, 
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed:4200,
        centerMode: true,
        centerPadding: "350px",
        nextArrow:<NextArrow/>, 
        prevArrow:<PrevArrow/>,
        beforeChange:(oldIndex:number, newIndex:number)=>setCurrentSlide(newIndex),
        responsive:[
            {
                breakpoint:1280,
                settings: {
                    centerPadding:"278px",
                    centerMode: true,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    centerPadding:"0",
                    centerMode: false
                }
            }
        ]
    };

    return (
        <div className = "slider-container mx-auto overflow-hidden w-full min-h-[300px] items-center">
            <Slider {...settings}>
                {sources.map((source, i)=> {
                    const slides = i ==currentSlide 
                    ? styles.slickCenter
                    : styles.slickSlide;
                return (

                    <div key = {i} className={`flex overflow-hidden items-center ${slides} min-h-[300px] justify-center `}>
                        {IsVideo(sources[i])
                            ? <video 
                                src={sources[i]}
                                className = "rotate-180 w-full object-contain max-h-[307.2px] px-6 sm:px-0"
                                autoPlay
                                loop
                                muted
                            />
                            : <img 
                                src={sources[i]} 
                                alt={alts[i]}
                                className="w-full object-contain max-h-[307.2px] px-6 sm:px-0 "
                            />
                        }
                    {captions && (
                        <p className="mt-2 text-sm text-secondary italic text-center">
                            {captions[i]}
                        </p> 
                    )}
                    </div>
                )})}
            </Slider>
        </div>
    ); 

}

function NextArrow({ className, style, onClick }: any) {
    return (
      <button
        className="absolute top-1/2 right-[-.9rem] xs:right-[-.5rem] -translate-y-1/2 rounded-full p-2 hover:bg-opacity-0 transition text-xl"
        style={{ ...style}}
        onClick={onClick}
        aria-label="Next slide"
        >
        <BsChevronCompactRight />
        </button>
    );
  }
  
function PrevArrow({ className, style, onClick }: any) {
return (
    <button
        className="absolute top-1/2 left-[-.9rem] xs:left-[-.5rem] -translate-y-1/2 rounded-full p-2 hover:bg-opacity-0 transition z-30 text-xl"
        onClick={onClick}
        aria-label="Previous slide"
        >
        <BsChevronCompactLeft />
    </button>
);
}
function IsVideo(sources:string) :boolean{
    return /\.(mp4)$/i.test(sources);
}
  