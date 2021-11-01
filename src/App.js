import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Home from "./pages/home/Home";
import { GlobalStyles } from "./components/styles/Global";
import { store } from "./app/store";

function App() {
  const theme = {
    colorPrimary: "#39445a",
    colorGray: "#d1d1d1",
    colorGrayDark: "#8f8d8d",

    breakPoints: {
      largeDesktop: "1100px",
      mediumDesktop: "800px",
      tablet: "650px",
      mobile: "450px",
    },
  };

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
