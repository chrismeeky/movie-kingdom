import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/home/Home";
import { GlobalStyles } from "./components/styles/Global";

function App() {
  const theme = {
    colorPrimary: "#39445a",
    colorGray: "#d1d1d1",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
