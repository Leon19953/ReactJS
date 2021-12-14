import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";
import { middleware } from "../Middlewares";
import { catReducer } from "./Cat/reducer";
import { chatsReducer } from "./Chats/reducer";
import { messagesReducer } from "./Messages/reducer";
import { profileReducer } from "./Profile/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
  profile: profileReducer,
  cat: catReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(middleware, thunk))
);

export const persistor = persistStore(store);
