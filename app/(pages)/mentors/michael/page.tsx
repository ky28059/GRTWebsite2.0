import Section from '../../../../components/Section';
import MentorImage from '../MentorImage';
import Question from '../Question';


export default function Michael() {
    return (
        <Section>
            <h1 className="text-4xl font-medium mb-8 text-center">
                Interview with Michael Dresser
            </h1>
            <MentorImage src="/assets/mentors/Michael.jpg" alt="Michael">
                Michael Dresser
            </MentorImage>


            <div className="space-y-6">
                <Question name="What area of expertise do you bring to GRT?">
                    I am an autonomy engineer at a robotics company where my focus is on simulation and data tools.
                    I bring prior software engineering experience from multiple other companies which ranged in size from six to 
                    tens of thousands of engineers. I am also an alumnus of GRT; while on the team I was the lead of our CNC machining 
                    and scouting groups.
                </Question>
                <Question name="Where did you get your training/education?">
                    I have a B.S. and M.S. in Computer Science from the University of Colorado Boulder.
                </Question>
                <Question name="What lead you to mentoring GRT & how long have you mentored GRT?">
                    I was on GRT when I was a student, which eventually led me to consider mentoring. 
                    I chose to dedicate my time to GRT because I wanted to help create the same passionate, 
                    student-driven learning environment that was available to me; that environment transforms students into amazing 
                    engineers, teammates, and friends. GRT's philosophy toward building students is admirable and rare. I have been 
                    mentoring the team since the 2023 season—making the experience I had available to others has been deeply rewarding.
                </Question>
                <Question name="What is your favorite GRT experience?">
                    My favorite GRT experience comes from when I was a student in charge of our scouting data analysis. 
                    After managing the collection of data from every match, my data crunching led GRT to pick a bottom-seeded 
                    team as one of our alliance partners for the playoffs. At the time we made our selection they were in the 
                    middle of packing up their pit and preparing to go home. Not only did we make their day by extending their 
                    time at the event, we also made a deep run in the playoffs together because their robot's capabilities 
                    perfectly complemented ours.
                </Question>
            </div>
        </Section>
    )
}
