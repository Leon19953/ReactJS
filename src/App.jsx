import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState("");

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const addMessage = (message) => {
    setMessageList([...messageList, message]);
  };

  const sendMessage = () => {
    addMessage({ text: text, author: "Me" });
  };

  return (
    <div className="container form">
      {messageList.map((item, index) => (
        <div key={`${item.id}-${index}`}>{item.text}</div>
      ))}
      <form action="">
        <input value={text} onchange={onChangeText} />
        <button onClick={sendMessage}>Отправить!</button>
      </form>
    </div>
  );
};

export default App;
