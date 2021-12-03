import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import { Router } from "./Router";
import { store } from "./Store";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
