import React, { useState, useEffect } from "react";

function TypingAnimation({
  words = ["Example 1", "Example 2"],
  typingSpeed = 100,
  erasingSpeed = 50,
  delayAfterTyping = 1000,
  cursorBlinkSpeed = 500,
  className = "h-1",
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [isWordTyped, setIsWordTyped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (isErasing) {
          setCurrentCharIndex(currentCharIndex - 1);

          if (currentCharIndex < 0) {
            setIsErasing(false);
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
            setIsWordTyped(false);
          }
        } else {
          setCurrentCharIndex(currentCharIndex + 1);

          if (
            !isWordTyped &&
            currentCharIndex === words[currentWordIndex].length
          ) {
            setIsWordTyped(true);
            setTimeout(() => setIsErasing(true), delayAfterTyping);
          }
        }
      },
      isErasing ? erasingSpeed : typingSpeed
    );

    return () => {
      clearTimeout(timer);
    };
  }, [
    currentWordIndex,
    currentCharIndex,
    isErasing,
    isWordTyped,
    words,
    typingSpeed,
    erasingSpeed,
    delayAfterTyping,
    cursorBlinkSpeed,
  ]);

  const currentWord = words[currentWordIndex];
  const displayedText = currentWord.substring(0, currentCharIndex);

  return (
    <p className={className}>
      {displayedText}
      <span className={`text-white ml-0.5 animate-pulse`}>_</span>
    </p>
  );
}

export default TypingAnimation;
