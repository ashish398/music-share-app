import React, { useState } from "react";
import Button from "../components/UI/Button";
import { Form } from "react-bootstrap";

const GroupJoin = () => {
  const [groupId, setGroupId] = useState("");

  const inputChangeHandler = (event) => {
    setGroupId(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (groupId === "") {
      console.log("invalid form input");
      setGroupId("");
      return;
    }
    const data = { groupId: groupId };
    try {
      const response = await fetch("postUrl", {
        method: "POST",
        body: JSON.stringify(data),
        "Content-Type": "application/json",
      });
    } catch (error) {
      console.log(error);
    }
    setGroupId("");
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <label htmlFor="inputSong">Group id:</label>
        <input
          id="groupId"
          onChange={inputChangeHandler}
          value={groupId}
          type="text"
        />
        <Button type="submit">Join the group</Button>
      </Form>
    </div>
  );
};

export default GroupJoin;
