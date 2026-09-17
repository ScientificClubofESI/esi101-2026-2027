"use client";

import { useState, useLayoutEffect, useRef } from "react";

const faqData = [
   {
    question: "What is Student life at ESI really like?",
    answer: "You can fully integrate into the club by actively participating in events, joining project teams, attending weekly meetings, and connecting with other members through our social activities and workshopsYou can fully integrate into the club by actively participating in events, joining project teams, attending weekly meetings, and connecting with other members through our social activities and workshops",
  },
  {
    question: "Is ESI as difficult as people say?",
    answer: "You can fully integrate into the club by actively participating in events, joining project teams, attending weekly meetings, and connecting with other members through our social activities and workshopsYou can fully integrate into the club by actively participating in events, joining project teams, attending weekly meetings, and connecting with other members through our social activities and workshops",
  },
  {
    question: "What should I expect in my first year?",
    answer: "You can fully integrate into the club by actively participating in events, joining project teams, attending weekly meetings, and connecting with other members through our social activities and workshopsYou can fully integrate into the club by actively participating in events, joining project teams, attending weekly meetings, and connecting with other members through our social activities and workshops",
  },
  {
    question: "How do I manage my time at ESI?",
    answer: "You can fully integrate into the club by actively participating in events, joining project teams, attending weekly meetings, and connecting with other members through our social activities and workshopsYou can fully integrate into the club by actively participating in events, joining project teams, attending weekly meetings, and connecting with other members through our social activities and workshops",
  },
  {
    question: "What are the best ways to get involved?",
    answer: "You can fully integrate into the club by actively participating in events, joining project teams, attending weekly meetings, and connecting with other members through our social activities and workshopsYou can fully integrate into the club by actively participating in events, joining project teams, attending weekly meetings, and connecting with other members through our social activities and workshops",
  },
];

/**
 * Réduit progressivement la taille de police tant que le texte
 * dépasse la hauteur de son conteneur.
 */
function useAutoFitText(text, { maxFontSize, minFontSize = 14, lineHeight = 1.1 }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    if (!container || !textEl) return;

    let size = maxFontSize;
    textEl.style.fontSize = `${size}px`;
    textEl.style.lineHeight = String(lineHeight);

    while (textEl.scrollHeight > container.clientHeight && size > minFontSize) {
      size -= 1;
      textEl.style.fontSize = `${size}px`;
    }
    setFontSize(size);
  }, [text, maxFontSize, minFontSize, lineHeight]);

  return { containerRef, textRef, fontSize };
}

function Chevron({ direction = "right" }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path
        d="M6 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FaqCarousel() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const isFirst = current === 0;
  const isLast = current === faqData.length - 1;
  const item = faqData[current];
  const number = String(current + 1).padStart(2, "0");

  const {
  containerRef: questionBoxRef,
  textRef: questionTextRef,
} = useAutoFitText(item.question, {
  maxFontSize: 24,
  minFontSize: 18,
  lineHeight: 1.2,
});
 const {
  containerRef: answerBoxRef,
  textRef: answerTextRef,
} = useAutoFitText(item.answer, {
  maxFontSize: 18,
  minFontSize: 14,
  lineHeight: 2,
});
  const goPrev = () => {
    if (isFirst) return;
    setFlipped(false);
    setCurrent((prev) => prev - 1);
  };

  const goNext = () => {
    if (isLast) return;
    setFlipped(false);
    setCurrent((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        {/* Flèche gauche */}
        <button
          onClick={goPrev}
          disabled={isFirst}
          aria-label="Previous question"
          className={`shrink-0 flex items-center justify-center w-5 h-5 rounded-full border cursor-pointer ${
            isFirst ? "invisible" : ""
          }`}
        >
          <Chevron direction="left" />
        </button>

        {/* Carte avec effet flip — 270 x 375 */}
        <div className="[perspective:1000px] w-[270px] h-[375px]">
         <div
  onClick={() => setFlipped((prev) => !prev)}
  className={`relative w-full h-full cursor-pointer transition-transform duration-300 ease-out [transform-style:preserve-3d] ${
    flipped ? "[transform:rotateY(180deg)]" : ""
  }`}
>
          {/* Face avant */}
<div
  className="
    absolute inset-0
    [backface-visibility:hidden]
    bg-accordion
    rounded-[32px]
    flex flex-col
    items-center
    px-13
pt-[106px]
pb-10
  "
>
  {/* Numéro */}
  <span
    className="
      font-consolas
      font-bold
      text-[40px]
      leading-none
      text-[#1E2A8C]
      dark:text-[#D7ED33]
      mb-6
    "
  >
    {number}.
  </span>

  {/* Question */}
  <div
    ref={questionBoxRef}
    className="w-full flex-1 min-h-0 font-consolas font-bold text-foreground whitespace-pre-line"
  >
    <p
      ref={questionTextRef}
      className="
        w-full
        font-consolas
        font-bold
        text-foreground
        text-left
      "
    >
      {item.question}
    </p>
  </div>
</div>

       
{/* Face arrière */}
<div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-accordion-back rounded-[32px] overflow-hidden">
  <p
    className="
      absolute
      top-[42px]
      left-[22px]
      w-[226px]
      h-[288px]
      font-consolas
      font-normal
      text-[15px]
      leading-[1.21]
      tracking-normal
      text-[#27292D] dark:text-white
      overflow-hidden
    "
  >
    {item.answer}
  </p>
</div>
          </div>
        </div>

        {/* Flèche droite */}
        <button
          onClick={goNext}
          disabled={isLast}
          aria-label="Next question"
          className={`shrink-0 flex items-center justify-center w-5 h-5 rounded-full border cursor-pointer ${
            isLast ? "invisible" : ""
          }`}
        >
          <Chevron direction="right" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex gap-2">
        {faqData.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? "bg-[#1E2A8C] dark:bg-[#D7ED33]" : "bg-foreground/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}