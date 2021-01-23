import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#57C2AF",
    },
    secondary: {
      main: "#4475D4",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div className="page-container">
        <div className="content-wrap">
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
