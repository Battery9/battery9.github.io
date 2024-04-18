import React, { useState } from "react";
import demo from "../../assets/demo cert.jpeg";
import OSGoogle from "../../assets/certs/OS - Google.jpeg";
import excel from "../../assets/certs/excelUpgrad.png";
import techSupportGoogle from "../../assets/certs/tech - google.jpeg";
import DevOps from "../../assets/certs/DevOps.png";
import react from "../../assets/certs/react.png";
import learnJava from "../../assets/certs/java.png";
import chatGptguvi from "../../assets/certs/ChatGPT for Everyone - Guvi.png";
import fullstackpw from "../../assets/certs/fullstackpw.png";
import jfsjd from "../../assets/certs/jfsjd.png";
import JFSJD from "../../assets/JFSJD.pdf";
import LazyLoad from "react-lazy-load";
import { motion } from "framer-motion";
function Certifications() {
  const certs = [
    {
      img: jfsjd,
      course: "Junior Full Stack Java Developer",
      issued_by: "EduJobs | Generation India",
      link: JFSJD,
    },
    {
      img: fullstackpw,
      course: "Full Stack Web Development",
      issued_by: "Physics Wallah",
      link: "https://learn.pwskills.com/certificate/9dc9c78f-5c10-42f4-8d41-19e4dda89130",
    },
    {
      img: chatGptguvi,
      course: "ChatGPT for Everyone",
      issued_by: "GUVI",
      link: "https://www.guvi.in/certificate?id=7Z510T936z50tJb19U",
    },
    {
      img: techSupportGoogle,
      course: "Technical Support Fundamentals",
      issued_by: "Google",
      link: "https://www.coursera.org/account/accomplishments/verify/33CG8HBFTVJ2",
    },
    {
      img: excel,
      course: "Introduction to Data Analytics using Excel",
      issued_by: "upGrad",
      link: "https://upgrad.verification.givemycertificate.com/v/b1f39319-4132-4dec-9e1f-803646d9b51d",
    },
    {
      img: OSGoogle,
      course: "Operating Systems and You: Becoming a Power User",
      issued_by: "Google",
      link: "https://www.coursera.org/account/accomplishments/verify/NKMZTWDV2L5P",
    },
    {
      img: DevOps,
      course: "DevOps Introduction",
      issued_by: "IntelliPaat",
      link: "https://intellipaat.com/academy/certificate-link/?Yz0xNjU1JnU9ODA4MDAmZXh0PTE=",
    },
    {
      img: learnJava,
      course: "Learn Java",
      issued_by: "Codecademy",
      link: "https://www.codecademy.com/profiles/py3703880926",
    },
    {
      img: react,
      course: "Learn React JS",
      issued_by: "Codecademy",
      link: "https://www.codecademy.com/profiles/py3703880926",
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const handleClose = (e) => {
    if (e.target.id !== "modalImg") {
      setModalVisible(false);
    }
  };

  return (
    <section>
      <h1 className="m-2 text-2xl font-semibold">Certifications</h1>
      <div className="grid lg:grid-cols-3 mx-4 gap-4">
        {certs.map((c, index) => {
          return (
            <LazyLoad>
              <motion.div
                className="p-2 rounded-lg shadow-lg flex flex-col bg-gradient-to-r from-teal-400/60 to-blue-500/50 hover:from-blue-500/50 hover:to-teal-400/60 hover:shadow-none hover:scale-105 shadow-black text-center transition-all duration-300"
                key={c.course}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                <img src={c.img} alt={c.course} className="h-[150px]" />
                <div className="mt-2">
                  <h3 className="text-md font-semibold leading-5 line-clamp-1 hover:line-clamp-none">
                    {c.course}
                  </h3>
                  <p className="italic">{c.issued_by}</p>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <button
                    className="bg-[#374151] text-[#38fbe7] px-4 py-2 rounded-lg hover:bg-[#428bffa6] transition duration-300"
                    onClick={() => {
                      setModalVisible(true);
                      setModalImage(c.img);
                    }}
                  >
                    View
                  </button>
                  <a
                    href={c.link}
                    target="_blank"
                    className="bg-[#374151] text-[#31ffea] px-4 py-2 rounded-lg hover:bg-[#428bffa6] transition duration-300"
                  >
                    Link
                  </a>
                </div>
              </motion.div>
            </LazyLoad>
          );
        })}
      </div>

      <div
        className={`fixed inset-0 bg-transparent ${
          modalVisible ? "block" : "hidden"
        } flex justify-center items-center`}
        onClick={handleClose}
      >
        <div className="relative">
          <button
            className="absolute right-0 top-0 bg-black rounded-full w-7 h-7"
            onClick={() => setModalVisible(false)}
          >
            X
          </button>
          <img
            src={modalImage}
            alt="image"
            className="h-[500px]"
            id="modalImg"
          />
        </div>
      </div>
    </section>
  );
}

export default Certifications;
