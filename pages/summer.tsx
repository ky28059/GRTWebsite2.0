import { ReactNode } from 'react';
import { Disclosure } from '@headlessui/react';
import Head from 'next/head';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';
import Layout from '../components/Layout';


export default function Summer() {
    const showRegistration = true;

    return (
        <Layout>
            <Head>
                <title>Summer | GRT</title>
            </Head>

            <h1 className="text-4xl font-medium mb-8 text-center">
                Gunn Robotics Summer Camp
            </h1>

            <div className="px-6 py-4 -mx-1.5 md:-mx-4 rounded-lg shadow-lg bg-black/90 text-white text-sm mb-8
                flex flex-col space-y-4 text-center">
                {showRegistration ? (
                    <>
                        <div className="flex flex-col space-y-2">
                            <p>
                                The GRT Summer Camp is back with two sessions in 2023, held in-person at Gunn High School for rising 5th-8th grade students!
                            </p>
                            <p>
                                Session 1: June 12-16, 9am-3pm <br />
                                Session 2: June 19-23, 9am-3pm <br />
                            </p>
                        </div>
                        <a className="mx-auto" 
                            href="https://tinyurl.com/GRTSummerCamp2023" target="_blank" rel="noopener noreferrer">
                                <button className="text-white bg-theme w-32 h-10 rounded">Register now!</button>
                        </a>
                    </>
                ) : (
                    <>
                        Unfortunately, sign-ups for the Gunn Robotics Summer Camp are closed as of this time. Please check
                        back next year for more information!
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
                    The Gunn Robotics Team invites your rising 5th-9th grade students to our weeklong summer robotics camp!
                    Students will have a blast learning to design, build, and program a Vex IQ robot to compete with at the end
                    of the week. Snacks will be provided!
                </p>
                {/* TODO: expand on this blurb probably */}
            </section>

            {/* TODO: can this be abstracted with FIRST's <Section>s? */}
            <h3 className="text-2xl font-medium text-center mb-6">Q&A</h3>
            <div className="flex flex-col gap-3 mb-8">
                <Question name="When is the camp? How long are camp sessions?">
                    We're running two sessions of the camp, one during the week of June 13th and the second during the
                    week of June 20th. Each session consists of 5 days (Monday through Friday), and each day runs from
                    9am to 3pm. On the registration form, students can select which session they'd prefer -- both sessions
                    cover the same content.
                </Question>
                <Question name="Is the camp in-person?">
                    Yes! The camp will be run in-person with school COVID guidelines in place. We're excited to see
                    students in-person!
                </Question>
                <Question name="Will lunch be provided?">
                    Lunch will not be provided. Students should bring their own lunch. Snacks will be provided.
                </Question>
                <Question name="What COVID policies will be in-place?">
                    All students are required to have a triple COVID vaccination (2 shots + booster). Mask and social
                    distancing guidelines will likely follow school guidelines, and will be announced closer to the camp
                    date.
                </Question>
                <Question name="What will my student learn?">
                    We hope your student will leave camp with a great experience! We'll be teaching basic programming,
                    wiring, and mechanical engineering, which will allow them to build a robot. During the first 2-3 days,
                    we'll go over the basics with interactive lessons. Then, we'll work with teams of students to build
                    a robot to compete in the final game! This structure is similar to GRT's build season.
                </Question>
                <Question name="Who are the instructors?">
                    All instructors are students on the Gunn Robotics Team. Our team consists of current sophomores,
                    juniors, and seniors, each bringing a unique skill to the summer camp team. Instructors have a wide
                    range of experiences, from animation and electronics to programming and mechanical design.
                </Question>
                <Question name="What is the price?">
                    No payment is required for our summer camp. However, a recommended donation of $350 (or however much
                    you can afford) to our PayPal at <Link href="/donations">GRT Boosters / grtboosters@gmail.com</Link> helps us keep running the camp
                    and our team year after year.
                </Question>
            </div>

            <p className="font-light">
                Further questions? Send us an email at <a href="mailto:gunnrobotics192@gmail.com">gunnrobotics192@gmail.com</a>!
            </p>
        </Layout>
    )
}

// A `<Question>` component that wraps a toggleable disclosure around its answer. Pass the question as `props.name`
// and the answer as children.
// TODO: transitions?
function Question(props: { name: string, children: ReactNode }) {
    return (
        <Disclosure as="div" className="flex flex-col gap-2">
            {({ open }) => (<>
                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-2 text-left">
                    {props.name}
                    <HiChevronDown className={'w-5 h-5 transition-transform duration-300 ease-in-out' + (open ? ' rotate-180' : '')} />
                </Disclosure.Button>
                <Disclosure.Panel className="px-3 pt-2 pb-3 font-light">
                    {props.children}
                </Disclosure.Panel>
            </>)}
        </Disclosure>
    )
}
