import Section from '../../../../components/Section';
import Question from '../Question';


export default function Zach() {
    return (
        <Section>
            <h1 className="text-4xl font-medium mb-8 text-center">
                Interview with Zach Walker
            </h1>

            <div className="space-y-6">
                <Question name="What area of expertise do you bring to GRT?">
                    I am a mechanical engineer (because software and electrical are made up) with knowledge focused on
                    complex component and mechanism design based in CAD and real world testing.
                </Question>
                <Question name="Where did you get your training/education?">
                    I graduated from THE Ohio State University and initially worked on steering systems in the Honda world.
                    I am now constantly learning and developing from leading the steering, suspension and brakes design
                    at Lucid Motors.
                </Question>
                <Question name="What lead you to mentoring GRT & how long have you mentored GRT?">
                    I began mentoring GRT in the fall of 2020. I was extremely blessed to have "grown up" volunteers spend
                    time teaching me in my extra-curricular activities in high school and believe I am supposed to give
                    that back.
                </Question>
                <Question name="What is your favorite GRT experience?">
                    Honestly, I love it every time a design fails and the students have to ask themselves what the heck
                    just happened. It is such an amazing way to really understand the physics of our world.
                </Question>
            </div>
        </Section>
    )
}
