import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import store from "./stateStore/reduxStore.ts";
import { Provider } from "react-redux";
import MainContext from "./services/MainContext.tsx";
import Root from "./router.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainContext>
        <Root />
      </MainContext>
    </Provider>
  </React.StrictMode>
);
