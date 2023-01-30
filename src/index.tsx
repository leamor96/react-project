import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./themed-bootstrap.scss";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { IconContext } from "react-icons";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
  {/*   <IconContext.Provider value={{color:'blue',size:'5rem'}}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
  {/*   </IconContext.Provider> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
