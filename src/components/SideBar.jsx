import React from "react";
import user_img from "../assets/user.webp";
import { FiMail, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import TypingAnimation from "../shared/TypingAnimation";

const SideBar = ({ activeTab, setActiveTab, tabs }) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0, rotate: -90 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 3, delay: 0.5 },
        opacity: { duration: 0.01 },
      },
    },
  };

  return (
    <div className="flex items-center p-4 flex-col text-white">
        <div style={{ position: "relative", width: "160px", height: "160px" }}>
          <motion.svg
            width="160"
            height="160"
            initial="hidden"
            animate="visible"
            className="absolute"
          >
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              stroke="#65c3ba"
              strokeWidth="3"
              fill="none"
              variants={draw}
              custom={1}
            />
          </motion.svg>
          <img src={user_img} alt="profile" className="w-full rounded-full" />
        </div>
      <p className="text-3xl">Arpan Biswas</p>
      <TypingAnimation
        words={[
          "Web Developer",
          "Java Fullstack",
          "Back-Office Admin",
          "Esports Manager",
        ]}
        className="text-lg"
      />

      <div className="flex lg:text-3xl md:text-xl my-4 py-3 md:px-4 lg:px-7 md:gap-3 lg:gap-5 rounded-full shadow shadow-[#65c3ba] bg-gray-700">
        <a
          href="mailto://connect.arpanbiswas@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#65c3ba]"
        >
          <FiMail />
        </a>
        <a
          href="https://www.linkedin.com/in/battery9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#65c3ba]"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://github.com/battery9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#65c3ba]"
        >
          <FiGithub />
        </a>
        <a href="/" className="hover:text-[#65c3ba]">
          <FiDownload />
        </a>
      </div>

      <div className="flex flex-col mt-6 gap-4">
        {tabs.map((tab, index) => {
          return (
            <motion.button
              key={index}
              className={`${
                activeTab === index ? "bg-[#65c3ba]" : "bg-gray-700"
              } px-8 py-2 border-2 border-[#65c3ba] rounded-full hover:bg-[#65c3ba] hover:border-white`}
              onClick={() => setActiveTab(index)}
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0, transition: {duration: 1, delay: `${index * 0.25}`} }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center font-semibold text-lg">
                <span className="pr-2">{tab.icon}</span> {tab.text}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
