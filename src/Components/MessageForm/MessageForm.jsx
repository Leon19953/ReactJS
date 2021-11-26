import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function MessageForm({ messageList, setMessageList }) {
  const [messageAuthor, setMessageAuthor] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleAuthorChange = (e) => setMessageAuthor(e.target.value);
  const handleTextChange = (e) => setMessageText(e.target.value);

  const handleAdd = (e) => {
    if (messageAuthor === "" || messageText === "")
      return alert("не заполнены необходимые данные");
    if (messageAuthor === "бот")
      return alert("вы не можете остовлять сообщения от этого имени");
    const newMessage = {
      id: uuidv4(),
      author: messageAuthor,
      text: messageText,
    };
    setMessageAuthor("");
    setMessageText("");
    return setMessageList([...messageList, newMessage]);
  };

  return (
    <form
      className="message-form"
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <TextField
        helperText="Введите ваше имя"
        id="demo-helper-text-misaligned"
        label="Имя"
        value={messageAuthor}
        onChange={handleAuthorChange}
      />
      <TextField
        fullWidth
        label="Сообщение"
        id="fullWidth"
        value={messageText}
        onChange={handleTextChange}
        placeholder="текст сообщения"
      />

      <Button variant="contained" type="submit" onClick={handleAdd} autofocus>
        Отправить
      </Button>
    </form>
  );
}
