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

  // const socket = new WebSocket("ws://localhost:8999")

  // socket.onmessage = (event) => {
  //   console.log(JSON.parse(event.data))
  // }

  return (
    <div>
      <TextBubble
        alias={JSON.stringify(values.one)} // need real values. for example alias = socketResponse.alias
        color={JSON.stringify("red")}
        message={JSON.stringify(values.two)}
      />
      <Panel
        // onChange={(nv) => console.log("onChange", nv)}
        onMessageChange={(nv) => console.log("onMessageChange", nv)}
      />
    </div>
  );
}
