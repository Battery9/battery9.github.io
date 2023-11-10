import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LazyLoad from "react-lazy-load";

const quotes = [
  {
    author: "Tim Berners-Lee",
    text: "The web does not just connect machines; it connects people.",
  },
  {
    author: "Maria Klawe",
    text: "Coding is today's language of creativity. All our children deserve a chance to become creators instead of consumers of computer programs.",
  },
  {
    author: "Cassie Noble",
    text: "Web development is an art. Don't let anyone tell you differently.",
  },
  {
    author: "Peter Drucker",
    text: "The best way to predict the future is to create it."
  },
  {
    author: "John Maeda",
    text: "Simplicity is about subtracting the obvious and adding the meaningful.",
  },
  {
    author: "Pierre Omidyar",
    text: "We have technology, finally, that for the first time in human history allows people to really maintain rich connections with much larger numbers of people.",
  },
  {
    author: "Bill Gates",
    text: "Information technology and business are becoming inextricably interwoven. I don't think anybody can talk meaningfully about one without the talking about the other.",
  },
  {
    author: "Tim Berners-Lee",
    text: "The web is more a social creation than a technical one. I designed it for a social effect—to help people work together—and not as a technical toy.",
  }
];

function HomeQuotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <LazyLoad>
    <div className="flex items-center justify-center flex-col text-center text-teal-200 mt-3">
      <motion.blockquote
        className="text-xl italic mb-2 quote-animation"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={currentQuoteIndex}
      >
        "{quotes[currentQuoteIndex].text}"
      </motion.blockquote>
      <motion.p
        className="text-sm author-animation"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        key={`${currentQuoteIndex} - author`}
      >
        — {quotes[currentQuoteIndex].author}
      </motion.p>
    </div>
    </LazyLoad>
  );
}

export default HomeQuotes;