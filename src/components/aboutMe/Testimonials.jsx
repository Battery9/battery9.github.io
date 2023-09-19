import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css/sea-green";

const testimonials = [
  {
    name: "John Doe",
    text: "Working with this developer has been a fantastic experience. Their skills, professionalism, and dedication are truly impressive.",
  },
  {
    name: "Jane Smith",
    text: "I was amazed by the quality of the work delivered by this developer. They consistently exceeded my expectations and delivered on time.",
  },
  {
    name: "Alex Johnson",
    text: "This developer's attention to detail and creative problem-solving abilities have greatly contributed to the success of our projects.",
  },
];

function Testimonials() {
  return (
    <>
    <h2 className="mx-8 text-2xl font-semibold mb-2">Testimonials</h2>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="mx-8"
    >
      <Splide
        options={{
          type: "loop",
          pagination: false,
          perPage: 2,
          perMove: 1,
          gap: "0.7rem",
        }}
        className="!py-0 px-2"
      >
        {testimonials.map((testimonial, index) => (
          <SplideSlide
            key={index}
            className="overflow-hidden"
          >
            <div className="p-4 border border-zinc-500 bg-[#65c3ba]/5 rounded-md m-2">
              <blockquote className="text-sm font-semibold">
                "{testimonial.text}"
              </blockquote>
              <p className="text-xs text-end">{testimonial.name}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </motion.div>
    </>
  );
}

export default Testimonials;
