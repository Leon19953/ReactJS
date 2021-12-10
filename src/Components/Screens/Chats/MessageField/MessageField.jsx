import React, { useEffect } from "react";
import faker from "faker";
import { useDispatch, useSelector } from "react-redux";
import { messageListSelector } from "../../../Store/Messages/selectors";
import "./MessageField.css";
import { addMessageAction } from "../../../Store/Messages/action";

export function MessageField({ chatId }) {
  const messages = useSelector(messageListSelector);
  const dispatch = useDispatch();

  return (
    <div className="message-field">
      {messages[chatId]?.map((message) => (
        <div key={message.id} className="message">
          <div className="messageTime">
            <span>{message.author}</span>
            <span>{message.date}</span>
          </div>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
}
