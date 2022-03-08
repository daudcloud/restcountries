import React from "react";
import { useTheme, useThemeUpdate } from "../contexts/ThemeContext";

export default function Header() {
  const dark = useTheme();
  const toggleTheme = useThemeUpdate();
  return (
    <div
      className={`${
        dark ? "text-dark-text bg-dark-el" : "text-light-text bg-light-el"
      } relative shadow-cust-shadow z-10`}
    >
      <div className="flex justify-between px-4 py-7  items-center  max-w-[1280px] mx-auto ">
        <h1 className="text-sm md:text-2xl font-bold">Where in the world?</h1>
        <div onClick={toggleTheme} className="flex items-center cursor-pointer">
          <span className="mr-2">
            {dark ? (
              <ion-icon name="moon"></ion-icon>
            ) : (
              <ion-icon name="moon-outline"></ion-icon>
            )}
          </span>
          <span className="font-semibold text-[13px] md:text-[16px]">
            Dark Mode
          </span>
        </div>
      </div>
    </div>
  );
}
