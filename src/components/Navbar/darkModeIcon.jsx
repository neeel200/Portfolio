import styles from "./Navbar.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import  { useEffect, useContext } from "react";

export const DarkModeIcon = () => {

  const { storedValue, setStoredValue } = useContext(ThemeContext);
  

  useEffect(() => {
    if (storedValue === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", ""); 
    }
  }, [storedValue]);
  return (
    <>
      <input
        type="checkbox"
        id="darkmode-toggle"
        onChange={() => {
          !storedValue ? setStoredValue("dark") : setStoredValue("")
        }}
      />
      <label htmlFor="darkmode-toggle">
        <svg
          className={styles.moon}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          className={styles.sun}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" stroke="#1C274C" stroke-width="1.5" />
          <path
            d="M12 2V4"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M12 20V22"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M4 12L2 12"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M22 12L20 12"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M19.7778 4.22266L17.5558 6.25424"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M4.22217 4.22266L6.44418 6.25424"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M6.44434 17.5557L4.22211 19.7779"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M19.7778 19.7773L17.5558 17.5551"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </label>
    </>
  );
};
