import React from "react";
import Alias from "./Alias";
import MsgCard from "./MsgCard";
import "./css/Panel.css";
import { ColorPicker } from "./input/colorPicker/ColorPicker";
import { TextField } from "./input";

// Add colour picker + alias + message (incl send button)
// add states to colour + alias, add on change to message

export default function Panel() {
  
  return (
    <div className="panel">
      <ColorPicker />
      <TextField placeholder="Alias" />
      <TextField placeholder="Message" style={{flexGrow:2}} />
      <div/>
    </div>
  );
}
