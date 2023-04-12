import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Main from "./Main";
import { theme, themeStyled } from "./theme/theme";
import * as StyledComponentTheme from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledComponentTheme.ThemeProvider theme={themeStyled}>
          <Main />
        </StyledComponentTheme.ThemeProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
