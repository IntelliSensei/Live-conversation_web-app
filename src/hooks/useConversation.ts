import { useCallback, useEffect, useMemo, useState } from "react";
import useWebSocket from "react-use-websocket";
import { IWSMessagePKG } from "../components/Panel";
import {
  IConversationInit,
  IConversationMessage,
  IConversationPackage,
  ConversationType,
} from "../types/Conversation";

export const useConversation = (socketUrl: string) => {
  const [messageArray, setMessageArray] = useState<IConversationPackage[]>([]);
  const [conversationArray, setConversationArray] = useState<
    IConversationMessage[]
  >([]);
  const [initiateArray, setInitiateArray] = useState<IConversationInit[]>([]);

  const [conversations, setConversations] = useState<
    Record<string, IConversationMessage>
  >({});

  const { sendJsonMessage, lastJsonMessage } = useWebSocket(socketUrl);

  useEffect(() => {
    if (!lastJsonMessage) return;
    setMessageArray([lastJsonMessage as IConversationPackage, ...messageArray]);

    switch (lastJsonMessage.type) {
      case ConversationType.INITIATE:
        setInitiateArray([
          lastJsonMessage as IConversationInit,
          ...initiateArray,
        ]);
        break;
      case ConversationType.CONVERSATION:
        const message = lastJsonMessage as IConversationMessage;
        setConversationArray([message, ...conversationArray]);
        const { id } = message;
        setConversations({
          ...conversations,
          [id]: message,
        });
        break;
    }
  }, [lastJsonMessage]);

  const sendConversation = useCallback((data: IWSMessagePKG) => {
    // if (isAuthorized && payload) {
    //   sendJsonMessage({ type: "CONVERSATION_JWT", ...payload, message: data.message })
    sendJsonMessage({ type: "CONVERSATION", ...data });
  }, []);

  const sendJWTConversation = useCallback((token: string, message: string) => {
    sendJsonMessage({ type: "CONVERSATION_JWT", token, message })
  }, []);

  const removeConversations = useCallback((id: string) => {
    if (!(id in conversations)) return;
    delete conversations[id];
    setConversations(conversations);
  }, []);


  const messageGroups = useMemo(() => {
    return {
      initiate: initiateArray,
      conversation: conversationArray,
    };
  }, [initiateArray, conversationArray]);

  return { sendConversation, sendJWTConversation, lastJsonMessage, messageGroups, conversations, removeConversations };
};
