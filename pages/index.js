import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useRouter } from "next/router";
import Country from "../components/Country";
import Link from "next/link";

export default function Home(props) {
  const dark = useTheme();
  const [inputValue, setInput] = useState("");
  const [openRegion, setOpenRegion] = useState(false);
  const router = useRouter();
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const changeRegion = (e) => {
    if (e.target.innerText === "All") return router.push("/");
    router.push(`/?region=${e.target.innerText.toLowerCase()}`);
  };

  useEffect(() => {
    setInput("");
  }, [router.query.region]);

  console.log(props);
  return (
    <div
      title="REST Countries app"
      className={`${dark ? "bg-dark-bg" : "bg-light-bg"} pt-6 min-h-screen`}
    >
      <div className="px-4 max-w-[1280px] mx-auto">
        {/* handler section */}
        <div className="flex flex-col gap-10 md:flex-row justify-between md:pt-6">
          <div
            className={`${
              dark
                ? "bg-dark-el text-dark-text"
                : "bg-light-el text-light-input"
            } flex items-center px-7 py-4 gap-7  shadow-cust-shadow rounded-md md:w-[400px]  md:text-[1.3em]`}
          >
            <ion-icon name="search"></ion-icon>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInput(e.target.value)}
              className="outline-none placeholder-slate-300 text-xs md:text-[.65em] w-full bg-transparent"
              placeholder="Search for a country..."
            />
          </div>
          <div
            className={`${
              dark ? "bg-dark-el text-dark-text" : "bg-light-el text-light-text"
            } shadow-cust-shadow text-xs md:text-[.8em] w-fit flex items-center gap-16 px-5 py-4 cursor-pointer rounded-md relative`}
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
        <div className="px-6 sm:px-4 md:px-0 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {props?.countries.map((c) => (
            <Link href={`/country/${c.name.toLowerCase().replace(" ", "-")}`}>
              <div
                className={`${
                  c.name.toLowerCase().includes(inputValue) ? "block" : "hidden"
                } ${
                  dark
                    ? "bg-dark-el text-dark-text"
                    : "bg-light-el text-light-text"
                } shadow-cust-shadow w-full rounded-md overflow-hidden mx-auto cursor-pointer`}
                key={c.name}
              >
                <Country country={c} />
              </div>
            </Link>
          ))}
        </div>
      </div>
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
