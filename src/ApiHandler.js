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
