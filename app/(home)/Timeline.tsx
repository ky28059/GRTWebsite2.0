import {ReactNode} from 'react';


// The "Our history" section on the home page. Renders a horizontal timeline on large screens and a vertical timeline
// on smaller screens.
export default function Timeline() {
    return (
        <section className="py-16 bg-[rgb(245,_245,_245)]">
            <div className="container">
                <h3 className="text-2xl font-medium text-center mb-6">OUR HISTORY</h3>
                <div className="flex flex-row-reverse lg:flex-col gap-5">
                    <div className="flex flex-col lg:flex-row gap-3 lg:gap-2">
                        <TimelineItem>
                            GRT was founded In 1996 by Bill Dunbar, a mechanical engineer turned physics teacher at Henry M.
                            Gunn High School in Palo Alto, CA. The team took over the campus wood and metal shop, at the time
                            abandoned and slated for demolition.
                        </TimelineItem>
                        <TimelineItem>
                            The Gunn Robotics Team entered the FIRST Robotics competition in 1997, and that summer traveled
                            to the National Championships in Orlando, Florida.
                        </TimelineItem>
                        <TimelineItem>
                            GRT has grown into a popular program at Henry M. Gunn HS, with two full classes meeting throughout
                            the school year, plus regular after-hour and weekend shop sessions.
                        </TimelineItem>
                    </div>
                    <hr className="border-l-2 lg:border-l-0 lg:border-t-2 border-secondary h-auto" />
                </div>
            </div>
        </section>
    )
}

// An item on the page timeline. This renders its children in a div, a caret below the div pointing to the timeline,
// and a dot on the timeline. Any edits to the spacing of the timeline and items requires editing the positioning of
// the dot.
function TimelineItem(props: {children: ReactNode}) {
    return (
        <div className="relative bg-white shadow-lg font-light basis-1/3 p-6">
            {props.children}

            {/* CSS triangle; see comment in `./NavBar.tsx` */}
            <span className="absolute right-full lg:top-full inset-y-0 lg:bottom-auto lg:inset-x-0 my-auto lg:mx-auto w-0 h-0 border-r-[12px] border-y-[16px] lg:border-l-[16px] lg:border-r-[16px] lg:border-b-0 lg:border-t-[12px] border-x-white border-y-transparent lg:border-x-transparent lg:border-y-white lg:drop-shadow-lg" />
            {/* Top: 100% + 20px (mb-5) - 6px (w-3 / 2) + 1px (centered within 2px border) */}
            <span className="absolute right-[calc(100%_+_15px)] lg:top-[calc(100%_+_15px)] inset-y-0 my-auto lg:bottom-auto lg:inset-x-0 lg:mx-auto w-3 h-3 rounded-full bg-secondary" />
        </div>
    )
}
