import React, { useEffect } from "react";
import useWebSocket from "react-use-websocket";
import { TextBubble } from "./components/output/TextBubble";
import { Panel } from "./components/Panel";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface IValues {
  one?: string;
  two?: string;
}

export default function App() {
  const socketUrl = "ws://localhost:8999";


  const { sendJsonMessage } = useWebSocket(socketUrl)



  return (
    <div>
      {/* <TextBubble
        alias={JSON.stringify(values.one)} // need real values. for example alias = socketResponse.alias
        color={JSON.stringify("red")}
        message={JSON.stringify(values.two)}
      /> */}
      <Panel
        // onChange={(nv) => console.log("onChange", nv)}
        onMessageChange={(nv) => {
          const sendObject = {...nv, Atype: "CONVERSATION"}
          console.log(sendObject)
          sendJsonMessage(sendObject)
        }}
      />
    </div>
  );
}
