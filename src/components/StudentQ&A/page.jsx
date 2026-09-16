"use client";

import { useRef } from "react";
import Image from "next/image";

const VIDEO_URL =  "https://www.w3schools.com/html/mov_bbb.mp4";

const StudentQA = () => {
  const playerRef = useRef(null);

  const handleWatch = () => {
    const node = playerRef.current;
    if (!node) return;
    node.scrollIntoView({ behavior: "smooth", block: "center" });
    node.querySelector("video")?.play?.();
  };

  return (
    <section className="relative mx-auto flex w-full px-[10%] flex-col items-center gap-4 py-12 lg:gap-6 overflow-x-clip">

        <div className="relative w-full pt-4 lg:pt-0">
          <Image
            src="/assets/studentsQ&A/white_mode_frame.svg"
            alt=""
            width={102}
            height={25}
            className="pointer-events-none absolute left-[11.3%] top-0 h-auto w-[100px] dark:hidden lg:left-14 lg:-top-5 lg:w-[173px]"
          />
          <Image
            src="/assets/studentsQ&A/dark_mode_frame.svg"
            alt=""
            width={102}
            height={25}
            className="pointer-events-none absolute left-[11.3%] top-0 hidden h-auto w-[100px] dark:block lg:left-14 lg:-top-5 lg:w-[173px]"
          />
          <h2 className="relative z-10 font-haetten whitespace-nowrap text-[28px] leading-[normal] text-primary-500 lg:text-[48px] dark:text-white">
            Students <span className="text-secondary-600">Q&A</span>
          </h2>
        </div>

        <p className="relative z-10 w-full text-justify font-consolas text-[14px] leading-[normal] text-[#060e1f] dark:text-[#f2fafd] lg:text-[20px]">
          Have questions about student life, classes, or projects at ESI?
          We&apos;ll share our real experiences, tips, and lessons to help you
          navigate your first steps with confidence and make the most of your
          journey at ESI!
        </p>

        <div className="relative mx-auto mb-10 aspect-[1105/641] w-full">
          <div
            ref={playerRef}
            className="relative h-full w-full overflow-clip rounded-[18.733px] border-[0.6px] border-dashed border-primary-900 lg:rounded-[60px] lg:border-2 lg:border-primary-500 dark:lg:border-secondary-500"
          >
            <div className="absolute inset-[4.06px] overflow-clip rounded-[15.611px] lg:inset-[13px] lg:rounded-[50px] z-10">
              {VIDEO_URL ? (
                <video
                  className="h-full w-full object-cover"
                  controls
                  src={VIDEO_URL}
                  poster="/assets/studentsQ&A/poster.jpg"
                  preload="metadata"
                />
              ) : (
                <button
                  aria-label="Play video"
                  onClick={handleWatch}
                  className="absolute inset-0 z-20"
                >
                  <Image
                    src="/assets/studentsQ&A/poster.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                    fill
                    sizes="(min-width: 1024px) 1470px, 455px"
                  />
                  <Image
                    src="/assets/studentsQ&A/play.svg"
                    alt=""
                    width={150}
                    height={166}
                    className="absolute left-1/2 top-1/2 h-auto w-[47px] -translate-x-1/2 -translate-y-1/2 lg:w-[150px]"
                  />
                </button>
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute -top-[4.58%] right-[-17%] w-[25%]">
            <Image
              src="/assets/studentsQ&A/big_worm.svg"
              alt=""
              width={318}
              height={831}
              className="h-auto w-full"
            />
          </div>
          
          <div className="pointer-events-none absolute top-[-18%] left-[-12.5%] w-[58%]">
            <Image
              src="/assets/studentsQ&A/line.svg"
              alt=""
              width={151}
              height={208}
              className="h-auto w-full"
            />
          </div>
          <div className="pointer-events-none absolute top-[89%] left-[-10.7%] hidden w-[15%] lg:block">
            <Image
              src="/assets/studentsQ&A/computer.svg"
              alt=""
              width={179}
              height={154}
              className="h-auto w-full z-0"
            />
          </div>
        </div>

        <button
          onClick={handleWatch}
          className="relative z-10 rounded-[15px] bg-secondary-500 px-5 py-4 dark:bg-primary-500 lg:h-[65px] lg:w-[500px] lg:max-w-full lg:rounded-[20px] lg:px-[50px] lg:py-[20px]"
        >
          <span className="whitespace-nowrap font-consolas text-[14px] font-bold leading-[normal] text-primary-500 dark:text-[#f2fafd] lg:text-[24px]">
            Watch the full video here!
          </span>
        </button>
    </section>
  );
};

export default StudentQA;