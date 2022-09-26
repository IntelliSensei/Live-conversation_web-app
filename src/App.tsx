import React, { useEffect, useState } from "react";
import { TextField } from "./components/input";
import { DropDown, IOption, ColorPalette } from "./components/input";
import Panel from "./components/Panel";
import { useSessionStorage } from "./hooks";
import { useLocalStorage } from "./hooks/useLocalStorage";
import useWebSocket, { ReadyState } from 'react-use-websocket';

interface IValues {
  one?: string;
  two?: string;
}

export default function App() {
  const [values, setValues] = useLocalStorage<IValues>("myValues", {});
  // const [message, setMessage] = useState("");
  // const [recievedMessage, setRecievedMessage] = useState<string[]>([]);
  // const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:8999");

  useEffect(() => {
    const strValues = sessionStorage.getItem("values");
    if (strValues) {
      const data = JSON.parse(strValues);
      setValues(data);
      return;
    }
    setValues({ one: "missing", two: "missing" });
  }, []);

  // useEffect(() => {
  //   if(!lastMessage) 
  //   return;
  //   setRecievedMessage([lastMessage.data, ...recievedMessage])
  // }, [lastMessage]);



  return (
    <div>
      <Panel />
    </div>
  );
}
