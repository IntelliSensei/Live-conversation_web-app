import React, { useEffect, useState } from "react";
import { ITextBubbleInfo, TextBubble } from "./components/output/TextBubble";
import { Panel } from "./components/Panel";
import { useConversation } from "./hooks/useConversation";
import "./components/css/App.css"

export default function App() {
  const [textBubbleInfo, setTextBubbleInfo] = useState<
    Record<string, () => ITextBubbleInfo>
  >({});
  const { sendConversation, conversations, removeConversations } = useConversation(
    "ws://localhost:8999"
  );


  useEffect(() => {
    if (Object.values(conversations).length < 1) return;

    for (const key in textBubbleInfo) {
      const bubbleInfo = textBubbleInfo[key]();
      if (bubbleInfo.timeToLive < -2) {
        removeConversations(key)
        delete textBubbleInfo[key];
        setTextBubbleInfo(textBubbleInfo)
      }
    }

  }, [conversations]);

  return (
    <div>
      <div className="bubble-container">
        {Object.values(conversations).map((c) => (
          <TextBubble
            {...c}
            key={c.id}
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
