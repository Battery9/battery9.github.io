import React from "react";
import {
  FiGlobe,
  FiLayers,
  FiTool,
  FiCommand
} from 'react-icons/fi'
import { motion } from "framer-motion";

function MyServices() {
  const services = [
    {
      icon: <FiGlobe className="text-blue-500 text-3xl" />,
      title: "Web Development",
      description:
        "Empower businesses and individuals with dynamic, data-driven web applications that enhance their online presence and boost engagement.",
    },
    {
      icon: <FiLayers className="text-blue-500 text-3xl" />,
      title: "Office Administration",
      description:
        "Streamline daily office tasks and foster a productive workspace by implementing effective administrative procedures and optimizing workflow efficiency.",
    },
    {
      icon: <FiTool className="text-blue-500 text-3xl" />,
      title: "Field Technician",
      description:
        "Deliver seamless technical support and maintenance services on-site, ensuring the efficient operation of critical systems and equipment.",
    },
    {
      icon: <FiCommand className="text-blue-500 text-3xl" />,
      title: "Esports Manager",
      description:
        "Guide and strategize with esports orgs to achieve competitive excellence, manage player development, and orchestrate successful tournament campaigns.",
    },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold m-2">What Can I Do?</h2>
      <div className="grid grid-cols-2 gap-4 p-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-2 rounded-lg shadow-sm flex items-center justify-center bg-gradient-to-r from-teal-400/60 to-blue-500/50 transition-all duration-300 hover:from-blue-500/50 hover:to-teal-400/60 hover:shadow-none shadow-white/60"
            initial={{ translateX: -1000 }}
            animate={{ translateX: 0 }}
            transition={{ duration: .75, delay: index * 0.2 }}
          >
            <div className="bg-white p-3 flex items-center justify-center rounded-full mr-4 transition-transform transform">
              {service.icon}
            </div>
            <div>
              <h3 className="font-semibold">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default MyServices;
