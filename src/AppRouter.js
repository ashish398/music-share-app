import React from "react";
import { Route, Routes } from "react-router-dom";
import AddSong from "./pages/AddSong";
import SignIn from "./pages/SignIn";
import SearchSong from "./pages/SearchSong";
import About from "./pages/About";
import Protected from "./Protected";
import GroupJoin from "./pages/GroupJoin";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<SignIn />} />

      <Route path="/signin" exact element={<SignIn />} />

      <Route path="/about" exact element={<About />} />

      {/* <Route
        path="/join"
        exact
        element={
          <Protected>
            <GroupJoin />
          </Protected>
        }
      /> */}

      <Route
        path="/add"
        exact
        element={
          <Protected>
            <AddSong />
          </Protected>
        }
      />

      <Route
        path="/search"
        exact
        element={
          <Protected>
            <SearchSong />
          </Protected>
        }
      />

      {/* <Route path="*">
              <Redirect to="/" />
            </Route> */}
    </Routes>
  );
};
export default AppRouter;
