import React from "react";
import { TextField } from "./components/input";
import { DropDown, IOption, ColorPalette } from "./components/input";
import Panel from "./components/Panel";

const options: IOption[] = [
  { key: "key1", value: "my val 1" },
  { key: "key2", value: "my val 2" },
  { key: "key3", value: "my val 3" },
  { key: "key4", value: "my val 4" },
  { key: "key5", value: "my val 5" },
  { key: "key6", value: "my val 6" },
];

export default function App() {
  return (
    <div>
      <TextField label="test" />
      <TextField
        placeholder="12313"
        onChange={(nv) => {
          console.log("nv", nv);
        }}
      />
      <DropDown
        label="color"
        options={options}
        onChange={(nv) => {
          console.log("dd", nv);
        }}
      />

      <ColorPalette onSelect={console.log}/>
    </div>
  );
}
