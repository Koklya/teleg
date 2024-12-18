import React, { useState } from "react";
//@ts-ignore
import styles from "../Home/Home.module.scss";

import ChatBox from "../../components/ChatBox/ChatBox.tsx";

import { History } from "../../data/History.ts";
import { Chats } from "../../data/Chatss.ts";

interface messageDataI {
  author: string;
  date: DateI;
  messageText: string;
}

interface DateI {
  month: string;
  day: string;
  hours: string;
  mins: string;
  sec: string;
}

type userNames = "Alex" | "Oleg" | "Ivan";

const Home = () => {
  const messageShell: messageDataI = {
    author: "",
    date: {
      month: "",
      day: "",
      hours: "",
      mins: "",
      sec: "",
    },
    messageText: "",
  };

  const [messageData, setMessageData] = useState<messageDataI>(messageShell);
  const [messageHistory, setMessageHistory] = useState<messageDataI[]>([]);
  const [currentChatWithUser, setCurrentChatWithUser] =
    useState<string>("Alex");

  const updateMessageData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const d = new Date();
    const qurrDate = {
      month: `${d.getMonth()}`,
      day: `${d.getDate()}`,
      hours: `${d.getHours()}`,
      mins: `${d.getMinutes()}`,
      sec: `${d.getSeconds()}`,
    };
    setMessageData({
      ...messageData,
      messageText: event.target.value,
      date: qurrDate,
    });
  };

  const sendMessage = () => {
    setMessageHistory([...messageHistory, messageData]);
  };

  const changeCurrUserChatWith = (n: string) => {
    setCurrentChatWithUser(n);
    console.log(n);
  };

  return (
    <div className={styles.chat}>
      <div className={styles.columns}>
        <div className={styles.list}>
          <div className={styles.menus}>
            <div className={styles.menu}>
              <div className={styles.burger}>
                <img
                  src="https://www.svgrepo.com/show/489710/burger-menu.svg"
                  alt=""
                />
              </div>
              <div className={styles.search}>
                <input className={styles.Input} type="text" />
                <img
                  src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                  alt=""
                />
              </div>
              <div className={styles.imageStatus}></div>
            </div>
            <div className={styles.historys}>
              {History.map((h) => {
                return (
                  <div className={styles.history}>
                    <div className={styles.historyAvatar}>
                      <img src={h.avatar} alt="" />
                    </div>
                    <div className={styles.historyName}>{h.name}</div>
                  </div>
                );
              })}
            </div>
            <div className={styles.sections}>3</div>
          </div>
          <hr />
          <div className={styles.chats}>
            {Chats.map((c) => {
              return (
                <div
                  className={styles.chatPreview}
                  onClick={() => changeCurrUserChatWith(c.title)}
                >
                  <div className={styles.chatAvatar}>
                    <img src={c.avatar} alt="" />
                  </div>
                  <div className={styles.chatName}>{c.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.messages}>
          <div className={styles.messagesHeader}></div>
          <div className={styles.messagesBox}>
            <ChatBox allChats={Chats} currUser={currentChatWithUser} />
          </div>
          <div className={styles.messagesSendMenu}>
            <input
              type="text"
              onChange={updateMessageData}
              value={messageData.messageText}
              placeholder="Message"
            />
            <button onClick={sendMessage}>
              <img
                src="https://i.pinimg.com/originals/55/a2/63/55a2637e98653d89fd4dd5742932c5f5.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
