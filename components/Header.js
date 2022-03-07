import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
  const [dark, toggleTheme] = useTheme();
  return (
    <div
      className={`${
        dark ? "text-dark-text bg-dark-el" : "text-light-text bg-light-el"
      } flex justify-between px-4 py-7 font-bold items-center shadow-cust-shadow z-10 relative`}
    >
      <h1 className="text-sm">Where in the world?</h1>
      <div onClick={toggleTheme} className="flex items-center cursor-pointer">
        <span className="mr-2">
          {dark ? (
            <ion-icon name="moon"></ion-icon>
          ) : (
            <ion-icon name="moon-outline"></ion-icon>
          )}
        </span>
        <span className="font-semibold text-[13px]">Dark Mode</span>
      </div>
    </div>
  );
}
