"use client";

import { useState } from "react";
import Image from "next/image";
import faqData from "./FaqData.json";

export default function FaqAccordion() {
  const [openIndexes, setOpenIndexes] = useState(new Set());

  const toggle = (index) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {faqData.map((item, index) => {
        const isOpen = openIndexes.has(index);
        return (
          <div
            key={index}
            className={`bg-secondary-500 dark:bg-primary-500 overflow-hidden transition-[border-radius] duration-300 ${
              isOpen ? "rounded-3xl" : "rounded-3xl rounded-bl-none"
            }`}
          >
            <div className="w-full flex items-center justify-between gap-6 px-12 py-5 text-left">
              <span className="font-consolas font-bold text-lg md:text-xl text-foreground">
                {item.question}
              </span>
              <button
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-label="Toggle answer"
                className="shrink-0 cursor-pointer"
              >
                <span
                  className={`block transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <Image
                    src="/assets/arrow-drop-down_light.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="dark:hidden"
                  />
                  <Image
                    src="/assets/arrow-drop-down_dark.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="hidden dark:block"
                  />
                </span>
              </button>
            </div>

            <div
              className="grid transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pl-18 pr-28 pb-10 pt-3 text-lg text-[#00072A] dark:text-[#F2FAFD] font-consolas leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
