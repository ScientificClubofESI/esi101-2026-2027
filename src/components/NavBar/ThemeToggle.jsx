"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-6 h-6" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button 
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-md hover:border-[1px] hover:border-[rgba(158, 156, 156, 0.25)] dark:hover:border-gray-600 cursor-pointer"
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <Image 
        src={isDark ? "/assets/Moon.svg" : "/assets/Sun.svg"} 
        alt={isDark ? "Moon Icon" : "Sun Icon"} 
        width={24} 
        height={24} 
      />
    </button>
  );
}