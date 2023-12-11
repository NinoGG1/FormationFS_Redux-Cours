import React from "react";
import { createRoot } from "react-dom/client"; // Import de createRoot
import App from "./App";
import "./styles/index.scss";

// REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { getPosts } from "./actions/post.action";
import { getUser } from "./actions/user.action";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

store.dispatch(getPosts());
store.dispatch(getUser());

// Utilisation de createRoot pour le rendu
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
