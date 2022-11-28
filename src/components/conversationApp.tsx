import { ApolloClient, InMemoryCache } from "@apollo/client";
import { FC, useEffect, useState } from "react";
import { useLoginService } from "../hooks";
import { useConversation } from "../hooks/useConversation";
import { LoginField } from "./login/Login";
import { ITextBubbleInfo, TextBubble } from "./output/TextBubble";
import { Panel } from "./Panel";



export const ConversationApp: FC<any> = ({ }) => {
    const [textBubbleInfo, setTextBubbleInfo] = useState<
        Record<string, () => ITextBubbleInfo>
    >({});
    const { sendConversation, sendJWTConversation, conversations, removeConversations } = useConversation(
        "ws://localhost:8999" // should come from dotenv
    );

    const { isAuthorized, token } = useLoginService()


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
        console.log(conversations);
        

    }, [conversations]);
    return <div>
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
        <Panel onMessageChange={(nv) => {
            if (isAuthorized && token.length > 0) {
                sendJWTConversation(token, nv.message)
            } else {
                sendConversation(nv)
            }
        }} />
        {/* <ListAllUsers /> */}
        <div className="top-bar">
            <LoginField />

        </div>
    </div>
}