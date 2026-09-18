"use client";

import React, { useRef, useState, useEffect } from "react";
import "../../styles/WhoBehind.css";

const ASSETS = "/assets/who-behind";

export default function WhoBehind() {
  const [expanded, setExpanded] = useState(false);
  const slideRef = useRef(null);

  useEffect(() => {
    const slide = slideRef.current;
    if (!slide) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setExpanded(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    observer.observe(slide);
    return () => observer.disconnect();
  }, []);

  return (
    <main id="about" ref={slideRef} className="who-page my-[5vw] ">
      {/* =====================================================
          DECORATIONS
      ====================================================== */}

      {/* Blue diagonal strokes above the title */}
      <img
        className="decoration-lines"
        src={`${ASSETS}/lines decoration.png`}
        alt=""
        aria-hidden="true"
      />

      {/* Right squiggle (top-right, behind the banner) */}
      <img
        className="decoration-right"
        src={`${ASSETS}/decoration 3.png`}
        alt=""
        aria-hidden="true"
      />

      {/* Left squiggle (below the banner, toward bottom-left) */}
      <img
        className="decoration-left"
        src={`${ASSETS}/decoration 2.png`}
        alt=""
        aria-hidden="true"
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <section className="who-content">
        {/* TITLE */}
        <header className="who-header">
          <h1>
            <span className="title-blue">Who&apos;s</span>{" "}
            <span className="title-green">behind</span>{" "}
            <span className="title-blue">ESI.101</span>
            <span className="title-blue"> ?</span>
          </h1>
        </header>

        {/* INFO BANNER */}
        <section className="description-box">
          <div className="description-corner description-corner-left" />
          <div className="description-corner description-corner-right" />

          <p className="lg:text-2xl text-md">
            CSE — the Scientific Club of ESI! Founded in 2008 by students of the
            National School of Computer Science, CSE is a vibrant community
            where students learn, create, connect, and explore technology
            through fun, creative, and unforgettable experiences!
          </p>
        </section>
      </section>

      {/* =====================================================
          CABLE (laptop → laptop, one continuous piece)
          The photo cluster sits above this in z-index, so it
          naturally covers the middle section of the cable —
          that's what makes it read as "two" cables emerging
          from either side of the photo stack in the reference.
          NOTE: update the filename below to match whatever this
          asset is actually saved as in your assets folder.
      ====================================================== */}

      <img
        className="cable"
        src={`${ASSETS}/cable.png`}
        alt=""
        aria-hidden="true"
      />

      {/* =====================================================
          PHOTO CLUSTER (resting deck / fanned on proximity)
      ====================================================== */}

      <section className={`photo-cluster${expanded ? " is-expanded" : ""}`}>
        <div className="card card-1">
          <img
            src={`${ASSETS}/card-1-photobooth.png`}
            alt="CSE members posing in a photo-booth frame"
          />
        </div>
        <div className="card card-2">
          <img
            src={`${ASSETS}/card-2-interview.png`}
            alt="CSE member being interviewed with a microphone"
          />
        </div>
        <div className="card card-3">
          <img
            src={`${ASSETS}/card-3-hijab-group.png`}
            alt="CSE members talking together under a tree"
          />
        </div>
        <div className="card card-4">
          <img
            src={`${ASSETS}/card-4-group-talking.png`}
            alt="CSE members chatting outside near a tree"
          />
        </div>
        <div className="card card-5">
          <img
            src={`${ASSETS}/card-5-laptop.png`}
            alt="CSE member typing on a sticker-covered laptop"
          />
        </div>
      </section>

      {/* =====================================================
          LAPTOPS
      ====================================================== */}

      <img
        className="cse-computer"
        src={`${ASSETS}/CSE COMPUTER.png`}
        alt="CSE laptop with a lightbulb on its screen"
      />

      <img
        className="esi-computer"
        src={`${ASSETS}/ESI101 COMPUTER.png`}
        alt="ESI.101 laptop"
      />
    </main>
  );
}
