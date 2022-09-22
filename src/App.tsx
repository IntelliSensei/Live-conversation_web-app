import React, { useEffect, useState } from "react";
import { TextField } from "./components/input";
import { DropDown, IOption, ColorPalette } from "./components/input";
import Panel from "./components/Panel";

interface IValues {
  one?: string;
  two?: string;
}


export default function App() {

  // const [text1, setText1] = useState("");
  // const [text2, setText2] = useState("");
  const [values, setValues] = useState<IValues>({});
  useEffect(() => {
    const strValues = sessionStorage.getItem("values");
    if(strValues){
      const data = JSON.parse(strValues);
      setValues(data);
      return;
    }
    setValues({one:"missing", two:"missing"})
   }, [])

  return (
    <div>
      <TextField
        label="Textfield 1"
        onChange={(nv) => {
          setValues({ ...values, one: nv })
        }}
      />
      <TextField
        label="Textfield 2"
        placeholder="12313"
        onChange={(nv) => {
          setValues({ ...values, two: nv })
        }}
      />
      <button onClick={() => {
        sessionStorage.setItem("values", JSON.stringify(values));

      }}>Send</button>
      <div>
        <p>text 1: {values.one} </p>
        <p>text 2: {values.two} </p>
      </div>
      <Panel />
    </div>
  );
}
