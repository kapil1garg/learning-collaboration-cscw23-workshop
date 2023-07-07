import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import Testimonials from "../components/testimonials";

const Home = () => {
  return (
    <>
      <Head>
        <title>Learning Collaboration CSCW 2023 Workshop</title>
        <meta name="description" content="Workshop on Learning Collaborative Skills at CSCW 2023" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Hero />
      <Navbar />

      {/* Workshop Overview */}
      <SectionTitle title="Overview" id="overview" align="left">
        This one-day, in-person workshop aims to support participants in reflecting, ideating, and
        prototyping new socio-technical approaches to help workers develop effective collaboration
        skills for complex work. While CSCW researchers have created tools to provide workers access
        to collaboration opportunities, workers require more support in learning to collaborate
        effectively to benefit from these opportunities. This workshop invites academic and industry
        researchers who study these topics and develop socio-technical systems for workplaces to
        participate. Participants will share insights from their work and work with each other to
        envision an agenda for future research and design of workplaces that support learning how to
        collaborate. Discussion and ideas generated from this workshop will be synthesized and
        archived online for the larger research community and the general public. We hope these
        discussions will foster new collaborations and further develop a community of researchers
        interested in supporting learning in the future of work.
      </SectionTitle>

      {/* Call for Participation */}
      <SectionTitle title="Call for Participation" id="call-for-participation" align="left">
        Interested participants should submit a short paper describing original research and
        articulation of a contributor&apos;s interest and experience in workshop topics. Interested
        participants should describe either: Their research, preliminary or completed, related to
        the topics of this workshop; or a position paper arguing for a particular idea or approach
        related to the topics of the workshop.
        <br />
        <br />
        Paper should use ACM Extended Abstracts Format and be 3-5 pages long (excluding references).
        <span className="font-bold">
          Please submit papers to{" "}
          <a
            href="mailto:eveyhuang@u.northwestern.edu"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            eveyhuang@u.northwestern.edu
          </a>{" "}
          by August 25th, 2023 (AOE)
        </span>
        . Submissions will be reviewed by the organizers based on both relevance and originality.
      </SectionTitle>

      {/* Plan for Workshop */}
      <SectionTitle title="Workshop Agenda" id="agenda" align="left">
        This highly interactive workshop will involve presentations, discussions, and design
        activities. At the start of the workshop, organizers will give short talks (5 minutes) to
        show examples of their work and perspectives on how workplaces can adapt their ways of
        working to support learning effective collaboration skills; they will also share what they
        are excited to discuss in the workshop. In addition, workshop attendees will give a short,
        2-3 minute summary of their position paper and their interests and goals of the workshop.
        Following introductions, we will split participants into groups based on the themes of their
        perspectives. Each group will participate in three activities to reflect on, ideate, and
        prototype new socio-technical approaches that workplaces can adopt to support workers in
        learning to collaborate. Finally, we will do a reflection panel with all organizers and
        attendees to discuss ideas generated throughout the workshop.
        <br />
        <br />
        <span className="font-bold">A tentative agenda is as follows:</span>
        <ul className="list-disc space-y-2 ml-4">
          <li>
            {" "}
            <span className="font-semibold"> 09:00 a.m. - 10:00 a.m. -- </span> Introductions and
            short talks
          </li>
          <li>
            {" "}
            <span className="font-semibold"> 10:00 a.m. - 10:15 a.m. -- </span> Coffee break
          </li>
          <li>
            {" "}
            <span className="font-semibold"> 10:15 a.m. - 11:00 a.m. -- </span> Activity 1: Team
            reflection on current practices
          </li>
          <li>
            {" "}
            <span className="font-semibold"> 11:00 a.m. - 12:00 p.m. -- </span> Activity 2: Ideate
            and Activity 3: Prototype
          </li>
          <li>
            {" "}
            <span className="font-semibold"> 12:00 p.m. - 01:30 p.m. -- </span> Lunch
          </li>
          <li>
            {" "}
            <span className="font-semibold"> 01:30 p.m. - 02:30 p.m. -- </span> Activity 3:
            Prototype (continued)
          </li>
          <li>
            {" "}
            <span className="font-semibold"> 02:30 p.m. - 02:45 p.m. -- </span> Coffee break
          </li>
          <li>
            {" "}
            <span className="font-semibold"> 02:45 p.m. - 04:00 p.m. -- </span> Prototype share out
          </li>
          <li>
            {" "}
            <span className="font-semibold"> 04:00 p.m. - 04:45 p.m. -- </span> Activity 4: Sharing
            and Reflection Panel
          </li>
          <li>
            {" "}
            <span className="font-semibold"> 04:45 p.m. - 05:00 p.m. -- </span> Synthesis + Closing
          </li>
        </ul>
      </SectionTitle>

      {/* Organizers */}
      <SectionTitle title="Organizers" id="organizers" align="left">
        <Testimonials />
      </SectionTitle>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
