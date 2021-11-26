import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const INITTAL_CHATS = [{ name: "", id: uuidv4() }];

export function ChatList() {
  const [chatList] = useState(INITTAL_CHATS);

  return (
    <div className="chat_block">
      {chatList.map((id, name) => (
        <div key={id}></div>
      ))}
      <List
        component="nav"
        aria-label="mailbox folders"
        sx={{ width: 360, height: 600, bgcolor: "" }}
      >
        <ListItem button>
          <ListItemText primary="Chat-1" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Chat-2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chat-3" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Chat-4" />
        </ListItem>
      </List>
    </div>
  );
}
