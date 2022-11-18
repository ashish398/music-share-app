import React from "react";
import { useParams } from "react-router-dom";

const Group = () => {
  const params = useParams();
  return (
    <div>
      <h1>Group page for group id {params.groupId}</h1>
    </div>
  );
};

export default Group;
