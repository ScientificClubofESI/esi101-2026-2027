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
  const [isMobile, setIsMobile] = useState(false);
  const [listToggled , toggleList] = useState(false); 
   const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
      console.log("the mobile is on:", window.innerWidth < 1200);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className= {listToggled? "links rounded " : "links"}>
        <div className="logo">
          <img src={resolvedTheme === "dark" ? "/assets/logo-light.svg" :"/assets/logo-dark.svg" }alt="ESI 101 logo" />
        </div>

       

        <div className={listToggled&&isMobile ? "toggled" : "links-inner"} >
          {links.map((link, index) => (
            <a className="font-haetten" href={link} key={index}>
              {link}

            </a>
          ))}
        </div>

        <ThemeToggle />
         {isMobile && (
          <div className="burger" onClick={()=>toggleList(prev => !prev)}>
            {[1, 2, 3].map((item, index) => (
              <div className={item} key={index}></div>
            ))}
          </div>
        )}
      </div>

      <div
        className="chatbot"
        onClick={() => toggleChatbot(true)}
      >
        <div>
          <p className="font-haetten">Chat with Cissou</p>
          <img src="/assets/cissouBtn.svg" alt="Chat with Cissou" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;