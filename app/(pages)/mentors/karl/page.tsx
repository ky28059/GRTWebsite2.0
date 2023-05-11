import MentorImage from '../MentorImage';
import Question from '../Question';


export default function Karl() {
    return (
        <>
            <h1 className="text-4xl font-medium mb-8 text-center">
                Interview with Karl Van Dyk
            </h1>

            <MentorImage src="/assets/mentors/Karl.jpg" alt="Karl">
                Karl Van Dyk teaches students on the mill, 2018.
            </MentorImage>

            <div className="space-y-6">
                <Question name="What area of expertise do you bring to GRT?">
                    I have decades of experience with most things mechanical, such as: how to hold parts while machining
                    them, short cuts for operations and novel ideas for mechanisms.
                </Question>
                <Question name="Where did you get your training/education?">
                    I got my electronics training from the US Air Force, and machining and design experience from half a
                    century of working in the industry at a myriad of machine shops and engineering companies. I started
                    working in my father's shop machining magnesium housings for Hughes Aircraft at age 12, and continued
                    working there for 15 years.
                </Question>
                <Question name="What lead you to mentoring GRT & how long have you mentored GRT?">
                    I read a notice in the SRI company newsletter asking if anyone wanted to volunteer at Gunn HS for
                    the robotics team (then taught by Bill Dunbar). That was in 2006, and I've been mentoring GRT ever
                    since. I also mentor a team in Placerville, CA on the weekends.
                </Question>
                <Question name="What is your favorite GRT experience?">
                    My favorite experience in GRT is giving a suggestion on how to do a machining operation or how to
                    hold a part that is tricky. That requires some thinking outside the box. Also watching how the
                    concept comes to light for the students. Passing on knowledge to someone so it doesn't get lost —
                    that is gratifying for me.
                </Question>
            </div>
        </>
    )
}
