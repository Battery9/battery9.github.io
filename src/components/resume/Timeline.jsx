import React from "react";
import { motion } from "framer-motion";
import LazyRender from "../../shared/LazyRender";

function Timeline() {
  const exp = [
    {
      profile: "Web Developer Intern",
      company: "Inventors Arena",
      duration: "Nov 2023 - Fev 2024",
      description:
        "As an intern, I gained hands-on experience with Laravel and WordPress, contributing to the development of a full-scale project alongside various smaller projects. Engaging in real-world scenarios, I honed my skills and learned the intricacies of web development within a professional setting, making meaningful contributions to the team's objectives.",
    },
    {
      profile: "Managing Director",
      company: "Unknown Rivals Esports",
      duration: "Aug 2020 - Dec 2023",
      description:
        "I hold a critical leadership role in overseeing the strategic direction and operations of the organization. My expertise in the esports industry, combined with effective decision-making and team management skills, ensures the growth and success of Unknown Rivals Esports.",
    },
    {
      profile: "Back Office Executive",
      company: "DeeGlory Solutions Pvt Ltd",
      duration: "Jul 2022 - Nov 2022",
      description:
        "I showcased remarkable multitasking abilities, efficiently handling various tasks simultaneously while maintaining a high level of accuracy and attention to detail. My exceptional ability to work under pressure and meet deadlines consistently contributed to the smooth operations of the company and ensured timely completion of projects.",
    },
    {
      profile: "Tele Associate",
      company: "IndiaMART",
      duration: "Apr 2022 - Jun 2022",
      description:
        "I've demonstrated exceptional performance and dedication, leading to my well-deserved recognition of the 60 days milestone award. My ability to effectively engage with customers, generate sales leads, and exceed targets made a significant impact on the success of the organization.",
    },
    {
      profile: "Member Of Technical Staff",
      company: "Nice park",
      duration: "Sep 2020 - Jan 2021",
      description:
        "My task was primarily focused on managing desktop systems and providing troubleshooting support, ensuring the smooth operation of desktop infrastructure, resolving technical issues, and assisting staffs with their technical needs.",
    },
  ];

  const edu = [
    {
      course: "Junior Full Stack Java Developer",
      org: "EduJobs | Generation India.",
      des: "After completing the NASSCOM-certified 16-week full-time program, I've not only mastered the technical essentials of web development but also polished my soft skills. Now, armed with this comprehensive preparation, I'm fully prepared to pursue entry-level roles and thrive in the dynamic world of tech!",
      duration: "2023"
    },
    {
      course: "Full Stack Web Development", 
      org: "Physics Wallah.",
      des: "This course included various treanding technologies on software development industry. This course equipped me with the necessary skills to build and maintain web applications.",
      duration: "2023"
    },
    {
      course: "Feild Technician & Computer Peripheral",
      org: "PBSSD",
      des: "A 4-month course on field tech, which included basic computer hardware, software, and peripheral skills. This course equipped me with the skills to troubleshoot and repair hardware and software issues on a professional level.",
      duration: "2020 - 2021"
    },
    {
      course: "Advanced Diploma in Computer Application",
      org: "Compaq Computer Center.",
      des: "An ADCA, which included comprehensive training in basic computer skills and proficiency in Microsoft Office applications. This qualification equips me with essential computer literacy for a wide range of professional tasks.",
      duration: "2018 - 2019"
    },
    {
      course: "Bachelor of Science",
      org: "Rishi Bankim Chandra College.",
      des: "B.Sc. in Biological Science, a 3-year program encompassing Zoology, Botany, and Chemistry. This degree equips me with a strong scientific foundation for problem-solving and innovation in diverse professional contexts.",
      duration: "2018 - 2021"
    }]

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <section>
        <h1 className="m-2 text-xl font-semibold">Experiences</h1>
        <div
          className="mx-4 border-l-2 border-zinc-500 pl-5"
        >
          {exp.map((e, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: '-50%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className="mb-3 border border-[#65c3ba]/50 p-3 shadow shadow-[#65c3ba] rounded relative"
              >
                <div className="w-3 h-3 bg-[#65c3ba] rounded-full absolute top-2 right-[calc(100%+1rem)]"></div>
                <p className="text-sm underline underline-offset-2">{e.duration}</p>
                <h2 className="text-lg font-semibold text-[#65c3ba]">{e.profile}</h2>
                <h3 className="font-medium italic">{e.company}</h3>
                <p className="text-white/90 text-sm">{e.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
      <section>
        <h1 className="m-2 text-xl font-semibold">Academics & Courses</h1>
        <div className="mx-4 border-l-2 border-zinc-500 pl-5">
          {edu.map((e, i) => {
            return (
              <motion.div key={i}
                initial={{ opacity: 0, x: '-50%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="mb-3 border border-[#65c3ba]/50 p-3 shadow shadow-[#65c3ba] rounded relative">
                <div className="w-3 h-3 bg-[#65c3ba] rounded-full absolute top-2 right-[calc(100%+1rem)]"></div>
                <p className="text-sm underline underline-offset-2">{e.duration}</p>
                <h2 className="text-lg font-semibold text-[#65c3ba]">{e.course}</h2>
                <h3 className="font-medium italic">{e.org}</h3>
                <p className="text-white/90 text-sm">{e.des}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Timeline;
