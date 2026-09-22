import React from "react";
import Image from "next/image";
import ChatBot from "../ChatBot/page";

const HERO_IMAGE = "/assets/hero.webp";
const LOGO = "/assets/logo.svg";
const CISSOU_LOGO = "/assets/cisso_logo.svg";

const CAPTION =
  "Discover student life, get answers to your questions, and know what to expect when you arrive.";
const CAPTION_SM = "Your first steps into life at ESI.";

// Above this width we switch to the wider desktop notch (long caption, two-line bubble).
const NOTCH_AT = 1100;

// Card geometry in the card's own units (1105x563, the photo's 1.963 aspect).
// `mask-size: 100% 100%` stretches the path over the card, so these numbers are
// effectively percentages of the card. Each notch is the size of the element
// sitting in it plus the same gap on every side; keep them in step with the
// caption/button positions below.
const CARD_W = 1105;
const CARD_H = 563;
const R = 28; // outer corner radius
const FILLET = 19; // concave inner corner of a notch
const INNER = 24; // convex corner where a notch meets the card's edge

// Top-right notch: button is 18.5% wide, 9% tall, 1.1% from the corner. Same on all widths.
const TR_X = 876; // notch starts at 79.3% of the width
const TR_Y = 100; // notch is the top 13.3% of the height
const TR_Y_DESKTOP = 85; // notch is the top 15.1% of the height on desktop

// Desktop bottom-left notch: long caption, 43% wide, 11.5% tall.
const BL_X_DESKTOP = 499; // 45.2% of the width
const BL_Y_DESKTOP = 483; // notch is the bottom 14.3% of the height

// Mobile bottom-left notch: short caption only, narrower so it hugs the bubble
// instead of leaving empty photo showing beside it. Tweak this % to taste.
const BL_X_MOBILE = 640; // ~58% of the width (notch is narrower than desktop's)
const BL_Y_MOBILE = 483; // same height as desktop; change if CAPTION_SM needs less

function buildNotchPath(blX, blY, trY) {
  return [
    `M${R},0`,
    // top edge, then down into the top-right notch
    `H${TR_X - INNER} A${INNER},${INNER} 0 0 1 ${TR_X},${INNER}`,
    `V${trY - FILLET} A${FILLET},${FILLET} 0 0 0 ${TR_X + FILLET},${trY}`,
    `H${CARD_W - R} A${R},${R} 0 0 1 ${CARD_W},${trY + R}`,
    // right edge, bottom-right corner
    `V${CARD_H - R} A${R},${R} 0 0 1 ${CARD_W - R},${CARD_H}`,
    // bottom edge, then up into the bottom-left notch
    `H${blX + INNER} A${INNER},${INNER} 0 0 1 ${blX},${CARD_H - INNER}`,
    `V${blY + FILLET} A${FILLET},${FILLET} 0 0 0 ${blX - FILLET},${blY}`,
    `H${R} A${R},${R} 0 0 1 0,${blY - R}`,
    // left edge, top-left corner
    `V${R} A${R},${R} 0 0 1 ${R},0 Z`,
  ].join(" ");
}

function buildMask(blX, blY, trY) {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CARD_W} ${CARD_H}" preserveAspectRatio="none">` +
    `<path fill="#fff" d="${buildNotchPath(blX, blY, trY)}"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const MASK_MOBILE = buildMask(BL_X_MOBILE, BL_Y_MOBILE, TR_Y);
const MASK_DESKTOP = buildMask(BL_X_DESKTOP, BL_Y_DESKTOP, TR_Y_DESKTOP);

const CSS = `
.hero-photo {
  border-radius: 0;
  -webkit-mask-image: ${MASK_MOBILE}; mask-image: ${MASK_MOBILE};
  -webkit-mask-size: 100% 100%; mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
}
@media (min-width: ${NOTCH_AT}px) {
  .hero-photo {
    -webkit-mask-image: ${MASK_DESKTOP}; mask-image: ${MASK_DESKTOP};
  }
}`;

// Font sizes are in vw/clamp so the text scales with the card and fits its notch.
const captionStyle =
  "items-center rounded-xl border-2 border-[#172AAF] bg-[#BFC5E9] lg:pl-[1.9em] lg:pr-[2.8em] " +
  "font-consolas font-bold leading-[1.35] text-[#00072A] px-2 text-[clamp(0.6rem,1.15vw,1.375rem)]";

const Hero = () => {
  return (
    <section className="w-full bg-background px-[5.33%] pt-24 sm:pt-8 sm:pb-14">
      <style>{CSS}</style>

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

        <ChatBot className="absolute right-[1.1%] sm:top-[3.5%] top-1 w-[18.5%] sm:h-[64px] h-[9%] min-h-10" />

        <h1 className="absolute left-[4%] bottom-[17%] w-[52%] sm:w-[40%] min-[1100px]:left-[2.4%] min-[1100px]:bottom-[18%] min-[1100px]:w-[31.7%]">
          <Image
            src={LOGO}
            alt="esi.101"
            width={411}
            height={135}
            loading="eager"
            className="h-auto w-full"
          />
        </h1>

        <p
          className={`absolute left-[1.1%] bottom-[0.6%] h-[11.5%] flex min-[1100px]:hidden ${captionStyle}`}
        >
          {CAPTION_SM}
        </p>

        <p
          className={`hidden min-[1100px]:flex absolute left-[1.1%] bottom-[0.6%] w-[43%] h-[11.5%] ${captionStyle}`}
        >
          {CAPTION}
        </p>
      </div>
    </section>
  );
};

export default Hero;
