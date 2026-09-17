"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "Home", path: "/" },
  { name: "Who's behind Esi 101", path: "#about" },
  { name: "Ask a student", path: "#ask" },
  { name: "Still wondering ?", path: "#faq" },
  { name: "Contact", path: "#contact" },
];

const NavBar = ({ toggleChatbot }) => {
  const [mounted, setMounted] = useState(false);
  const [listToggled, setListToggled] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/assets/logo-light.svg"
      : "/assets/logo-dark.svg";

  return (
    <div className="absolute z-10 sm:left-26 top-14 w-[68%] max-[1213px]:absolute max-[1213px]:top-0 max-[1213px]:mt-5 max-[1213px]:ml-0 max-[1213px]:w-full max-[1213px]:px-4">
      <div
        className={`relative h-16 rounded-[20px] max-[1213px]:h-auto max-[1213px]:rounded-2xl
          max-[1213px]:bg-[var(--navBar)]
          ${listToggled ? "max-[1213px]:rounded-t-2xl max-[1213px]:rounded-b-2xl" : ""}
        `}
      >
        {/* pill background — fills the whole bar, desktop only */}
        <div className="absolute inset-0 bg-[var(--background)]/80 rounded-[20px] z-0 max-[1213px]:hidden" />

        <div className="relative z-10 flex items-center h-full px-5 gap-[49px] text-[var(--foreground)] text-[22px] font-normal opacity-80 max-[1213px]:flex-col max-[1213px]:gap-0 max-[1213px]:px-4 max-[1213px]:py-3">
          <div className="flex items-center justify-between w-full">
            <div className="w-[33%] h-full flex items-center justify-start max-[1213px]:w-auto">
              <img
                src={logoSrc}
                alt="ESI 101 logo"
                className="h-6 w-20 max-[1213px]:h-7 max-[1213px]:w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden min-[1214px]:flex w-[67%] justify-around items-center">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="flex items-center justify-center px-2 py-2 border border-transparent no-underline hover:border-[rgba(158,156,156,0.25)] hover:rounded-xl hover:h-[90%] font-haetten whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Theme Toggle */}
            <div className="hidden min-[1214px]:block">
              <ThemeToggle />
            </div>

            {/* Mobile Controls */}
            <div className="flex min-[1214px]:hidden items-center gap-4">
              <ThemeToggle />
              <button
                type="button"
                aria-label="Toggle Navigation Menu"
                className="flex flex-col justify-center items-center w-6 h-6 gap-1 cursor-pointer bg-transparent border-none p-0"
                onClick={() => setListToggled((prev) => !prev)}
              >
                <div className="h-0.5 w-full rounded-sm bg-[var(--foreground)]" />
                {!listToggled && (
                  <>
                    <div className="h-0.5 w-full rounded-sm bg-[var(--foreground)]" />

                    <div className="h-0.5 w-full rounded-sm bg-[var(--foreground)]" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {listToggled && (
            <div className="min-[1214px]:hidden relative z-10 flex flex-col w-full mt-2 bg-[var(--navBar)] text-[var(--foreground)] rounded-2xl px-4 pb-4 font-medium dark:text-white">
              {links.map((link, index) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setListToggled(false)}
                  className={`w-full py-3 no-underline font-haetten text-lg hover:opacity-70 ${
                    index !== links.length - 1
                      ? "border-b-2 dark:border-white"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
