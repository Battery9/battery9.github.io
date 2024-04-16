import React from "react";
import HomeQuotes from "./HomeQuotes";
import Testimonials from "./Testimonials";
import MyServices from "./MyServices";
import { motion } from "framer-motion";
import {
  FiHelpCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import moment from "moment";

function AboutMe() {
  return (
    <div className="text-white m-4">
      <div className="flex items-center gap-2 py-1 px-3 rounded-full shadow shadow-[#65c3ba] bg-gray-700 text-2xl">
        <FiHelpCircle />
        <h2>Who am I?</h2>
      </div>
      <div className="m-2 p-2 shadow-lg rounded-lg">
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.gif"
            alt="🤗"
            width="35"
            height="35"
            className="mr-2 mt-2 float-left"
          />
          Greetings! I'm Arpan Biswas, a prospective Web Developer with a diverse
          professional background. With prior experience as a back office executive, I
          bring a unique blend of skills to the table. Proficient in administrative
          roles and steadily advancing in web technologies, I'm committed to shaping
          remarkable online experiences. Eager to learn and poised to adapt, I'm
          actively pursuing opportunities to contribute my skills, whether in the realm
          of web development or beyond.{' '}
          <u>Let's connect and explore the boundless possibilities together!</u>  🚀🌐
        </motion.p>
      </div>
      <div className="m-4 grid grid-cols-2 gap-4">
        <p>
          <span className="bg-[#65c3ba] px-3 p-px rounded-sm font-semibold inline-flex items-center gap-1">
            <FiArrowRightCircle />
            PLACE:
          </span>
          <span className="ml-3 italic">Naihati, West Bengal, India</span>
        </p>
        <p>
          <span className="bg-[#65c3ba] px-3 p-px rounded-sm font-semibold inline-flex items-center gap-1">
            <FiArrowRightCircle />
            AGE:
          </span>
          <span className="ml-3 italic">{moment().diff(moment('20001208', 'YYYYMMDD'), 'years')}</span>
        </p>
        <p>
          <span className="bg-[#65c3ba] px-3 p-px rounded-sm font-semibold inline-flex items-center gap-1">
            <FiArrowRightCircle />
            STATUS:
          </span>
          <span className="ml-3 italic">Working at AMP Tech</span>
        </p>
        <p>
          <span className="bg-[#65c3ba] px-3 p-px rounded-sm font-semibold inline-flex items-center gap-1">
            <FiArrowRightCircle />
            ROLE:
          </span>
          <span className="ml-3 italic">Backend Developer</span>
        </p>
      </div>
      <MyServices />
      <Testimonials />
      <HomeQuotes />
    </div>
  );
}

export default AboutMe;
