import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./Context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);

serviceWorkerRegistration.register();
