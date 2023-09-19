import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quotes = [
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "The web is a canvas for both the artistic and the logical.",
    author: " Paul Cookson",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
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
  );
}

export default HomeQuotes;