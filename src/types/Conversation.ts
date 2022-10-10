export enum ConversationType {
  INITIATE = "INITIATE",
  CONVERSATION = "CONVERSATION",
}

export interface IConversationPackage {
  type: ConversationType;
  id: string;
}

export interface IConversationMessage extends IConversationPackage {
  alias: string;
  color: string;
  message: string;
}

export interface IConversationInit extends IConversationPackage {}
