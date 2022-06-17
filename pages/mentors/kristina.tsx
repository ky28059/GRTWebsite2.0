import {ReactNode} from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';


export default function Kristina() {
    return (
        <Layout>
            <Head>
                <title>Mentors | GRT</title>
            </Head>

            <h1 className="text-4xl font-medium mb-8 text-center">
                Interview with Kristina Granlund-Moyer
            </h1>

            <MentorImage src="/assets/mentors/Granlund.jpg" alt="Granlund">
                Kristina Granlund-Moyer, 2021.
            </MentorImage>

            <div className="space-y-6">
                <Question name="What area of expertise do you bring to GRT?">
                    I have experience teaching and using CAD and other engineering skills, in product development and
                    hardware/software troubleshooting, and in project team development and management.
                </Question>
                <Question name="Where did you get your training/education?">
                    My BA chemistry degree is from Cornell University. I spent a few decades developing laboratory
                    instrumentation at HP/Agilent and a handful of start-ups, starting as a chemist and then segueing
                    into software engineer, product manager and project manager. I took up my second career as a STEM
                    teacher in 2010.
                </Question>
                <Question name="What lead you to mentoring GRT & how long have you mentored GRT?">
                    Teaching the class required of all GRT members (Engineering Technology) is what brought me to Gunn
                    HS in 2012. My decision to apply for the position was set by an invitation to a summer shop training
                    session, where I was really impressed with GRT's shop equipment, the excellent mentors, and the
                    enthusiasm and skill of the students.
                </Question>
                <Question name="What is your favorite GRT experience?">
                    Teaching the GRT classes and living with the team during build and competition season each year
                    allows me to really get to know the students. That, plus watching students grow from year to year,
                    provides a much deeper teacher-student relationship than the typical classroom experience.
                </Question>
            </div>
        </Layout>
    )
}

export function Question(props: {name: string, children: ReactNode}) {
    return (
        <section>
            <h3 className="text-lg font-medium mb-2">{props.name}</h3>
            <p className="border-l-2 border-gray-100 pl-4 font-light">{props.children}</p>
        </section>
    )
}

// Renders a wrapper around the captioned images in the mentor interview pages.
// Pass the caption as children, and the image `src` and `alt` as props.
type MentorImageProps = {src: string, alt: string, children: ReactNode};
export function MentorImage(props: MentorImageProps) {
    const {children, ...imageProps} = props;

    return (
        <div className="w-full max-w-3xl mb-8 mx-auto">
            <img
                {...imageProps}
                className="w-full mb-2"
            />
            <p className="text-sm text-secondary italic">{children}</p>
        </div>
    )
}
