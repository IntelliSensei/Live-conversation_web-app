import React from "react";
import "./css/Panel.css";
import { ColorPicker } from "./input/colorPicker/ColorPicker";
import { TextField } from "./input";


import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'




export default function Panel() {
  // store selected color and alias on localstorage
  
  return (
    <div className="panel">
      <FontAwesomeIcon icon={faHome} />
      <ColorPicker defaultColor=""/>
      {/* <TextField placeholder="Alias" icons={<FontAwesomeIcon icon={faHome} />}/> */}
      {/* <TextField placeholder="Message" style={{flexGrow:2}} icons={<FontAwesomeIcon icon={faHome} />}/> */}
      <TextField placeholder="Alias" />
      <TextField placeholder="Message" style={{flexGrow:2}} />
      <div/>
    </div>
  );
}
