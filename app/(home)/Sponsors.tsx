import {ReactNode} from 'react';


// The "Sponsors" section on the home page.
export default function Sponsors() {
    return (
        <section id="sponsors" className="container pt-16 pb-24">
            <h3 className="text-2xl font-medium text-center">SPONSORS</h3>
            <div className="divide-y divide-gray-400">
                <Sponsor name="Partners in Education" src="/assets/sponsors/papie.png" href="http://https//papie.org/">
                    PiE is a non-profit education foundation dedicated to supporting all Palo Alto public schools. PAUSD
                    generously provides funds for team coaches. {/* TODO: "and ..." */}
                </Sponsor>
            </div>
        </section>
    )
}

type SponsorProps = {name: string, src: string, href: string, children: ReactNode}
function Sponsor(props: SponsorProps) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className="block text-inherit py-8">
            <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-10 items-center">
                <img
                    src={props.src}
                    alt={props.name}
                    className="max-w-[18rem] mx-auto sm:max-w-[12rem] sm:min-w-[12rem] lg:max-w-[18rem] lg:min-w-[18rem]"
                />
                <div className="flex-grow">
                    <h5 className="font-medium text-lg mb-2">{props.name}</h5>
                    <p className="font-light">
                        {props.children}
                    </p>
                </div>
            </div>
        </a>
    )
}
