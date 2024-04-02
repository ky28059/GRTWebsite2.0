import {Metadata} from 'next';

// Components
import Section from '../../../components/Section';
import SectionHeader from '../../../components/SectionHeader';
import Attachment from '../../../components/Attachment';
import Resource from './Resource';


export const metadata: Metadata = {
    title: 'Resources'
}

export default function Resources() {
    return (
        <Section>
            <h1 className="text-4xl font-medium mb-8 text-center">
                Resources
            </h1>

            <SectionHeader id="robots">Robots</SectionHeader>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <Resource name="GRT Technical Binder 2024" src="/assets/resources/2024-technical-binder.jpg" href="/resources/2024-technical-binder.pdf">
                    The 2024 Technical Binder highlights our Crescendo season robot, Dissonance. Click to find comprehensive
                    documentation of our design process including: strategy, timelines, custom swerve, prototyping, mechanism
                    iterations, and software.
                </Resource>
                <Resource name="GRT Impact Booklet 2024" src="/assets/resources/2024-impact-binder.jpg" href="/resources/2024-impact-binder.pdf">
                    The 2024 Impact Booklet celebrates GRT's team growth and outreach during the 2023-2024 school year and
                    includes our Impact Award submission for the Crescendo season. Click to learn about preseason events,
                    our new FLL Explore Team, real-world projects, and a variety of annual GRT outreach traditions.
                </Resource>
            </section>

            <SectionHeader id="other-projects">Other Projects</SectionHeader>
            <section className="flex flex-col gap-8 mb-16">
                <Resource name="Trumpet User Guide" src="/assets/resources/trumpet-mechanism-user-guide.jpg" href="/resources/trumpet-mechanism-user-guide.pdf">
                    <p className="mb-5">
                        During the 2021 and 2022 seasons, GRT designed and built a trumpet assisting mechanism for a Palo
                        Alto student with cerebral palsy.
                    </p>
                    <div className="text-black flex flex-wrap gap-4">
                        <Attachment name="Trumpet STL assembly" href="/resources/GRT Trumpet Mechanism Assembly.stl">
                            Click to download the <code>.STL</code> file for the GRT Trumpet Mechanism.
                        </Attachment>
                        <Attachment name="Trumpet STEP assembly" href="/resources/GRT Trumpet Mechanism Assembly.step">
                            Click to download the <code>.STEP</code> file for the GRT Trumpet Mechanism.
                        </Attachment>
                    </div>
                </Resource>
                {/* TODO: cover */}
                <Resource name="Wheelchair User Guide" src="/assets/resources/wheelchair-project-user-guide.jpg" href="/resources/wheelchair-project-user-guide.pdf">
                    During the 2021 and 2022 seasons GRT designed and built the SoccerDuck for a Palo Alto student with
                    spinal muscular atrophy.
                </Resource>
            </section>

            <SectionHeader id="other-projects">Promotional materials</SectionHeader>
            <section className="flex flex-wrap gap-x-12 gap-y-8">
                <PromotionalMaterial src="/assets/resources/dream-machines-grt-flyer.jpg" href="/resources/dream-machines-grt-flyer.pdf">
                    Dream Machines GRT flyer
                </PromotionalMaterial>
                <PromotionalMaterial src="/assets/resources/dream-machines-first-flyer.png" href="/resources/dream-machines-first-flyer.pdf">
                    Dream Machines FIRST flyer
                </PromotionalMaterial>
            </section>
        </Section>
    )
}

type PromotionalMaterialProps = {src: string, href: string, children: string}
function PromotionalMaterial(props: PromotionalMaterialProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                <img
                    src={props.src}
                    alt={props.children}
                    className="max-h-80 max-w-full sm:max-w-sm outline outline-1 outline-gray-400 hover:ring-4 ring-secondary/40"
                />
            </a>
            <p className="text-secondary text-sm">{props.children}</p>
        </div>
    )
}
