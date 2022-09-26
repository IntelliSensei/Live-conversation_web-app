import { useEffect, useState } from "react";

export const useLocalStorage: <T>(
  key: string,
  defaultValue: T
) => [T, (v: T) => void] = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const json = localStorage.getItem(key);
    if (!json) return;
    setValue(JSON.parse(json));
  }, []);

  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [value]);

  return [value, setValue];
};
