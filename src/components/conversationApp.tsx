import { FC, useEffect, useState } from "react";
import { useLoginService } from "../hooks";
import { useConversation } from "../hooks/useConversation";
import { environment } from "../util/env";
import { LoginField } from "./login/Login";
import { ITextBubbleInfo, TextBubble } from "./output/TextBubble";
import { Panel } from "./Panel";

export const ConversationApp: FC<any> = () => {
  const [textBubbleInfo, setTextBubbleInfo] = useState<
    Record<string, () => ITextBubbleInfo>
  >({});

  const { protocol, host } = window.location;
  const wsPath = environment.WS_PATH_REL
    ? `${protocol.replace("http", "ws")}//${host}${environment.WEBSOCKET}`
    : environment.WEBSOCKET;

  const {
    sendConversation,
    sendJWTConversation,
    conversations,
    removeConversations,
  } = useConversation(wsPath);

  const { isAuthorized, token } = useLoginService();

  useEffect(() => {
    if (Object.values(conversations).length < 1) return;

    for (const key in textBubbleInfo) {
      const bubbleInfo = textBubbleInfo[key]();
      if (bubbleInfo.timeToLive < -2) {
        removeConversations(key);
        delete textBubbleInfo[key];
        setTextBubbleInfo(textBubbleInfo);
      }
    }
    console.log(conversations);
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
      <Panel
        onMessageChange={(nv) => {
          if (isAuthorized && token.length > 0) {
            sendJWTConversation(token, nv.message);
          } else {
            sendConversation(nv);
          }
        }}
      />
      <div className="top-bar">
        <LoginField />
      </div>
    </div>
  );
};
