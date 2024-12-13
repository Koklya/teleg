import React, { useState } from "react";
//@ts-ignore
import styles from "../Home/Home.module.scss";

import { History } from "../../data/History.ts";
import { Chats } from "../../data/Chatss.ts";

interface MessI{
  author: string,
  sendTime: string,
  mess: string,
}

const Mess:MessI ={
  author: '',
  sendTime: '',
  mess: '',
}

const Home = () => {
const [mess, setMess] = useState<MessI>(Mess)  
const [messagesHistory, setMessagesHistory] = useState<MessI[]>([])  

const handleChangeMess = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, d:number) =>{
  const m = event.target.value
  setMess({...mess, mess:m})
}

const sendMess = () => setMessagesHistory([...messagesHistory, mess])
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
                <div className={styles.chatPreview}>
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
        <div className={styles.messagesTest}>
          <input type="text" onChange={(event) => handleChangeMess(event, Date.now())} value={mess.mess}/>
          <button onClick={sendMess}>Отправить</button>
          {messagesHistory.map((e) => e.mess)}
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
