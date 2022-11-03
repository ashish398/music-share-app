import React from "react";
import Header from "./components/Layout/Header";
import classes from "./App.module.css";
import { AuthContextProvider } from "./context/AuthContext";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <AuthContextProvider>
      <div className={classes.App}>
        <Header />
        <div className={classes.main}>
          <AppRouter />
        </div>
      </div>
    </AuthContextProvider>
  );
};
export default App;
