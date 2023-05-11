import {Metadata} from 'next';
import Section from '../../../../components/Section';
import SectionHeader from '../../../../components/SectionHeader';
import CaptionedImage from '../../../../components/CaptionedImage';


export const metadata: Metadata = {
    title: 'Business'
}

export default function Business() {
    return (
        <Section>
            <h1 className="text-4xl font-medium mb-6 text-center">
                Business
            </h1>

            {/* <h3 className="text-lg font-medium mb-3">About</h3> */}
            <p className="font-light mb-6">
                The GRT business subgroup is responsible for coordinating outreach, publicity, funding, and FIRST submitted awards.
                Each season, the business team arranges venues for us to showcase our robot and promote FIRST. We participate
                in many community events including the Palo Alto May Fete Parade, JLS Back-to-School Night, and the Nixon
                Elementary School Science Night.
            </p>
            <p className="font-light mb-6">
                {/* Our outreach page <outreach page link> outlines our many projects to impact the community. */}
                Business members are central to planning and finding new partners for our outreach program—empowering
                every GRT member to volunteer.
            </p>
            <CaptionedImage src="/assets/subgroups/2023-jls-btsn.jpg" alt="JLS Back-to-School Night" className="max-w-2xl mx-auto mb-10">
                GRT at the 2023 JLS Back-to-School Night.
            </CaptionedImage>

            <SectionHeader id="fundraising">Fundraising</SectionHeader>
            <p className="font-light mb-6">
                GRT revenue is primarily from student work and sponsorships. The Business Manager oversees parent donations
                from our summer camp and facilitates our partnership with Stanford Concessions. GRT members staff eight
                to ten Stanford sports games every fall as our largest annual fundraiser. During the off-season, the business
                team applies for grants and sponsorships to support our additional expenses.
            </p>
            <CaptionedImage src="/assets/subgroups/2023-nixon-science-night.jpg" alt="Nixon Science Night" className="max-w-2xl mx-auto mb-10">
                GRT at the 2023 Nixon Science Night.
            </CaptionedImage>

            <SectionHeader id="awards">Awards</SectionHeader>
            <p className="font-light mb-6">
                During build season, the business group focuses on crafting a story about GRT for various awards. The subgroup
                prepares our submissions for the FIRST Impact Award, Dean’s List Award, and Woodie Flowers Award. Before
                competitions, the team prepares our pit crew to professionally answer questions from judges.
            </p>
            <CaptionedImage src="/assets/subgroups/2022-grt-may-fete.jpg" alt="May fete parade" className="max-w-2xl mx-auto">
                GRT in the 2022 Palo Alto May Fete parade.
            </CaptionedImage>
        </Section>
    )
}
