import { ADD_MESSAGE_ACTION, DELETE_MESSAGE_ACTION } from "./constants.js";

import faker from "faker";

export const addMessageAction = ({ chatId, message, AUTHOR }) => ({
  type: ADD_MESSAGE_ACTION,
  payload: { chatId, message, AUTHOR },
});

export const deleteMessageAction = ({ deleteChat }) => ({
  type: DELETE_MESSAGE_ACTION,
  payload: { deleteChat },
});

export const addMessageWithThunk = (payload) => (dispatch, getState) => {
  dispatch(addMessageAction(payload));
  if (payload.message !== "BOT") {
    let timer;
    timer = setTimeout(() => {
      dispatch(
        addMessageAction({
          chatId: payload.chatId,
          AUTHOR: "BOT",
          message: faker.lorem.sentence(),
        })
      );
    }, 1300);
    return () => {
      clearTimeout(timer);
    };
  }
};
