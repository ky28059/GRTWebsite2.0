import Section from '../../../../components/Section';
import MentorImage from '../MentorImage';
import Question from '../Question';


export default function Jack() {
    return (
        <Section>
            <h1 className="text-4xl font-medium mb-8 text-center">
                Interview with Jack Boyce.
            </h1>

            <MentorImage src="/assets/mentors/JackB.jpg" alt="Jack">
                Jack Boyce.
            </MentorImage>

            <div className="space-y-6">
                <Question name="What area of expertise do you bring to GRT?">
                    I am a physicist by training and like to bring an appreciation for calculating speeds, torques, 
                    and forces before(!) the robot is built. My day job is building self-driving cars at Nvidia.
                </Question>
                <Question name="Where did you get your training/education?">
                    I was an undergrad at Caltech and did my PhD work in physics at UC Berkeley.
                </Question>
                <Question name="What lead you to mentoring GRT & how long have you mentored GRT?">
                    My younger son was on the team several years ago and had a fantastic experience. I started mentoring the 
                    team in for the 2024 robotics season.
                </Question>
                <Question name="What is your favorite GRT experience?">
                    I really enjoy seeing the team have an idea and then follow it through to reality, through 
                    hard work and creativity. Turning ideas into reality is the magic of engineering.
                </Question>
            </div>
        </Section>
    )
}
