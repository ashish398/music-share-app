import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

const Protected = ({ children }) => {
  const { user } = UserAuth();
  const isLoggedIn = user && user.accessToken ? true : false;
  console.log("user", user.displayName);
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};
export default Protected;
