import React, { useState, useEffect } from "react";
import "./App.css";
import { MessageForm } from "./Components/MessageForm/MessageForm";
import { MessageList } from "./Components/MessageList/MessageList";
import { v4 as uuidv4 } from "uuid";
import { ChatList } from "./Components/ChatList/ChatList";

const App = () => {
  const INITTAL_MESSAGES = {
    id: uuidv4(),
    author: "бот",
    text: "Добро пожаловать в чат",
  };
  const BOT_MESSAGES = {
    id: uuidv4(),
    author: "бот",
    text: "Спасибо что оставили сообщение!",
  };
  const [messageList, setMessageList] = useState([INITTAL_MESSAGES]);

  useEffect(() => {
    let timer;
    if (messageList[messageList.length - 1].author !== "бот")
      timer = setTimeout(() => {
        setMessageList([...messageList, BOT_MESSAGES]);
      }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [messageList]);

  return (
    <div className="App">
      <ChatList />
      <div className="Message_Field">
        <header className="App-header">Чат</header>
        <main className="App-main">
          <MessageList messageList={messageList} />
          <MessageForm
            messageList={messageList}
            setMessageList={setMessageList}
          />
        </main>
      </div>
    </div>
  );
};

export default App;
