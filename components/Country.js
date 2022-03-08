import Image from "next/image";
import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Country({ country }) {
  const dark = useTheme();
  return (
    <>
      <div className="h-36 relative">
        <Image src={country.flag} layout="fill" objectFit="cover" />
      </div>
      <div className="px-6 py-7">
        <h1 className="font-bold text-lg">{country.name}</h1>
        <div className="text-sm mt-3 flex flex-col gap-1">
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </>
  );
}
