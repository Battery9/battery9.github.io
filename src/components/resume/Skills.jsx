import React from "react";
import { motion } from "framer-motion";
import LazyRender from "../../shared/LazyRender";

function Skills() {
  return (
    <section>
      <h1 className="m-2 text-2xl font-semibold">My Skills</h1>
      <div className="grid grid-cols-3 mx-5 gap-5">
        <LazyRender>
        <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.7}}
         className="my-4 p-3 rounded-lg shadow shadow-[#65c3ba] bg-gray-700 relative">
            <h3 className="absolute top-[-1rem] font-semibold">Web Development</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">HTML & CSS</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Node & Express</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">MySQL, MongoDB</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">React</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Laravel</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Wordpress</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Bootstrap, TailwindCSS</p>
          </div>
        </motion.div>
        </LazyRender>
        <LazyRender>
        <motion.div 
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.7, delay: 0.3}}
        className="my-4 p-3 rounded-lg shadow shadow-[#65c3ba] bg-gray-700 relative">
        <h3 className="absolute top-[-1rem] font-semibold">Technical Skills</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Computer Hardwares</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Git</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">MS Office</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Basic Networking</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Linux & CLI</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Cloud Computing</p>
            </div>
        </motion.div>
        </LazyRender>
        <LazyRender>
        <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.7, delay: 0.6}}
        className="my-4 p-3 rounded-lg shadow shadow-[#65c3ba] bg-gray-700 relative">
        <h3 className="absolute top-[-1rem] font-semibold">Personality Skills</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Problem Solving</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Adaptability</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Team Player</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Empathy</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Attension to Detail</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Curiosity</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">Quick Learning</p>
            </div>
        </motion.div>
        </LazyRender>
      </div>
    </section>
  );
}

export default Skills;
