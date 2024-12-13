import React from "react";
//@ts-ignore
import styles from "../Home/Home.module.scss";

import { History } from "../../data/History.ts";
import { Chats } from "../../data/Chatss.ts";

const Home = () => {
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
        <div className={styles.messages}>Mes</div>
      </div>
    </div>
  );
};

export default Home;
