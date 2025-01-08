"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const sentence = "Front-end Developer";

  useEffect(() => {
    const typeCharacter = (index = 0) => {
      if (index <= sentence.length) {
        setDisplayedText(sentence.slice(0, index));
        setTimeout(() => typeCharacter(index + 1), 100);
      }
    };

    typeCharacter();

    return () => setDisplayedText("");
  }, []);

  return (
    <div className="flex pt-20 pl-5 border border-red-800 gap-5 h-full text-gray-300 justify-between">
      <div className="flex-col flex">
        <h1 className="md:text-5xl text-xl font-bold">Fatemeh Qasemi</h1>
        <h3 className="text-2xl gap-1 flex">
          {displayedText}
          <span className="animate-blink text-blue-700 text-3xl">|</span>
        </h3>
        <div className="flex gap-5 pt-10 font-bold">
          <button className="bg-blue-700 py-2 px-4 rounded">View Work</button>
          <button className="flex border text-gray-300 hover:text-blue-700 border-blue-700 py-2 px-4 rounded">
            Contact Me
          </button>
        </div>
      </div>
      <div className="flex"></div>
    </div>
  );
}
