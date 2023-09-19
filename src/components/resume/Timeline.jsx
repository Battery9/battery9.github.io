import React from "react";

function Timeline() {
  const exp = [
    {
      profile: "Managing Director",
      company: "Unknown Rivals Esports",
      duration: "Aug, 2022 - Present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aut perspiciatis delectus rerum, quasi expedita iure distinctio, ullam omnis facilis, voluptas modi eius architecto dicta obcaecati aperiam inventore. Reprehenderit, ut!",
    },
    {
      profile: "Managing Director",
      company: "Unknown Rivals Esports",
      duration: "Aug, 2022 - Present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aut perspiciatis delectus rerum, quasi expedita iure distinctio, ullam omnis facilis, voluptas modi eius architecto dicta obcaecati aperiam inventore. Reprehenderit, ut!",
    },
    {
      profile: "Managing Director",
      company: "Unknown Rivals Esports",
      duration: "Aug, 2022 - Present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aut perspiciatis delectus rerum, quasi expedita iure distinctio, ullam omnis facilis, voluptas modi eius architecto dicta obcaecati aperiam inventore. Reprehenderit, ut!",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <section>
        <h1 className="m-2 text-2xl font-semibold">Experiences</h1>
        <div className="mx-4 border-l-2 border-zinc-500 pl-5">
          {exp.map((e, i) => {
            return (
              <div key={i} className="mb-3 border border-[#65c3ba]/50 p-3 shadow shadow-[#65c3ba] rounded relative">
                <div className="w-3 h-3 bg-[#65c3ba] rounded-full absolute top-2 right-[calc(100%+1rem)]"></div>
                <p className="text-sm underline underline-offset-2">{e.duration}</p>
                <h2 className="text-lg font-semibold text-[#65c3ba]">{e.profile}</h2>
                <h3 className="font-medium italic">{e.company}</h3>
                <p className="text-white/90 text-sm">{e.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h1 className="m-2 text-2xl font-semibold">Experiences</h1>
        <div className="mx-4 border-l-2 border-zinc-500 pl-5">
          {exp.map((e, i) => {
            return (
              <div key={i} className="mb-3 border border-[#65c3ba]/50 p-3 shadow shadow-[#65c3ba] rounded relative">
                <div className="w-3 h-3 bg-[#65c3ba] rounded-full absolute top-2 right-[calc(100%+1rem)]"></div>
                <p className="text-sm underline underline-offset-2">{e.duration}</p>
                <h2 className="text-lg font-semibold text-[#65c3ba]">{e.profile}</h2>
                <h3 className="font-medium italic">{e.company}</h3>
                <p className="text-white/90 text-sm">{e.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Timeline;
