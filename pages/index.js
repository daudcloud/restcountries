import Header from "../components/Header";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useRouter } from "next/router";

export default function Home(props) {
  const [dark, toggleTheme] = useTheme();
  const [inputValue, setInput] = useState("");
  const [openRegion, setOpenRegion] = useState(false);
  const router = useRouter();
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const changeRegion = (e) => {
    if (e.target.innerText === "All") return router.push("/");
    router.push(`/?region=${e.target.innerText.toLowerCase()}`);
  };
  console.log(props);
  return (
    <div
      title="REST Countries app"
      className={`${dark ? "bg-dark-bg" : "bg-light-bg"} pt-6 min-h-screen`}
    >
      {/* handler section */}
      <div className="flex flex-col px-5 gap-10">
        <div
          className={`${
            dark ? "bg-dark-el text-dark-text" : "bg-light-el text-light-input"
          } flex items-center px-7 py-4 gap-7  shadow-cust-shadow rounded-md`}
        >
          <ion-icon name="search"></ion-icon>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInput(e.target.value)}
            className="outline-none placeholder-slate-300 text-xs w-full bg-transparent"
            placeholder="Search for a country..."
          />
        </div>
        <div
          className={`${
            dark ? "bg-dark-el text-dark-text" : "bg-light-el text-light-text"
          } shadow-cust-shadow text-xs w-fit flex items-center gap-16 px-5 py-4 cursor-pointer rounded-md relative`}
          onClick={() => setOpenRegion((prev) => !prev)}
        >
          <span className="">Filter by Region</span>
          <ion-icon name="chevron-down"></ion-icon>
          <div
            className={`${dark ? "bg-dark-el" : "bg-light-el"} ${
              openRegion ? "scale-y-100" : "scale-y-0"
            } list-none absolute top-full transform translate-y-1 left-0 right-0 rounded-md shadow-cust-shadow py-4 scale transition-all origin-top z-20`}
          >
            {regions.map((region) => (
              <li
                className={`${
                  dark ? "hover:bg-dark-hover" : "hover:bg-light-hover"
                } transform px-5 py-[3px] `}
                onClick={changeRegion}
                key={region}
              >
                {region}
              </li>
            ))}
          </div>
        </div>
      </div>
      {/* end of handler section */}
      {props?.countries.map((c) => (
        <div
          className={`${
            c.name.toLowerCase().includes(inputValue) ? "block" : "hidden"
          }`}
        >
          {c.name}
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const region = context.query.region || "all";
  const url = "https://restcountries.com/v2/all";

  const res = await fetch(url);
  let data = await res.json();

  if (region !== "all") {
    data = data.filter((d) => d.region.toLowerCase() === region);
  }

  return {
    props: {
      countries: data,
    },
  };
}
