"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/cse.club/",
    light: "/assets/instagram-light.svg",
    lightHover: "/assets/instagram-light-hover.svg",
    dark: "/assets/instagram-dark.svg",
    darkHover: "/assets/instagram-dark-hover.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/club.scientifique.esi/",
    light: "/assets/facebook-light.svg",
    lightHover: "/assets/facebook-light-hover.svg",
    dark: "/assets/facebook-dark.svg",
    darkHover: "/assets/facebook-dark-hover.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/cse-club",
    light: "/assets/linkedin-light.svg",
    lightHover: "/assets/linkedin-light-hover.svg",
    dark: "/assets/linkedin-dark.svg",
    darkHover: "/assets/linkedin-dark-hover.svg",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCHgeF6ELJW0Pt1vYoAomCig",
    light: "/assets/youtube-light.svg",
    lightHover: "/assets/youtube-light-hover.svg",
    dark: "/assets/youtube-dark.svg",
    darkHover: "/assets/youtube-dark-hover.svg",
  },
  {
    name: "X",
    href: "https://x.com/CSESI_Club",
    light: "/assets/x-light.svg",
    lightHover: "/assets/x-light-hover.svg",
    dark: "/assets/x-dark.svg",
    darkHover: "/assets/x-dark-hover.svg",
  },
];

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <footer className="relative w-full overflow-hidden bg-background text-foreground dark:bg-[#00072A] dark:text-white">
      {/* ================= LEFT DECORATION ================= */}

      <div className="absolute bottom-0 left-0 block h-[110px] w-[150px] md:h-[200px] md:w-[272px] dark:hidden">
        <Image
          src="/assets/leftdeco.png"
          alt=""
          fill
          className="pointer-events-none select-none object-contain object-left-bottom"
        />
      </div>

      <div className="absolute bottom-0 left-0 hidden h-[110px] w-[150px] dark:block md:h-[200px] md:w-[272px]">
        <Image
          src="/assets/leftdeco-dark.png"
          alt=""
          fill
          className="pointer-events-none select-none object-contain object-left-bottom"
        />
      </div>

      {/* ================= RIGHT DECORATION ================= */}

      <div className="absolute right-0 top-0 block h-[90px] w-[130px] md:bottom-0 md:top-auto md:h-[200px] md:w-[272px] dark:hidden">
        <Image
          src="/assets/rightdeco.png"
          alt=""
          fill
          className="pointer-events-none select-none object-contain object-right-top md:object-right-bottom"
        />
      </div>

      <div className="absolute right-0 top-0 hidden h-[90px] w-[130px] dark:block md:bottom-0 md:top-auto md:h-[200px] md:w-[272px]">
        <Image
          src="/assets/rightdeco-dark.png"
          alt=""
          fill
          className="pointer-events-none select-none object-contain object-right-top md:object-right-bottom"
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[150px] max-w-[1200px] items-center justify-center px-6 py-8">
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
          {/* ================= ESI.101 LOGO ================= */}

          <div className="flex items-center justify-center">
            <Image
              src="/assets/ESI101-2026-logo.png"
              alt="ESI.101"
              width={302}
              height={142}
              className="w-[150px] h-auto md:w-[302px] dark:hidden"
            />

            <Image
              src="/assets/ESI101-2026-logo-dark.png"
              alt="ESI.101"
              width={302}
              height={142}
              className="hidden w-[150px] h-auto dark:block md:w-[302px]"
            />
          </div>

          {/* ================= SEPARATOR ================= */}

          <div className="hidden h-[103px] w-px bg-[#112083] dark:bg-[#C8ED1F] md:block" />

          {/* ================= SOCIAL MEDIA ================= */}

          <div className="flex items-center gap-2 md:gap-10">
            {socialLinks.map((social) => {
              const defaultSrc = isDark ? social.dark : social.light;
              const hoverSrc = isDark ? social.darkHover : social.lightHover;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group relative flex h-[36px] w-[36px] items-center justify-center shrink-0 md:h-[60px] md:w-[60px]"
                >
                  <Image
                    src={defaultSrc}
                    alt={social.name}
                    fill
                    sizes="60px"
                    className="object-contain opacity-100 transition-opacity duration-200 group-hover:opacity-0"
                  />
                  <Image
                    src={hoverSrc}
                    alt={`${social.name} Hover`}
                    fill
                    sizes="60px"
                    className="object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </a>
              );
            })}
          </div>

          {/* ================= SEPARATOR ================= */}

          <div className="hidden h-[103px] w-px bg-[#112083] dark:bg-[#C8ED1F] md:block" />

          {/* ================= MADE WITH LOVE ================= */}

          <div className="flex flex-col items-center">
            <span className="font-consolas text-[14px] font-semibold leading-[100%] text-[#00072A] dark:text-white md:text-[15px]">
              Made with love by
            </span>

            <div className="mt-1 flex items-center md:mt-2">
              <Image
                src="/assets/cse-logo-light.svg"
                alt="CSE"
                width={164}
                height={66}
                className="dark:hidden"
              />

              <Image
                src="/assets/cse-logo-dark.svg"
                alt="CSE"
                width={164}
                height={66}
                className="hidden h-auto dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
