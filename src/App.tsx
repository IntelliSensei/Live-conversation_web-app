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

  useEffect(() => {
    const strValues = sessionStorage.getItem("values");
    if (strValues) {
      const data = JSON.parse(strValues);
      setValues(data);
      return;
    }
    setValues({ one: "missing", two: "missing" });
  }, []);


  const [message, setMessage] = useState("");
  const [recievedMessage, setRecievedMessage] = useState<string[]>([])

  const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:8999");

  useEffect(() => {
    if (!lastMessage)
      return;
    setRecievedMessage([lastMessage.data, ...recievedMessage])
  }, [lastMessage])

  return (
    <div>
      <TextField
        label="Textfield 1"
        onChange={(nv) => {
          setValues({ ...values, one: nv });
        }}
      />
      <TextField
        label="Textfield 2"
        placeholder="12313"
        onChange={(nv) => {
          setValues({ ...values, two: nv });
        }}
      />
      <button>Send</button>
      <div>
        <p>text 1: {values.one} </p>
        <p>text 2: {values.two} </p>
      </div>

      <button onClick={() => sendMessage(message)}>Send Message</button>
      {lastMessage && <div>{lastMessage.data}</div>}
      <hr></hr>
        <div>
          {recievedMessage.map(m => <p>{m}</p>) } 
        </div>
      <Panel />
    </div>
  );
}
