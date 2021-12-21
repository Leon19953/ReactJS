import "./App.css";
import logo from "./logo.svg";

import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";

import { Menu } from "./Components/Menu";

import { ROUTES } from "./Components/Menu/constants.js";
import { persistor, store } from "./Components/Store";
import { Home } from "./Components/Screens/Home";
import { Profile } from "./Components/Screens/Profile";
import { Chats } from "./Components/Screens/Chats";
import { Cats } from "./Components/Screens/Cats";
import { SignIn } from "./Components/Screens/SignIn";
import { SignUp } from "./Components/Screens/SignUp";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="logo" alt="logo" />
          </header>
          <main className="App-main">
            <Menu />

            <Switch>
              <Route exact path={ROUTES.HOME} render={() => <Home />} />
              <Route exact path={ROUTES.PROFILE} render={() => <Profile />} />
              <Route exact path={ROUTES.CHATS} render={() => <Chats />} />
              <Route exact path={ROUTES.CHAT} render={() => <Chats />} />
              <Route exact path={ROUTES.CATS} render={() => <Cats />} />
              <Route exact path={ROUTES.SIGN_IN} render={() => <SignIn />} />
              <Route exact path={ROUTES.SIGN_UP} render={() => <SignUp />} />

              <Route
                path={ROUTES.NO_CHAT}
                render={() => <h1>Такого чата не существует</h1>}
              />
              <Route
                path={ROUTES.NOT_FOUND}
                render={() => <h1>404 Страница не найдена</h1>}
              />
              <Route>
                <Redirect to={ROUTES.NOT_FOUND}></Redirect>
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
