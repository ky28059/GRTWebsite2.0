import {Metadata} from 'next';
import SectionHeader from '../../../../components/SectionHeader';
import CaptionedImage from '../../../../components/CaptionedImage';


export const metadata: Metadata = {
    title: 'Welding'
}

export default function Welding() {
    return (
        <>
            <h1 className="text-4xl font-medium mb-6 text-center">
                Welding
            </h1>

            {/* <h3 className="text-lg font-medium mb-3">About</h3> */}
            <p className="font-light mb-6">
                The GRT welding subgroup is responsible for welding the base and other components, depending on the robot
                design each year. Members are taught TIG welding, and most of our parts are aluminum (although we work
                with steel and other materials as well). Creativity and patience are key values, as the welders figure
                out ideal clamping positions, welding angles, and strategies for retaining a perfectly square base. With
                the hazards that welding presents, members are required to always have a buddy in the welding room, adding
                to the synergistic environment of the subgroup.
            </p>
            <p className="font-light mb-10">
                With the bulk of our work in the beginning of build season, members are often free to join and explore
                other robot tasks; many enjoy machining or building bumpers, which work well into the end of the season.
            </p>

            <SectionHeader id="training">Training</SectionHeader>
            <p className="font-light mb-6">
                Welding rookies are not expected to have previous knowledge about welding, and typically sign up for
                one-on-one training sessions with the welding lead in late fall and early winter. Other curious team
                members can also learn to weld, although training time is prioritized towards those who are eager and
                committed to joining the subgroup. Before officially joining the subgroup, recruits must first pass the
                welding safety test — a relatively simple assessment on the basic skills and safety rules they learned
                during their training.
            </p>
            <CaptionedImage src="/assets/subgroups/welding.jpg" alt="Welding" className="max-w-2xl mx-auto mb-4">
                A welding member performs a TIG weld.
            </CaptionedImage>
            <p className="font-light mb-10">
                With shop projects occurring during and after the training period, rookies may have a chance to put their
                training to practice on shop projects robots; this is, however, contingent on the robot design, their
                skill and comfort level. Generally, a welding rookie's first official welded part will be during build
                season.
            </p>

            <SectionHeader id="covid-19">COVID-19</SectionHeader>
            <p className="font-light mb-6">
                Due to the coronavirus pandemic, there was a period of time where no one was able to be trained in or
                consistently practicing welding, and thus a lot of knowledge and skills were lost. The tight
                proximity of the welding room and the hands-on nature of welding made it impossible to teach, and virtual
                lessons and videos — although incredibly insightful — are no substitute for practice. However, this past
                year the subgroup slowly started to rebuild by reaching out to old welding leads, and has thankfully
                regained much of its expertise.{/* TODO: final "future" statement */}
            </p>
            <img src="/assets/subgroups/welding-masks.JPG" alt="Welding masks" className="w-full max-w-2xl mx-auto" />
        </>
    )
}
