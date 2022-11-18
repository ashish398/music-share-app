import React from "react";
import { Route, Routes } from "react-router-dom";
import AddSong from "./pages/AddSong";
import SignIn from "./pages/SignIn";
import SearchSong from "./pages/SearchSong";
import About from "./pages/About";
import Protected from "./Protected";
import Groups from "./pages/Groups";
import Group from "./pages/Group";
import NewGroup from "./pages/NewGroup";
import Error from "./pages/Error";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<SignIn />} />
      <Route path="/signin" exact element={<SignIn />} />
      <Route path="/about" exact element={<About />} />
      <Route
        path="/groups"
        exact
        element={
          <Protected>
            <Groups />
          </Protected>
        }
      />
      <Route path="groups/:groupId" element={<Group />} />
      <Route path="groups/new" element={<NewGroup />} />
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
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default AppRouter;
