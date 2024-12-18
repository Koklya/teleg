import { AllChatsI } from "../components/ChatBox/ChatBox.tsx";

export const Chats: AllChatsI[] = [
  {
    title: "Alex",
    avatar:
      "https://i-enlisted.cdn.gaijin.net/original/3X/1/d/1d5c49bacaf307e34cab73cf4ae69f122130425b.jpeg",
    chatHistory: [{ message: "Hello from Alex!", date: "18.12.2024" }],
  },
  {
    title: "Oleg",
    avatar:
      "https://avatars.mds.yandex.net/get-shedevrum/11511289/cc2855ebcbb411eea6ebbaaee90618f0/orig",
    chatHistory: [{ message: "Hello from Oleg!", date: "18.12.2024" }],
  },
  {
    title: "Ivan",
    avatar:
      "https://masterpiecer-images.s3.yandex.net/1c82a984908311ee9daa3abd0be4d755:upscaled",
    chatHistory: [{ message: "Hello from Ivan!", date: "18.12.2024" }],
  },
];
