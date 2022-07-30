// The "About" section on the home page.
export default function About() {
    return (
        <section id="about" className="container py-16">
            <h3 className="text-2xl font-medium text-center mb-6">ABOUT US</h3>
            <div className="flex flex-wrap-reverse lg:flex-nowrap gap-6">
                <div className="flex-grow font-light space-y-6">
                    <p>
                        The Gunn Robotics Team (GRT) is a student-managed team that competes in the FIRST Robotics
                        competition. We CAD our own designs, write our own software, and wire our own robots;
                        we manage our sponsorships, organize and staff outreach events. Being on the Gunn Robotics
                        Team gives every student the opportunity to make real decisions, learn from the results,
                        and produce something amazing in the process.
                    </p>
                    <p>
                        All GRT students learn how to CAD and work in the shop, and develop additional expertise
                        working in small groups focused on skills such as programming, welding, gearbox design,
                        pneumatics, and more. We stay connected with our community, building projects for local
                        schools and community events. We have been fortunate to work with generous sponsors, who
                        assist us with resources and training.
                    </p>
                </div>
                <img
                    src="/assets/about/team.JPG"
                    alt="GRT"
                    className="lg:max-w-[50%] h-max"
                />
            </div>
        </section>
    )
}
