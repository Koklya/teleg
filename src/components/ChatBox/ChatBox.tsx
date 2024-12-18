import React from "react";

interface SoloMessageDataI {
  message: string;
  date: string;
}

export interface AllChatsI {
  title: string;
  avatar: string;
  chatHistory: SoloMessageDataI[];
}

interface Props {
  allChats: AllChatsI[];
  currUser: string;
}

const ChatBox = ({ allChats, currUser }: Props) => {
  const getChat = allChats.filter((e) => e.title === currUser);
  return <div className="">{getChat[0].title}</div>;
};

export default ChatBox;
