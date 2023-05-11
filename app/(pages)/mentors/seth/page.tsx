import Section from '../../../../components/Section';
import MentorImage from '../MentorImage';
import Question from '../Question';


export default function Seth() {
    return (
        <Section>
            <h1 className="text-4xl font-medium mb-8 text-center">
                Interview with Seth Mallory
            </h1>

            <MentorImage src="/assets/mentors/Seth.jpg" alt="Seth">
                Seth Mallory presents on rivet spacing, 2018.
            </MentorImage>

            <div className="space-y-6">
                <Question name="What area of expertise do you bring to GRT?">
                    I have a lot of experience with practical mechanism design, fabrication and test, having spent years
                    getting things to work in real life. I bring my experience in mechanical and pneumatic systems,
                    project management, leadership, general hardware repair, shop safety and playing well with others,
                    and enjoy winding down from my workday by mentoring GRT students 10-20 hours a week all year long.
                </Question>
                <Question name="Where did you get your training/education?">
                    I completed general engineering and paramedic coursework at college and in the army. I managed the
                    MidTown bicycle shop for many years, and spent the last 25+ years as a lead mechanic at the Valley
                    Transit Authority, redressing design problems in VTA buses and teaching other mechanics. I was a boy
                    scout leader for 15 years, including work with disabled scouts.
                </Question>
                <Question name="What lead you to mentoring GRT & how long have you mentored GRT?">
                    I started mentoring GRT in 2002-2003 when my son was a team member, and have stayed to help ever
                    since. I enjoy working with the team during both the fall (shop training and small projects) and
                    FIRST build season.
                </Question>
                <Question name="What is your favorite GRT experience?">
                    I love to watch the students work through their ideas to reach a solution, when the lightbulb goes
                    off.
                </Question>
            </div>
        </Section>
    )
}
