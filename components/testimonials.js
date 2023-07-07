import Image from "next/image";
import React from "react";
import Container from "./container";

import eveyImg from "../public/img/evey.png";
import kapilImg from "../public/img/kapil.jpg";
import diegoImg from "../public/img/diego.jpg";
import julieImg from "../public/img/julie.jpg";
import chinmayImg from "../public/img/chinmay.jpg";
import mikeImg from "../public/img/mike.jpg";
import elizabethImg from "../public/img/elizabeth.jpg";
import lizImg from "../public/img/liz.jpg";

const organizers = [
  {
    name: "Evey Huang",
    title: "Ph.D. Student, Northwestern University",
    image: eveyImg,
    description:
      "Evey Huang is a Ph.D. student in the Technology and Social Behavior (TSB) program, a joint program between computer science and communication studies, at Northwestern University. She studies and designs mixed-initiative human-AI systems to support learners in solving real-world, ill-defined problems. She considers how AI technologies might collaborate with human coaches to monitor learners' progress, diagnose potential risks and obstacles, and provide learners with regular, dedicated support.",
  },
  {
    name: "Kapil Garg",
    title: "Ph.D. Student, Northwestern University",
    image: kapilImg,
    description:
      "Kapil Garg is a Ph.D. student in the Technology and Social Behavior (TSB) program, a joint program between computer science and communication studies, at Northwestern University. His work develops and studies networked orchestration technologies to support knowledge workers engaging in situated work activities within socio-technical work and learning environments. He considers how these systems can help workers monitor for opportunities to collaborate and strategize how these opportunities can progress their work or learning goals.",
  },
  {
    name: "Diego Gómez-Zará",
    title: "Assistant Professor, University of Notre Dame",
    image: diegoImg,
    description:
      "Diego Gómez-Zará is an Assistant Professor at the Department of Computer Science and Engineering and the Mendoza College Business (by courtesy) at the University of Notre Dame. His research focuses on how social computational systems help people organize and collaborate. His work has been at the forefront of computational social science, human-computer interaction, and network science.",
  },
  {
    name: "Julie Hui",
    title: "Assistant Professor, University of Michigan",
    image: julieImg,
    description:
      "Julie Hui is an Assistant Professor at the University of Michigan School of Information. She investigates how technology influences access to work and employment. Specifically, she studies how digital technologies facilitate help-seeking, agency, and social support in informal work contexts, such as among gig workers and under-resourced small business owners.",
  },
  {
    name: "Chinmay Kulkarni",
    title: "Associate Professor, Emory University",
    image: chinmayImg,
    description:
      "Chinmay Kulkarni is an Associate Professor of Human-Computer Interaction at Emory University, where he directs the Expertise@Scale lab. His work is at the intersection of large data and automation, learning, and the future of work. In his research, he investigates how the new affordances of scale and automation can create new opportunities for people to learn and work more effectively. His research introduces novel computer systems that demonstrate benefits at a large scale that is otherwise not achievable. His recent work has focused on creating systematic opportunities for building empathy in remote organizations, helping participants re-imagine their collaborative roles through collective reflection and co-design, and how AI might result in new kinds of work (and art).",
  },
  {
    name: "Michael Massimi",
    title: "Senior Principal Researcher, Slack",
    image: mikeImg,
    description:
      "Michael Massimi is a Senior Principal Researcher at Slack where he manages academic partnerships. His research focuses on how knowledge workers communicate and collaborate. Prior to Slack, he worked on Facebook Groups and at Microsoft Research. He completed his Ph.D. in Computer Science from the University of Toronto.",
  },
  {
    name: "Elizabeth Churchill",
    title: "Senior Director of UX, Google; Co-Chair, Google's UX Leadership Council",
    image: elizabethImg,
    description:
      "Elizabeth Churchill is a Senior Director of UX at Google and Co-Chair of Google's UX Leadership Council. She has built research teams at Google, eBay, Yahoo, PARC, and FujiXerox. Her current focus is on the design of effective designer and developer tooling for a new operating system, Fuchsia.",
  },
  {
    name: "Elizabeth Gerber",
    title:
      "Professor, Northwestern University; Co-Director, Northwestern's Center for Human-Computer Interaction + Design; Faculty Founder, Design for America",
    image: lizImg,
    description:
      "Elizabeth Gerber is a Professor at Northwestern University, the Co-Director and Founder of Northwestern's Center for Human-Computer Interaction + Design, and Faculty Founder of Design for America. She helps organizations design and implement new technologies to collaborate effectively.",
  },
];

const Testimonials = () => {
  return (
    <Container>
      {/* user profile */}
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {organizers.map((organizer) => (
          <div
            className="lg:col-span-2 xl:col-auto"
            key={organizer.name.toLowerCase().replace(" ", "-")}
          >
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-4 py-4 lg:px-14 lg:py-14 rounded-2xl dark:bg-trueGray-800">
              <Avatar image={organizer.image} name={organizer.name} title={organizer.title} />
              <p className="text-lg leading-normal align-top h-full">{organizer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    // align the avatar to the top of the div
    <div className="flex flex-wrap lg:flex-nowrap items-start mt-8 mb-8 lg:space-x-3">
      <div className="flex-shrink-0 mx-auto mb-4 lg:mb-0 overflow-hidden w-25 h-25 rounded-full ">
        <Image src={props.image} width="100" height="100" alt="Avatar" placeholder="blur" />
      </div>
      <div>
        <div className="text-xl font-medium">{props.name}</div>
        <div className="text-lg text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

export default Testimonials;
