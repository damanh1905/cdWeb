import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);


reportWebVitals();
