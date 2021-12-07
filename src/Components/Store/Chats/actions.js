import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants";

export const addChatAction = ({ newChat }) => ({
  type: ADD_CHAT_ACTION,
  payload: { newChat },
});

export const deleteChatAction = ({ chatId }) => ({
  type: DELETE_CHAT_ACTION,
  payload: { chatId },
});
