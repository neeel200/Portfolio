import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  // const [dark, setDark] = useState("");
  const [storedValue, setStoredValue] = useLocalStorage("theme", "");
  // console.log(dark);
  return (
    <ThemeContext.Provider value={{ storedValue, setStoredValue }}>
      {children}
    </ThemeContext.Provider>
  );
};
