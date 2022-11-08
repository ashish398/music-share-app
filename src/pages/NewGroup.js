import React, { useState } from "react";
import Button from "../components/UI/Button";
import { Form } from "react-bootstrap";
import { createGroupApiHandler } from "../ApiHandler";

const NewGroup = () => {
  const [groupName, setGroupName] = useState("");

  const inputChangeHandler = (event) => {
    setGroupName(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (groupName === "") {
      console.log("invalid form input");
      setGroupName("");
      return;
    }
    const data = { groupName: groupName };
    createGroupApiHandler(data);
    setGroupName("");
  };

  return (
    <div>
      <h1>Create New Group</h1>
      <div>
        <Form onSubmit={onSubmitHandler}>
          <label htmlFor="groupName">Group Name:</label>
          <input
            id="groupName"
            onChange={inputChangeHandler}
            value={groupName}
            type="text"
          />
          <Button type="submit">Create group</Button>
        </Form>
      </div>
    </div>
  );
};

export default NewGroup;
