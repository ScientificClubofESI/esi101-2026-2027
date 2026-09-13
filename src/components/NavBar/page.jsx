import React from "react";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

const NabBar = () => {
    const theme = useTheme();
};



const NavBar = () => {
  return (
    <div>
      NavBar
      <ThemeToggle />
    </div>
  );
};

export default NavBar;
