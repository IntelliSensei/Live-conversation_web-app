import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import React, { useEffect, useState } from "react";
import { ITextBubbleInfo, TextBubble } from "./components/output/TextBubble";
import { Panel } from "./components/Panel";
import { useConversation } from "./hooks/useConversation";
import "./components/css/App.css"
import { LoginField } from "./components/login/Login";
import { SignUpField } from "./components/signup/Signup";
import { ListAllUsers } from "./components/listAllUsers";

export default function App() {
  const [textBubbleInfo, setTextBubbleInfo] = useState<
    Record<string, () => ITextBubbleInfo>
  >({});
  const { sendConversation, conversations, removeConversations } = useConversation(
    "ws://localhost:8999"
  );


  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });

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
    <ApolloProvider client={client}>
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
        {/* <ListAllUsers /> */}
        <div className="top-bar">
          <LoginField />
          {/* <SignUpField
            alias="JEsper"
            password="asdasd"
            email="asdasd@mail.com"
          /> */}
        </div>
      </div>
    </ApolloProvider>
  );
}
