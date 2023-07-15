// A <Banner> representing a FIRST blue banner won (regional winners, dean's list, or chairman's).
// The name of the award should be passed via `props.name` and the regional it was awarded at via `props.event`.
export default function Banner(props: {name: string, event: string}) {
    return (
        <div className="relative bg-[#0f4bcb] w-[140px] min-h-[170px] after:w-full after:absolute after:bottom-[-20px] after:border-x-[#0f4bcb] after:border-b-transparent after:border-x-[70px] after:border-b-[20px] drop-shadow-lg">
            <div className="flex flex-col items-center p-2 text-center text-white">
                <img src="https://www.thebluealliance.com/images/first_icon.svg" alt="FIRST logo" className="my-3 w-[75px]" />
                <strong className="uppercase italic mb-2 leading-4">{props.name}</strong>
                <p className="text-sm leading-4 mb-3">{props.event}</p>
            </div>
        </div>
    )
}
