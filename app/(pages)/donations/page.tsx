import {Metadata} from 'next';
import Section from '../../../components/Section';
import styles from './button.module.css'; 
import Question from '../summer/Question';



export const metadata: Metadata = {
    title: 'Donations'
}

export default function Donations() {
    return (
        <Section>
            <h1 className="text-4xl font-medium mb-8 text-center">
                Donations
            </h1>

            <p className="font-light mb-7">
                The Gunn Robotics Team is always in need of support, and we greatly appreciate any help you can give us.
            </p>

            <strong className="block font-medium mb-2">Financial donations</strong>
            <p className="font-light mb-4">
                If you have the financial means to do so, we greatly appreciate your monetary support. Your donation
                helps cover purchasing and maintenance of equipment and tools, materials, and costs associated with
                competition. To donate, there are several options:
            </p>
            <div className="flex flex-col gap-3 mb-8">
                <Question name="Donate via check">
                    To donate on paper, please make checks payable to <strong>GRT Boosters</strong> and <strong>include your email in the memo</strong>:
                    <div className="border-l-4 border-gray-100 bg-gray-50 px-6 py-4 mb-4">
                        <p>Gunn Robotics Team Boosters</p>
                        <p>780 Arastradero Rd.</p>
                        <p>Palo Alto, CA, 94306</p>
                    </div>
                </Question>
                <Question name="Donate via Paypal">
                    To donate via Paypal, send payments to <strong>grtboosters@gmail.com</strong> using this button:&nbsp;
                    <a href='https://www.paypal.com/fundraiser/charity/1467737' className={styles.donationButton} rel='noopener' target ='_blank'>Paypal</a>
                </Question>
                <Question name="Donate to fund the new CNC">
                    To donate specifically for the new CNC, refer to this page: <a href ='https://docs.google.com/document/d/e/2PACX-1vRDVBSkO8xOSebwLyEJbGVcMOWFhpIpgHONC1nExUvTbLt-mLlY6wegInR9pBSJKRjdSXOV4RLawQK2/pub' target ='_blank'>CNC Fundraising</a>.
                </Question>
            </div>
            
            <p className="font-light mb-10">
                To see your donation in action, please feel free to stop by the shop (room L-5 at Gunn High
                School) for a tour! To set up a time, please email us at <a href="mailto:gunnrobotics192@gmail.com">gunnrobotics192@gmail.com</a>.
            </p>

            <strong className="block font-medium mb-2">Other ways to help</strong>
            <p className="font-light">
                If you do not have financial means to contribute to the team but would like to help in another way, please
                send us an email at the address mentioned above or visit us in L-5 at Gunn High School to find out other
                ways to fill our needs. If you have experience working in machine shops, engineering, computer science,
                or with an organization like FIRST, please let us know! We would love to have your expertise. Thank you!
            </p>
        </Section>
    )
}
