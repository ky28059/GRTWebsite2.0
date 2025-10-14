import Section from '../../../../components/Section';
import MentorImage from '../MentorImage';
import Question from '../Question';


export default function Ryan() {
    return (
        <Section>
            <h1 className="text-4xl font-medium mb-8 text-center">
                Interview with Ryan Mast
            </h1>
            
            <MentorImage src="/assets/mentors/Ryan_Mast.jpeg" alt="Ryan">
                            Ryan Mast
            </MentorImage>

            <div className="space-y-6">
                <Question name="What area of expertise do you bring to GRT?">
                    I'm a cybersecurity software engineer, specializing in hardware security and software development. My expertise 
                    includes software system design, development, and testing, as well as deep-diving systems to understand their inner workings.
                </Question>
                <Question name="Where did you get your training/education?">
                    My BS and MS degrees in Computer Engineering from UC San Diego, specializing in embedded systems and security. 
                    Since joining LLNL in 2017, I've been focusing on cyber-physical systems security, particularly for the electric 
                    grid.
                </Question>
                <Question name="What lead you to mentoring GRT & how long have you mentored GRT?">
                    Back when I was on GRT (Class of 2009), the mentors taught me so much and played a huge role in shaping where I am today. 
                    I want to pay that forward -- mentoring, encouraging, and inspiring students just as others did for me. I began mentoring 
                    GRT in 2025.
                </Question>
                <Question name="What is your favorite GRT experience?">
                    I love helping students figure out how to approach issues they encounter, then coming back later in the week to hear 
                    the solutions they've come up with. Their enthusiasm and creativity is inspiring!
                </Question>
            </div>
        </Section>
    )
}
