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
      className="p-1 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <Image 
        src={isDark ? "/assets/Sun.svg" : "/assets/Moon.svg"} 
        alt={isDark ? "Sun Icon" : "Moon Icon"} 
        width={24} 
        height={24} 
      />
    </button>
  );
}