import React, { useEffect } from "react";
import SongsForm from "../components/NewSong/SongsForm";
import { logScreen } from "../firebaseLogger";

const AddSong = () => {
  const addSongHandler = async (songData) => {
    const response = await fetch(
      "https://song-app-dae54-default-rtdb.asia-southeast1.firebasedatabase.app/songs.json",
      {
        method: "POST",
        body: JSON.stringify(songData),
        "Content-Type": "application/json",
      }
    );
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    logScreen("add_song");
  });
  return (
    <div>
      <SongsForm addSong={addSongHandler} />
    </div>
  );
};

export default AddSong;
