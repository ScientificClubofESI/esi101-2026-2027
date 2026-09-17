"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";
import "./navbar.css";

const links = [
  "Home",
  "Who's behind Esi 101",
  "Ask a student",
  "Still wondering ?",
  "Contact",
];

const NavBar = ({ toggleChatbot }) => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [listToggled, toggleList] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
      console.log("the mobile is on:", window.innerWidth < 1200);
    };

    // Set initial value on client mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/assets/logo-light.svg"
      : "/assets/logo-dark.svg";

  return (
    <div className="absolute z-1 left-0 -ml-16 top-14 navbar w-[90%] h-[64px]">
      <div className={listToggled ? "links rounded " : "links"}>
        <div className="logo">
          <img src={logoSrc} alt="ESI 101 logo" />
        </div>

        <div className={listToggled && isMobile ? "toggled" : "links-inner"}>
          {links.map((link, index) => (
            <a className="font-haetten" href={link} key={index}>
              {link}
            </a>
          ))}
        </div>

        <ThemeToggle />

        {mounted && isMobile && (
          <div className="burger" onClick={() => toggleList((prev) => !prev)}>
            {[1, 2, 3].map((item, index) => (
              <div className={`line-${item}`} key={index}></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;