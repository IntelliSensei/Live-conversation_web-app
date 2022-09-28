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
    sendJsonMessage({ type: "CONVERSATION", ...data });
  }, []);

  const messageGroups = useMemo(() => {
    return {
      initiate: initiateArray,
      conversation: conversationArray,
    };
  }, [initiateArray, conversationArray]);

  return { sendConversation, lastJsonMessage, messageGroups, conversations };
};
