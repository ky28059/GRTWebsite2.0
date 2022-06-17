import Head from 'next/head';
import Layout from '../../components/Layout';
import {MentorImage, Question} from './kristina';


export default function Phil() {
    return (
        <Layout>
            <Head>
                <title>Mentors | GRT</title>
            </Head>

            <h1 className="text-4xl font-medium mb-8 text-center">
                Interview with Phil Roan
            </h1>

            <MentorImage src="/assets/mentors/Phil.jpg" alt="Phil">
                Phil Roan goes over code, 2018.
            </MentorImage>

            <div className="space-y-6">
                <Question name="What area of expertise do you bring to GRT?">
                    I am a robotics engineer with a focus on hardware for robots and robotic systems. I bring a wide
                    variety of engineering and management experience to share with GRT -- in particular, topics of system
                    understanding, system integrations, electrical and mechanical design, software design and development
                    best practices, user experience and user interfaces, project management, and occasional homework help.
                </Question>
                <Question name="Where did you get your training/education?">
                    I began my robotics training by building things with Legos. My BS degrees in EE/CS and Mechanical
                    Engineering are from UC Berkeley, and my Ph.D. in EE, with a focus on surgical robotics, is from
                    University of Washington. I have worked as a robotics and research engineer with Bosch since 2010.
                </Question>
                <Question name="What lead you to mentoring GRT & how long have you mentored GRT?">
                    I have enjoyed working with high school students since college summers as a camp counselor, so it was
                    just a matter of finding the time to join GRT once I started working next door with Bosch. I have been
                    a GRT mentor since 2013.
                </Question>
                <Question name="What is your favorite GRT experience?">
                    I really like being greeted by name when I walk in the door -- who doesn't want to feel like a rockstar?
                    Working with high school students is enjoyable because they are very eager to learn and become independent
                    thinkers and yet are responsive to reasoned guidance. GRT students keep me on my toes and inspire me
                    to learn new things.
                </Question>
            </div>
        </Layout>
    )
}
