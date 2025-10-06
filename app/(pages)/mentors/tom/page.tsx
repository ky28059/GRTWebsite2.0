import Section from '../../../../components/Section';
import MentorImage from '../MentorImage';
import Question from '../Question';


export default function Tom() {
    return (
        <Section>
            <h1 className="text-4xl font-medium mb-8 text-center">
                Interview with Tom Keeble
            </h1>
            
            <div className="space-y-6">
                <Question name="What area of expertise do you bring to GRT?">
                    I have 50+ years of experience as a machinist and 37 years as a machine shop owner, 
                    primarily working with manual equipment such as Bridgeport mills, lathes, drill presses, and TIG + MIG 
                    welding to produce second-op machines for printed circuit board manufacture.
                </Question>
                <Question name="Where did you get your training/education?">
                    Most of my experience comes from on-the-job training, with some additional classes at 
                    Foothill and De Anza Community Colleges.
                </Question>
                <Question name="What lead you to mentoring GRT & how long have you mentored GRT?">
                    I met another GRT mentor who invited me to come to the robotics shop and see 
                    how I liked mentoring.  I began mentoring GRT in the fall of 2024.
                </Question>
                <Question name="What is your favorite GRT experience?">
                    I really enjoy passing my knowledge and experience on to students, and seeing them put it to use.
                </Question>
            </div>
        </Section>
    )
}
