"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-background text-foreground dark:bg-[#00072A] dark:text-white">

      {/* ================= LEFT DECORATION ================= */}

      {/* Light mode */}
      <div className="absolute bottom-0 left-0 block h-[110px] w-[150px] md:h-[200px] md:w-[272px] dark:hidden">
        <Image
          src="/assets/leftdeco.png"
          alt=""
          fill
          className="pointer-events-none select-none object-contain object-left-bottom"
        />
      </div>

      {/* Dark mode */}
      <div className="absolute bottom-0 left-0 hidden h-[110px] w-[150px] dark:block md:h-[200px] md:w-[272px]">
        <Image
          src="/assets/leftdeco-dark.png"
          alt=""
          fill
          className="pointer-events-none select-none object-contain object-left-bottom"
        />
      </div>


      {/* ================= RIGHT DECORATION ================= */}

      {/* Light mode */}
      <div className="absolute right-0 top-0 block h-[90px] w-[130px] md:bottom-0 md:top-auto md:h-[200px] md:w-[272px] dark:hidden">
        <Image
          src="/assets/rightdeco.png"
          alt=""
          fill
          className="pointer-events-none select-none object-contain object-right-top md:object-right-bottom"
        />
      </div>

      {/* Dark mode */}
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

            {/* Light mode logo */}
            <Image
              src="/assets/ESI101-2026-logo.png"
              alt="ESI.101"
              width={302}
              height={142}
              className="w-[150px] h-auto md:w-[302px] dark:hidden"
            />

            {/* Dark mode logo */}
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

            {/* Instagram */}
            <a
              href="https://www.instagram.com/cse.club/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-[36px] w-[36px] items-center justify-center rounded-lg border-2 border-foreground text-foreground transition hover:bg-foreground hover:text-background dark:border-[#C8ED1F] dark:text-white dark:hover:bg-white dark:hover:text-[#00072A] md:h-[60px] md:w-[58px] md:rounded-2xl"
            >
              <svg
                className="h-[20px] w-[20px] md:h-[37px] md:w-[37px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1.2"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>


            {/* Facebook */}
            <a
              href="https://www.facebook.com/club.scientifique.esi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-[36px] w-[36px] items-center justify-center rounded-lg border-2 border-foreground text-foreground transition hover:bg-foreground hover:text-background dark:border-[#C8ED1F] dark:text-white dark:hover:bg-white dark:hover:text-[#00072A] md:h-[60px] md:w-[58px] md:rounded-2xl"
            >
              <svg
                className="h-[18px] w-[18px] md:h-[46px] md:w-[56px]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M15 3h-2.5C10.6 3 9 4.6 9 6.9V9H6.5v3H9v9h3v-9h2.5l.5-3H12V7.2c0-.7.4-1.2 1.1-1.2H15V3Z" />
              </svg>
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/cse-club"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-[36px] w-[36px] items-center justify-center rounded-lg border-2 border-foreground text-foreground transition hover:bg-foreground hover:text-background dark:border-[#C8ED1F] dark:text-white dark:hover:bg-white dark:hover:text-[#00072A] md:h-[60px] md:w-[58px] md:rounded-2xl"
            >
              <svg
                className="h-[20px] w-[20px] md:h-[36px] md:w-[36px]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="2.5" y="9" width="4" height="12" />
                <circle cx="4.5" cy="4.5" r="2.3" />
                <path d="M10.5 9h3.8v1.8h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9Z" />
              </svg>
            </a>


            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCHgeF6ELJW0Pt1vYoAomCig"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-[36px] w-[36px] items-center justify-center rounded-lg border-2 border-foreground text-foreground transition hover:bg-foreground hover:text-background dark:border-[#C8ED1F] dark:text-white dark:hover:bg-white dark:hover:text-[#00072A] md:h-[60px] md:w-[58px] md:rounded-2xl"
            >
              <svg
                className="h-[20px] w-[20px] md:h-[37px] md:w-[37px]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect
                  x="2"
                  y="5"
                  width="20"
                  height="14"
                  rx="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M10 8.6 15.5 12 10 15.4Z" />
              </svg>
            </a>


            {/* X */}
            <a
              href="https://x.com/CSESI_Club"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex h-[36px] w-[36px] items-center justify-center rounded-lg border-2 border-foreground text-foreground transition hover:bg-foreground hover:text-background dark:border-[#C8ED1F] dark:text-white dark:hover:bg-white dark:hover:text-[#00072A] md:h-[60px] md:w-[58px] md:rounded-2xl"
            >
              <svg
                className="h-[18px] w-[18px] md:h-[32px] md:w-[36px]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H9.08l4.713 6.231 4.45-6.231ZM17.08 19.77h1.833L7.084 4.126H5.117L17.08 19.77Z" />
              </svg>
            </a>

          </div>


          {/* ================= SEPARATOR ================= */}

          <div className="hidden h-[103px] w-px bg-[#112083] dark:bg-[#C8ED1F] md:block" />


          {/* ================= MADE WITH LOVE ================= */}

          <div className="flex flex-col items-center">

            <span className="font-consolas text-[11px] md:text-[15px] font-normal leading-[100%] text-[#00072A] dark:text-white">
              Made with love by
            </span>

            <div className="mt-1 md:mt-2 flex items-center">

              {/* Light mode CSE logo */}
              <Image
                src="/assets/CSE Logo.png"
                alt="CSE"
                width={55}
                height={55}
                className="h-auto w-[36px] md:w-[55px] dark:hidden"
              />

              {/* Dark mode CSE logo */}
              <Image
                src="/assets/CSE Logo-dark.png"
                alt="CSE"
                width={55}
                height={55}
                className="hidden h-auto w-[36px] dark:block md:w-[55px]"
              />

              <div className="flex flex-col font-consolas text-[11px] md:text-[15px] leading-[100%] text-[#00072A] dark:text-white">
                <span className="font-bold">Club</span>
                <span className="font-bold">Scientifique</span>
                <span className="font-bold">de l&apos;ESI</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;