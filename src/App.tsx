import React, { useEffect, useState } from "react";
import { TextField } from "./components/input";
import { DropDown, IOption, ColorPalette } from "./components/input";
import Panel from "./components/Panel";
import useWebSocket, { ReadyState } from 'react-use-websocket';


const options: IOption[] = [
  { key: "key1", value: "my val 1" },
  { key: "key2", value: "my val 2" },
  { key: "key3", value: "my val 3" },
  { key: "key4", value: "my val 4" },
  { key: "key5", value: "my val 5" },
  { key: "key6", value: "my val 6" },
];

export default function App() {

  const [message, setMessage] = useState("");
  const [recievedMessage, setRecievedMessage] = useState<string[]>([])

  const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:8999");

  useEffect(() => {
    if (!lastMessage)
      return;
    setRecievedMessage([lastMessage.data, ...recievedMessage])
  }, [lastMessage])

  // var sock = new WebSocket("ws://localhost:8999");
  // sock.onmessage = function(event) {  
  // }
  
  return (
    <div>
      <TextField
        placeholder="12313"
        onChange={(nv) => {
          setMessage(nv)
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

      <button onClick={() => sendMessage(message + " " + new Date().toISOString())}>Send Message</button>
      {lastMessage && <div>{lastMessage.data}</div>}
      <hr></hr>
        <div>
          {recievedMessage.map(m => <p>{m}</p>) } 
        </div>
      <Panel />
    </div>
  );
}
