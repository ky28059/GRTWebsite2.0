import {Metadata} from 'next';
import Link from 'next/link';
import Section from '../../../components/Section';
import Question from './Question';


export const metadata: Metadata = {
    title: 'Summer'
}

export default function Summer() {
    const showRegistration = false;

    return (
        <Section>
            <h1 className="text-4xl font-medium mb-8 text-center">
                Gunn Robotics Summer Camp
            </h1>

            <div className="px-6 py-4 -mx-1.5 md:-mx-4 rounded-lg shadow-lg bg-black/90 text-white text-sm mb-8 flex flex-col space-y-4 text-center">
                {showRegistration ? (
                    <>
                        <div className="flex flex-col pt-1.5 items-center">
                            <p className="mb-2">
                                The GRT Summer Camp is back with two sessions in 2025, held in-person at Gunn High School
                                for rising 5th-8th grade students!
                            </p>
                            <p className="flex gap-3 mb-1"><strong className="font-medium">Session 1:</strong> June 10-14, 9am-3pm</p>
                            <p className="flex gap-3"><strong className="font-medium">Session 2:</strong> June 17-21, 9am-3pm</p>
                        </div>
                        <a
                            className="mx-auto mt-2"
                            href="https://forms.gle/XPueR9AxxkdwELHZ6"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="text-white bg-theme w-32 h-10 rounded">Register now!</button>
                        </a>
                    </>
                ) : (
                    <>
                        The 2025 Gunn Robotics Summer Camp is currently in the works! Please check back in soon for registration information.
                        {/* Unfortunately, sign-ups for the Gunn Robotics Summer Camp are closed as of this time. Please check
                        back next year for more information! */}
                    </>
                )}
            </div>

            <section className="mb-8">
                <div className="group relative md:py-2 mb-4">
                    <a href="https://photos.app.goo.gl/rUCEPKt8TXbyJiye9" target="_blank" rel="noopener noreferrer" className="hidden group-hover:flex items-center justify-center absolute z-20 inset-0 bg-black/60 text-white hover:no-underline text-center px-4 rounded-md">
                        View 2022 summer camp photos in Google Photos.
                    </a>
                    <img src="/assets/summer/summer-left.jpg" className="hidden md:block absolute rounded-md max-w-md inset-y-0 my-auto left-0 opacity-75 saturate-[1.2]" alt="Summer camp left" />
                    <img src="/assets/summer/summer-center.jpg" className="relative w-full z-10 rounded-md shadow-lg max-w-xl mx-auto saturate-[1.2]" alt="Summer camp right" />
                    <img src="/assets/summer/summer-right.jpg" className="hidden md:block absolute rounded-md max-w-md inset-y-0 my-auto right-0 opacity-75 saturate-[1.2]" alt="Summer camp center" />
                </div>
                <p className="font-light">
                    The Gunn Robotics Team invites your rising 5th-8th grade students to our weeklong summer robotics camp!
                    Students will have a blast learning to design, build, and program a Vex IQ robot to compete with at the end
                    of the week. Snacks will be provided!
                </p>
                {/* TODO: expand on this blurb probably */}
            </section>

            {/* TODO: can this be abstracted with FIRST's <Section>s? */}
            <h3 className="text-2xl font-medium text-center mb-6">Q&A</h3>
            <div className="flex flex-col gap-3 mb-8">
                <Question name="When is the camp? How long are camp sessions?">
                    We're running two sessions of camp in June, but he exact dates are still TBD. We will update with the dates as soon as possible.
                </Question>
                <Question name="What will my student learn?">
                    We'll be teaching students to build a robot for competition, covering every aspect from designing to programming. 
                    Through interactive lessons in the first portion of camp, students will build robots to tackle some challenges
                    we've prepared. Then, students will work with their teams to develop a robot to compete in our final camp
                    game (a friendly competition)! This structure resembles GRT's preparation and competition season.
                </Question>
                <Question name="Who are the instructors?">
                    All instructors are students on the Gunn Robotics Team. Our team consists of current sophomores,
                    juniors, and seniors, each bringing a unique skill to the summer camp team. Instructors have a wide
                    range of experiences, from animation and electronics to programming and mechanical design.
                </Question>
                <Question name="What will my student need?">
                    Students do not need prior experience! During the camp itself, students will need a laptop with a USB port and
                    the ability to connect to the internet. If bringing such a device is a difficulty for you and your student, please 
                    reach out to us at <a href="mailto:grtsummercamp192@gmail.com">grtsummercamp@gmail.com</a>!
                </Question>
                <Question name="Is the camp in-person?">
                    Yes! The camp will be held in-person in GRT's shop at Gunn High School.
                </Question>
                <Question name="Will lunch be provided?">
                    Lunch will not be provided. Students should bring their own lunch. Snacks will be provided.
                </Question>
                <Question name="What is the price?">
                    No payment is required for our summer camp, but we would greatly appreciate a donation of any amount (recommended 
                    $400) to help us cover costs and keep our team running year after year. Please send donations to our PayPal
                    at <Link href="/donations">GRT Boosters / grtboosters@gmail.com</Link> or via check as detailed on our&nbsp;
                    <Link href="/donations">donations page</Link>.
                </Question>
            </div>

            <p className="font-light">
                Further questions? Send us an email at <a href="mailto:grtsummercamp@gmail.com">grtsummercamp@gmail.com</a>!
            </p>
        </Section>
    )
}
