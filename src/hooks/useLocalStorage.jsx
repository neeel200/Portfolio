import { useEffect, useState } from "react";

export const useLocalStorage = (key, initValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initValue;
    } catch (error) {
      console.log(error);
    }
  });
  console.log(storedValue)
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
