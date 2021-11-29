import { Redirect, useParams } from "react-router";
import { ROUTES } from "../../Router/constants";

export const Chats = ({ chatList }) => {
  const { chatId } = useParams();
  console.log(chatList);
  if (!chatId || !chatList[chatId]) {
    return <Redirect to={ROUTES.NO_CHAT} />;
  }

  return <div>chats page</div>;
};
