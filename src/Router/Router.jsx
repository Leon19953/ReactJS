import React from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import { ChatList } from "../Components/ChatList";
import { Chats } from "../Screens/Chats";
import { NoChats } from "../Screens/Chats/NoChats";

import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";

import { ROUTES } from "./constants";

export const Router = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.PROFILE}>Profile</Link>
        </li>
        <li>
          <Link to={ROUTES.CHATS}>Chats</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.PROFILE}>
          <Profile />
        </Route>
        <Route exact path={ROUTES.CHATS}>
          <Chats chatList={ChatList} />
        </Route>
        <Route exact path={ROUTES.NO_CHAT}>
          <NoChats chatList={ChatList} />
        </Route>
        <Route path={ROUTES.NOT_FOUND}>Not found 404</Route>
        <Route>
          <Redirect to={ROUTES.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
