import React, { FC, useEffect, useState } from "react";
import { useLoginService, useSessionStorage } from "../hooks";
import "./css/Panel.css";
import { ColorPicker } from "./input/colorPicker/ColorPicker";
import { TextField } from "./input";
import "./css/GlobalStyles.css";
import { ColorViewer } from "./input/colorPicker/ColorViewer";

export interface IUserConfig {
  alias: string;
  color: string;
}

export interface IWSMessagePKG extends IUserConfig {
  message: string;
}

interface IPanelProps {
  onChange?: (newValue: IWSMessagePKG) => void;
  onMessageChange?: (newValue: IWSMessagePKG) => void;
}

export const Panel: FC<IPanelProps> = ({
  onChange,
  onMessageChange,
}: IPanelProps) => {
  const defaultConfig: IUserConfig = {
    alias: "Alias",
    color: "#008000",
  };

  const [userConfig, setUserConfig] = useSessionStorage<IUserConfig>(
    "userSettings",
    defaultConfig
  );


  const { payload, isAuthorized } = useLoginService()
  const [message, setMessage] = useState("");

  useEffect(() => onChange && onChange({ ...userConfig, message }), [
    message,
    userConfig,
  ]);

  useEffect(() => onMessageChange && onMessageChange({ ...userConfig, message }),
    [message]
  );



  if (isAuthorized && payload) {
    return <div key={"login"} className="panel global-style">
      <ColorViewer
        selectedColor={payload.color}
      />
      <TextField
        placeholder="Alias"
        defaultValue={payload.alias}
        disabled={true}
      />
      <TextField
        placeholder="Message"
        style={{ flexGrow: 2 }}
        onChange={(message) => setMessage(message)}
      />
    </div>
  }

  return (
    <div key={"anonymous"} className="panel global-style">
      <ColorPicker
        defaultColor={userConfig.color}
        onChange={(color) => {
          setUserConfig({ ...userConfig, color });
        }}
      />
      <TextField
        placeholder="Alias"
        defaultValue={userConfig.alias}
        onChange={(alias) => setUserConfig({ ...userConfig, alias })}
      />
      <TextField
        placeholder="Message"
        style={{ flexGrow: 2 }}
        onChange={(message) => setMessage(message)}
      />
      <div />
    </div>
  );
};
