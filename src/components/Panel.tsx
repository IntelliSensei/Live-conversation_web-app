import React, { FC, useEffect, useState } from "react";
import "./css/Panel.css";
import { ColorPicker } from "./input/colorPicker/ColorPicker";
import { TextField } from "./input";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import "./css/GlobalStyles.css";

export interface IUserConfig {
  alias: string;
  color: string;
}
export interface IWSMessagePKG {
  alias: string;
  color: string;
  message: string;
}

// {
//   alias: "anonymise",
//   color: "#008000",
// };

export default function Panel() {
  const defaultConfig: IUserConfig = JSON.parse(sessionStorage.getItem("userConfig") ||  '{}')
  console.log(defaultConfig)
  const [userConfig, setUserConfig] = useState<IUserConfig>({
    ...defaultConfig,
  });
  const [msgPkg, setMsgPkg] = useState<IWSMessagePKG>({
    ...defaultConfig,
    message: "",
  });

  useEffect(() => console.log({ msgPkg }), [msgPkg]);
  useEffect(() => setMsgPkg({ ...msgPkg, ...userConfig }), [userConfig]);

  useEffect(() => sessionStorage.setItem("userConfig", JSON.stringify(userConfig)), [userConfig]);

  return (
    <div className="panel global-style">
      {/* <FontAwesomeIcon icon={faHome} /> */}
      <ColorPicker
        defaultColor={defaultConfig.color }
        onChange={(color) => {
          setUserConfig({ ...userConfig, color });
        }}
      />
      <TextField
        placeholder="Alias"
        defaultValue={defaultConfig.alias}
        onChange={(alias) => setUserConfig({ ...userConfig, alias })}
      />
      <TextField
        placeholder="Message"
        style={{ flexGrow: 2 }}
        onChange={(message) => setMsgPkg({ ...msgPkg, message })}
      />
      {/* <button onClick={() => {
        sessionStorage.setItem("valuesAliasColor", JSON.stringify(value));
      }}>Add</button> */}
      <div />
    </div>
  );
}
