import React, { useState, useEffect } from "react";

const TypingEffect = ({
  words,
  speed = 250,
  deleteSpeed = 150,
  pause = 6000,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (charIndex < currentWord.length) {
          setCurrentText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
          setTimeout(() => setIsDeleting(false), pause);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timer);
  }, [
    charIndex,
    currentWordIndex,
    isDeleting,
    words,
    speed,
    deleteSpeed,
    pause,
  ]);

  return (
    <span className="text-purple-500">
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypingEffect;
