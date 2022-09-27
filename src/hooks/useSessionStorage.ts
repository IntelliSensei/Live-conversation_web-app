import { useEffect, useState } from "react";

export const useSessionStorage = <T>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] => {
  const json = sessionStorage.getItem(key);
  let initVal: null | T = null;
  if (json) initVal = JSON.parse(json);

  const [value, setValue] = useState<T>(initVal || defaultValue);

  useEffect(() => sessionStorage.setItem(key, JSON.stringify(value)), [value]);

  return [value, setValue];
};
