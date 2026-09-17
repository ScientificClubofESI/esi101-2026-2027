import React from "react";
import Image from "next/image";

const HERO_IMAGE = "/assets/hero.webp";
const LOGO = "/assets/logo.svg";
const CISSOU_LOGO = "/assets/cisso_logo.svg";

const CAPTION =
  "Discover student life, get answers to your questions, and know what to expect when you arrive.";

// Below this width the card is too narrow to hold the caption on two lines, so
// the photo stays a plain rounded rectangle and the button and caption sit
// outside it instead of in notches.
const NOTCH_AT = 1100;

// Card geometry in the card's own units (1105x563, the photo's 1.963 aspect).
// `mask-size: 100% 100%` stretches the path over the card, so these numbers are
// effectively percentages of the card. Each notch is the size of the element
// sitting in it plus the same gap on every side; keep them in step with the
// `min-[1100px]:` positions of the button and caption below.
const CARD_W = 1105;
const CARD_H = 563;
const R = 28; // outer corner radius
const FILLET = 19; // concave inner corner of a notch
const INNER = 24; // convex corner where a notch meets the card's edge

// Bottom-left notch: caption box is 43% wide, 11.5% tall, 1.1%/0.6% from the corner.
const BL_X = 499; // 45.2% of the width
const BL_Y = 483; // notch is the bottom 14.3% of the height

// Top-right notch: button is 18.5% wide, 9% tall, 1.1% from the corner.
const TR_X = 876; // notch starts at 79.3% of the width
const TR_Y = 75; // notch is the top 13.3% of the height

const NOTCH_PATH = [
  `M${R},0`,
  // top edge, then down into the top-right notch
  `H${TR_X - INNER} A${INNER},${INNER} 0 0 1 ${TR_X},${INNER}`,
  `V${TR_Y - FILLET} A${FILLET},${FILLET} 0 0 0 ${TR_X + FILLET},${TR_Y}`,
  `H${CARD_W - R} A${R},${R} 0 0 1 ${CARD_W},${TR_Y + R}`,
  // right edge, bottom-right corner
  `V${CARD_H - R} A${R},${R} 0 0 1 ${CARD_W - R},${CARD_H}`,
  // bottom edge, then up into the bottom-left notch
  `H${BL_X + INNER} A${INNER},${INNER} 0 0 1 ${BL_X},${CARD_H - INNER}`,
  `V${BL_Y + FILLET} A${FILLET},${FILLET} 0 0 0 ${BL_X - FILLET},${BL_Y}`,
  `H${R} A${R},${R} 0 0 1 0,${BL_Y - R}`,
  // left edge, top-left corner
  `V${R} A${R},${R} 0 0 1 ${R},0 Z`,
].join(" ");

const NOTCH_SVG =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CARD_W} ${CARD_H}" preserveAspectRatio="none">` +
  `<path fill="#fff" d="${NOTCH_PATH}"/></svg>`;

const MASK = `url("data:image/svg+xml,${encodeURIComponent(NOTCH_SVG)}")`;

const CSS = `
.hero-photo { border-radius: 1.5rem; overflow: hidden; }
@media (min-width: ${NOTCH_AT}px) {
  .hero-photo {
    border-radius: 0;
    -webkit-mask-image: ${MASK}; mask-image: ${MASK};
    -webkit-mask-size: 100% 100%; mask-size: 100% 100%;
    -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
  }
}`;

// Font sizes are in vw so the text scales with the card and fits its notch.
const captionStyle =
  "items-center rounded-xl border-2 border-[#172AAF] bg-[#BFC5E9] pl-[1.9em] pr-[2.8em] " +
  "font-consolas font-bold leading-[1.35] text-[#00072A] text-[clamp(0.75rem,1.15vw,1.375rem)]";

const buttonStyle =
  "items-center justify-between gap-[0.8em] h-[64px] rounded-[0.6em] bg-[#C8ED1F] px-[1.1em] py-[0.1em] mt-2 " +
  "font-haetten text-[#172AAF] text-[clamp(1.125rem,1.7vw,2rem)] leading-none whitespace-nowrap";

// Visual only for now — no handler is wired up yet.
const ChatButton = ({ className = "" }) => (
  <button type="button" className={`${buttonStyle} ${className}`}>
    Chat with Cissou
    <Image
      src={CISSOU_LOGO}
      alt=""
      width={31}
      height={28}
      className="h-[1.15em] w-auto"
    />
  </button>
);

const Hero = () => {
  return (
    <section className="w-full bg-background px-[5.33%] pt-6 pb-10 sm:pt-8 sm:pb-14">
      <style>{CSS}</style>

      {/* Narrow screens: button above the card. */}
      <div className="mb-3 flex justify-end min-[1100px]:hidden">
        {/* <ChatButton className="flex" /> */}
      </div>

      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] min-[1100px]:aspect-[53/27]">
        <div className="hero-photo absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Students at an ESI 101 session in a lecture hall"
            fill
            preload
            sizes="(max-width: 1100px) 100vw, 90vw"
            className="object-cover"
          />
        </div>

        {/* Wide screens: button inside the top-right notch. */}
        {/* <ChatButton className="hidden min-[1100px]:flex absolute right-[1.1%] top-[2.16%] w-[18.5%] h-[9%] cursor-pointer  hover:brightness-110" /> */}

        <h1 className="absolute left-[4%] bottom-[5%] w-[52%] sm:w-[40%] min-[1100px]:left-[2.4%] min-[1100px]:bottom-[18%] min-[1100px]:w-[31.7%]">
          <Image
            src={LOGO}
            alt="esi.101"
            width={411}
            height={135}
            loading="eager"
            className="h-auto w-full"
          />
        </h1>

        {/* Wide screens: caption inside the bottom-left notch. */}
        <p
          className={`hidden min-[1100px]:flex absolute left-[1.1%] bottom-[0.6%] w-[43%] h-[11.5%] ${captionStyle}`}
        >
          {CAPTION}
        </p>
      </div>

      {/* Narrow screens: caption under the card. */}
      <p className={`mt-3 flex py-[1em] min-[1100px]:hidden ${captionStyle}`}>
        {CAPTION}
      </p>
    </section>
  );
};

export default Hero;
