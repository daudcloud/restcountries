import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();
const UpdateContext = createContext();

export function useTheme() {
  return [useContext(ThemeContext), useContext(UpdateContext)];
}

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  function toggleTheme() {
    setDark((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={dark}>
      <UpdateContext.Provider value={toggleTheme}>
        {children}
      </UpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
