import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@mui/material/styles";
import { masterTheme } from "util/theame";
import { BrowserRouter } from "react-router-dom";

import { setCurrentUser, logout } from "app/slices/userSlice";
import { store } from "app/store";
import { Provider } from "react-redux";
import { jwtLcGet } from "util/functions";
try {
  if (jwtLcGet()) {
    store.dispatch(setCurrentUser(jwtLcGet()));
  }
} catch (error) {
  store.dispatch(logout({}));
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={masterTheme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
