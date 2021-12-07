import React, { Fragment, useState } from "react";
import "./ChatList.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { chatListSelector } from "../../../Store/Chats/selectors";
import { deleteChatAction } from "../../../Store/Chats/action";
import { deleteMessageAction } from "../../../Store/Messages/action";

export function ChatList({ chatId }) {
  const chats = useSelector(chatListSelector);
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
  };

  const deleteChat = () => {
    dispatch(deleteChatAction({ chatId }));
  };

  return (
    <List
      className="chatList"
      sx={{
        width: "100%",
        bgcolor: "whitesmoke",
        paddingLeft: "30px",
        boxSizing: "border-box",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {chats.map((chat) => {
        return (
          <Link
            to={`/chats/${chat.id}`}
            key={chat.id}
            className={"linkToChatList"}
          >
            <ListItemButton
              style={{
                width: "inherit",
              }}
            >
              <Avatar alt={chat.name} src={chat.avatar} />
              <ListItemText primary={chat.name} />
            </ListItemButton>
            <IconButton
              id="iconButton"
              aria-label="delete"
              onClick={() => {
                const deleteChat = chat.id;
                dispatch(deleteChatAction({ deleteChat }));
                dispatch(deleteMessageAction({ deleteChat }));
              }}
            >
              <DeleteIcon className={"deleteChatIcon"} />
            </IconButton>
          </Link>
        );
      })}

      <ListItemButton onClick={handleClick} style={{ flexGrow: "inherit" }}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Архив" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Избранное" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
