"use client";
import React, { useState } from "react";
import { AccordionProps } from "./accordion.types";
import IconChevronUp from "public/icons/chevron-up.svg";
import IconChevronDown from "public/icons/chevron-down.svg";

export const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={`accordion-${item.id}`}>
          <h2 className="accordion-title">
            <button
              onClick={() => toggleAccordion(index)}
              type="button"
              className={"text-gray-300 pt-3"}
            >
              <span className="flex text-[14px]">
                {activeIndex === index ? (
                  <IconChevronUp width={18} className="stroke-gray-300" />
                ) : (
                  <IconChevronDown width={18} className="stroke-gray-300" />
                )}
                {item.title}
              </span>
            </button>
          </h2>
          {activeIndex === index && (
            <div className={`accordion-content`}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
