export const likeApiHandler = async (songData) => {
  console.log("song data api handler", songData);
  try {
    const response = await fetch(
      `https://song-app-dae54-default-rtdb.asia-southeast1.firebasedatabase.app/songs/${songData.key}.json`,
      {
        method: "PUT",
        body: JSON.stringify(songData),
        "Content-Type": "application/json",
      }
    );
    if (response.status === 200) {
      console.log("request success");
    }
  } catch (error) {
    console.log("request error", error);
  }
};

export const fetchAllGroups = async () => {
  let response = {};
  try {
    response = await fetch(
      "https://song-app-dae54-default-rtdb.asia-southeast1.firebasedatabase.app/groups.json"
    );
    if (response.status === 200) {
      console.log("request success");
    }
  } catch (error) {
    console.log("request error", error);
  }
  return response;
};

export const fetchGroupData = async (groupId) => {
  let response = {};
  try {
    response = await fetch(
      `https://song-app-dae54-default-rtdb.asia-southeast1.firebasedatabase.app/groups/${groupId}.json`
    );
    if (response.status === 200) {
      console.log("request success");
    }
  } catch (error) {
    console.log("request error", error);
  }
  return response;
};

export const createGroupApiHandler = async (groupData) => {
  try {
    const response = await fetch(
      `https://song-app-dae54-default-rtdb.asia-southeast1.firebasedatabase.app/groups.json`,
      {
        method: "POST",
        body: JSON.stringify(groupData),
        "Content-Type": "application/json",
      }
    );
    if (response.status === 200) {
      console.log("request success");
    }
  } catch (error) {
    console.log("request error", error);
  }
};
