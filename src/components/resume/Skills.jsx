import React from "react";

function Skills() {
  return (
    <section>
      <h1 className="m-2 text-2xl font-semibold">My Skills</h1>
      <div className="grid grid-cols-3 mx-5 gap-5">
        <div className="my-4 p-3 rounded-lg shadow shadow-[#65c3ba] bg-gray-700 relative">
            <h3 className="absolute top-[-1rem] font-semibold">Web Development</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">HTML & CSS</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">React</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">HTML & CSS</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">HTML & CSS</p>
          </div>
        </div>
        <div className="my-4 p-3 rounded-lg shadow shadow-[#65c3ba] bg-gray-700 relative">
        <h3 className="absolute top-[-1rem] font-semibold">Web Development</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">HTML & CSS</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">React</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">HTML & CSS</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">HTML & CSS</p>
            </div>
        </div>
        
        <div className="my-4 p-3 rounded-lg shadow shadow-[#65c3ba] bg-gray-700 relative">
        <h3 className="absolute top-[-1rem] font-semibold">Web Development</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">HTML & CSS</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">React</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">HTML & CSS</p>
            <p className="bg-[#65c3ba] py-1 px-2 rounded-lg">HTML & CSS</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
