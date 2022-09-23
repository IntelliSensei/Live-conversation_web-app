import React, { FC, useEffect, useState } from "react";
import "./css/Panel.css";
import { ColorPicker } from "./input/colorPicker/ColorPicker";
import { TextField } from "./input";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import "./css/GlobalStyles.css";


export interface IDefaultValue {
  alias?: string;
  color?: string;
}
export interface IDefaultValueMsg {
  message?: string;
}

export default function Panel() {

  const [value, setValue] = useState<IDefaultValue>({});
  const [valueMsg, setValueMsg] = useState<IDefaultValueMsg>({});

  useEffect(() => {
    const strValues = sessionStorage.getItem("valuesAliasColor");
    if (strValues) {
      const data = JSON.parse(strValues);
      setValue(data);
      return;
    }
    else {
      // defaults
      setValue({ alias: "Enter Alias", color: "#ffcc00" })
      setValueMsg({ message: "Enter Message" })
    }
  }, [])


  return (
    <div className="panel global-style">
      {/* <FontAwesomeIcon icon={faHome} /> */}
      <ColorPicker
        defaultColor={value.color}
      // onChange={() => {
      //   setValue({ ...value, color: value.color })
      // }}
      />
      <TextField
        placeholder="Alias"
        defaultValue={value.alias}
        onChange={(nval) => {
          setValue({ ...value, alias: nval })
        }}
      />
      <TextField
        placeholder="Message"
        style={{ flexGrow: 2 }}
        defaultValue={valueMsg.message}
        onChange={(nval) => {
          setValueMsg({ ...valueMsg, message: nval })
        }}
      />
      <button onClick={() => {
        sessionStorage.setItem("valuesAliasColor", JSON.stringify(value));
      }}>Add</button>
      <div />
    </div>
  );
}
