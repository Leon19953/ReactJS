import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const INITTAL_CHATS = [{ name: "Chat 1", id: uuidv4() }];

export function ChatList() {
  const [chatList] = useState(INITTAL_CHATS);

  return (
    <div className="chat_block">
      <List
        component="nav"
        aria-label="mailbox folders"
        sx={{ width: 360, height: 600, bgcolor: "" }}
      >
        {chatList.map((chat, index) => (
          <ListItem button key={index}>
            <ListItemText primary={chat.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
