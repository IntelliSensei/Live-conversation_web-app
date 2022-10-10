import React, { useEffect, useState } from "react";
import { ITextBubbleInfo, TextBubble } from "./components/output/TextBubble";
import { Panel } from "./components/Panel";
import { useConversation } from "./hooks/useConversation";

export default function App() {
  const [textBubbleInfo, setTextBubbleInfo] = useState<
    Record<string, () => ITextBubbleInfo>
  >({});
  const { sendConversation, conversations } = useConversation(
    "ws://localhost:8999"
  );


  useEffect(() => {
    for (const key in textBubbleInfo) {
      const cb = textBubbleInfo[key];
      console.log(key, cb());
    }
  }, [conversations]);
 
  return (
    <div>
      {/* <button onClick={() => setC(c + 1)}>add {c}</button> */}
      <div className="test">
        {Object.values(conversations).map((c) => (
          <TextBubble
            {...c}
            getInfo={(cb) =>
              setTextBubbleInfo({ ...textBubbleInfo, [c.id]: cb })
            }
          />
        ))}
      </div>
      <Panel onMessageChange={sendConversation} />
    </div>
  );
}
