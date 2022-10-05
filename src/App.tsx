import React, { useRef, useState } from "react";
import { TextBubble } from "./components/output/TextBubble";
import { Panel } from "./components/Panel";
import { useConversation } from "./hooks/useConversation";


export default function App() {
  // const [c, setC] = useState(0);

  const { sendConversation, conversations } = useConversation(
    "ws://localhost:8999"
  );

  return (
    <div>
      {/* <button onClick={() => setC(c + 1)}>add {c}</button> */}
      <div className="test">
        {Object.values(conversations).map(c => <TextBubble {...c} />)}
      </div>
      <Panel onMessageChange={sendConversation} />
    </div>
  )
}

