import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllGroups } from "../ApiHandler";

const Groups = () => {
  const [groupsList, setGroupsList] = useState([]);
  const navigate = useNavigate();

  const fetchGroupsHandler = useCallback(async () => {
    const response = await fetchAllGroups();
    const groupsData = await response.json();
    const loadedGroups = [];
    for (const key in groupsData) {
      const groupData = { ...groupsData[key], key: key };
      loadedGroups.push(groupData);
    }
    setGroupsList(loadedGroups);
  }, []);

  const onGroupPressHandler = (_event, data) => {
    navigate(`/groups/${data.key}`);
  };

  const onCreatePressHandler = (_event) => {
    navigate(`/groups/new`);
  };

  useEffect(() => {
    fetchGroupsHandler();
  }, [fetchGroupsHandler]);

  return (
    <div>
      <h1>Groups</h1>
      <button onClick={onCreatePressHandler}>CREATE NEW GROUP</button>
      {groupsList.map((data, _index) => (
        <button onClick={(event) => onGroupPressHandler(event, data)}>
          {data.groupName}
        </button>
      ))}
    </div>
  );
};

export default Groups;
