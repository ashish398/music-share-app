import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Layout/Header";
import AddSong from "./pages/AddSong";
import SearchSong from "./pages/SearchSong";
import About from "./pages/About";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.App}>
      <Header />
      <div className={classes.main}>
        <Switch>
          <Route path="/" exact>
            <AddSong />
          </Route>
          <Route path="/search" exact>
            <SearchSong />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default App;
