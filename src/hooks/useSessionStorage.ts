import { useEffect, useState } from "react";

export const useSessionStorage: <T>(
  key: string,
  defaultValue: T
) => [T, (v: T) => void] = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const json = sessionStorage.getItem(key);
    if (!json) return;
    setValue(JSON.parse(json));
  }, []);

  useEffect(() => sessionStorage.setItem(key, JSON.stringify(value)), [value]);

  return [value, setValue];
};
