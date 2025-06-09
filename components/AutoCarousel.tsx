'use client'
import "slick-carousel/slick/slick.css";
import '/styles/AutoCarousel.css';
import Slider from "react-slick";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';

export type AutoCarouselProps = {sources: string[], alts: string[], captions?: string[]};
export default function AutoCarousel(props: AutoCarouselProps){
    const {sources, alts, captions} = props;
    const settings={
        className: "center",
        infinite: true, 
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed:3800,
        centerMode: true,
        centerPadding: "350px",
        nextArrow:<NextArrow/>, 
        prevArrow:<PrevArrow/>,
        responsive:[
            {
                breakpoint:1280,
                settings: {
                    centerPadding:"280px",
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
        <div className = "slider-container mx-auto overflow-hidden w-full ">
            <Slider {...settings}>
                {sources.map((source, i)=> (
                    <div key = {i} className="flex flex-col overflow-hidden items-center justify-center">
                        <img 
                            src={sources[i]} 
                            alt={alts[i]}
                            className="rounded-md w-full object-contain object-center max-h-[307.2px] "
                        />
                    {captions && (
                        <p className="mt-2 text-sm text-secondary italic text-center">
                            {captions[i]}
                        </p> 
                    )}
                    </div>
            ))}
            </Slider>
        </div>
    ); 

}

function NextArrow({ className, style, onClick }: any) {
    return (
      <button
        className="absolute top-1/2 right-[-.9rem] sm:right-2 -translate-y-1/2 rounded-full p-2 hover:bg-opacity-0 transition text-xl"
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
        className="absolute top-1/2 left-[-.9rem] sm:left-2 -translate-y-1/2 rounded-full p-2 hover:bg-opacity-0 transition z-30 text-xl"
        onClick={onClick}
        aria-label="Previous slide"
        >
            <BsChevronCompactLeft />
    </button>
);
}
  