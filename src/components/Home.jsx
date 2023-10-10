import React, { useState } from "react";
import bg from "../assets/bg.mp4";
import SideBar from "./SideBar";
import AboutMe from "./aboutMe/AboutMe";
import Resume from "./resume/Resume";
import Projects from "./portfolio/Portfolio";
import { FiUser, FiBook, FiBriefcase, FiPackage } from "react-icons/fi";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { icon: <FiUser />, text: "About Me" },
    { icon: <FiBriefcase />, text: "Resume" },
    { icon: <FiPackage />, text: "Projects" },
  ];

  const renderMainContent = () => {
    switch (activeTab) {
      case 1:
        return <Resume />;
      case 2:
        return <Projects />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="relative h-screen w-screen flex justify-center items-center">
      <video
        src={bg}
        autoPlay
        muted
        loop
        className="absolute h-full w-full object-cover overflow-hidden -z-10"
      ></video>
      <div className="absolute flex justify-center items-center h-[90vh] w-[85vw] bg-transparent">
        <div className="w-1/4 h-full bg-[#343434] shadow-inner shadow-[#65c3ba] rounded-lg">
          <SideBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
          />
        </div>
        <div className="w-3/4 h-full bg-[#343434] ml-4 shadow-inner shadow-[#65c3ba] rounded-lg overflow-y-auto">
          <SimpleBar className="h-full">{renderMainContent()}</SimpleBar>
        </div>
      </div>
    </div>
  );
}

export default Home;
