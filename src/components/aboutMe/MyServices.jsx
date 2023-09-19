import React from "react";
import { FiCode,
    FiLayout,
    FiSmartphone,
    FiDatabase} from 'react-icons/fi'
import { motion } from "framer-motion";

function MyServices() {
  const services = [
    {
      icon: <FiCode className="text-blue-500 text-3xl" />,
      title: "Web Development",
      description:
        "Crafting interactive and user-friendly websites using modern web technologies.",
    },
    {
      icon: <FiLayout className="text-blue-500 text-3xl" />,
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing user interfaces to enhance user experiences.",
    },
    {
      icon: <FiSmartphone className="text-blue-500 text-3xl" />,
      title: "Responsive Design",
      description:
        "Ensuring your applications look and function seamlessly across all devices.",
    },
    {
      icon: <FiDatabase className="text-blue-500 text-3xl" />,
      title: "Database Management",
      description:
        "Managing and optimizing databases to ensure efficient data storage and retrieval.",
    },
  ];

  return (
    <>
    <h2 className="text-2xl font-semibold mb-4">What Can I Do?</h2>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-2 rounded-lg shadow-sm flex items-center justify-center bg-gradient-to-r from-teal-400/60 to-blue-500/50 transition-all duration-300 hover:from-blue-500/50 hover:to-teal-400/60 hover:shadow-none shadow-white/60"
              initial={{ translateX: -1000}}
              animate={{ translateX: 0}}
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
