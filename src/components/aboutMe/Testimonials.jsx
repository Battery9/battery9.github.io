import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css/sea-green";
import LazyLoad from "react-lazy-load";

const testimonials = [
  {
    name: "Tim Berners-Lee",
    text: "The web does not just connect machines; it connects people.",
  },
  {
    name: "Maria Klawe",
    text: "Coding is today's language of creativity. All our children deserve a chance to become creators instead of consumers of computer programs.",
  },
  {
    name: "Cassie Noble",
    text: "Web development is an art. Don't let anyone tell you differently.",
  }
];

function Testimonials() {
  return (
    <>
    <h2 className="m-2 text-xl font-semibold">Testimonials</h2>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="mx-8"
    >
      <LazyLoad>
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
      </LazyLoad>
    </motion.div>
    </>
  );
}

export default Testimonials;
