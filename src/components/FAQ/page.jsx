import Image from "next/image";
import FaqAccordion from "./FaqAccordion";
import FaqCarousel from "./FaqCarousel";

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-4 py-16"
    >
      {/* Titre + décoration */}
      <div className="relative inline-block mb-6 md:mb-10">
        <Image
          src="/assets/lines_decoration_light.svg"
          alt=""
          width={174}
          height={40}
          className="absolute -top-3 left-19 w-[90px] h-[20px] md:-top-6 md:left-27 md:w-[174px] md:h-[40px] dark:hidden"
        />
        <Image
          src="/assets/lines_decoration_dark.svg"
          alt=""
          width={174}
          height={40}
          className="absolute -top-3 left-19 w-[90px] h-[20px] md:-top-6 md:left-27 md:w-[174px] md:h-[40px] hidden dark:block"
        />

        <Image
          src="/assets/still_wondering_light.svg"
          alt="Still wondering?"
          width={248}
          height={51}
          className="w-[150px] h-[31px] md:w-[248px] md:h-[51px] dark:hidden"
        />
        <Image
          src="/assets/still_wondering_dark.svg"
          alt="Still wondering?"
          width={248}
          height={51}
          className="w-[150px] h-[31px] md:w-[248px] md:h-[51px] hidden dark:block"
        />
      </div>

      {/* Desktop : accordéon */}
      <div className="hidden md:block">
        <FaqAccordion />
      </div>

      {/* Mobile : carrousel de cartes */}
      <div className="md:hidden">
        <FaqCarousel />
      </div>

      {/* Décoration bas droite */}
      <div className="flex flex-row-reverse justify-start md:flex-row md:justify-end items-center gap-1 mt-4">
        <Image
          src="/assets/Vector_light.svg"
          alt=""
          width={14}
          height={14}
          className="w-[10px] h-[10px] md:w-[14px] md:h-[14px] dark:hidden"
        />
        <Image
          src="/assets/Vector_dark.svg"
          alt=""
          width={14}
          height={14}
          className="w-[10px] h-[10px] md:w-[14px] md:h-[14px] hidden dark:block"
        />
        <Image
          src="/assets/Vector_Group_light.svg"
          alt=""
          width={76}
          height={13}
          className="w-[50px] h-[9px] md:w-[76px] md:h-[13px] dark:hidden"
        />
        <Image
          src="/assets/Vector_Group_dark.svg"
          alt=""
          width={76}
          height={13}
          className="w-[50px] h-[9px] md:w-[76px] md:h-[13px] hidden dark:block"
        />
      </div>
    </section>
  );
}
