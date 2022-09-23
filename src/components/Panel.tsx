import React, { useEffect, useState } from "react";
import "./css/Panel.css";
import { ColorPicker } from "./input/colorPicker/ColorPicker";
import { TextField } from "./input";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import "./css/GlobalStyles.css";


export interface IDefaultValue {
  defaultAlias?: string;
  defaultColor?: string;
}
export interface IDefaultValueMsg {
  defaultMessage?: string;
}

export default function Panel() {

  const [value, setValue] = useState<IDefaultValue>({});
  const [valueMsg, setValueMsg] = useState<IDefaultValueMsg>({});

  useEffect(() => {
    const strValues = sessionStorage.getItem("values");
    if (strValues) {
      const data = JSON.parse(strValues);
      setValue(data);
      return;
    }
    setValue({ defaultAlias: "Enter Alias", defaultColor: "#ffcc00" })
    setValueMsg({ defaultMessage: "Enter Message" })
  }, [])


  return (
    <div className="panel global-style">
      {/* <FontAwesomeIcon icon={faHome} /> */}
      <ColorPicker
        defaultColor={value.defaultColor}
        onSelect={(nval) => {
          setValue({ ...value, defaultColor: nval })
        }}
      />
      <TextField
        placeholder="Alias"
        defaultValue={value.defaultAlias}
        onChange={(nval) => {
          setValue({ ...value, defaultAlias: nval })
        }}
      />
      <TextField
        placeholder="Message"
        style={{ flexGrow: 2 }}
        defaultValue={valueMsg.defaultMessage}
        onChange={(nval) => {
          setValueMsg({ ...valueMsg, defaultMessage: nval })
        }}
      />
      <button onClick={() => {
        sessionStorage.setItem("valuesAliasColor", JSON.stringify(value));
      }}>Add</button>
      <div />
    </div>
  );
}
