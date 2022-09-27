import React, { useEffect, useState } from "react";
import { TextField } from "./components/input";
import { DropDown, IOption, ColorPalette } from "./components/input";
import { TextBubble } from "./components/output/TextBubble";
import { Panel } from "./components/Panel";
import { useSessionStorage } from "./hooks";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface IValues {
  one?: string;
  two?: string;
}

export default function App() {
  const [values, setValues] = useLocalStorage<IValues>("myValues", {});

  useEffect(() => {
    const strValues = sessionStorage.getItem("values");
    if (strValues) {
      const data = JSON.parse(strValues);
      setValues(data);
      return;
    }
    setValues({ one: "missing", two: "missing" });
  }, []);

  return (
    <div>
      <TextBubble 
      alias="jesper"
      color="red"
      message="test"
      />
      <Panel 
        // onChange={(nv) => console.log("onChange", nv)}
        onMessageChange={(nv) => console.log("onMessageChange", nv)}
      />
    </div>
  );
}
