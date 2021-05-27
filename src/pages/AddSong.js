import React from "react";
import SongsForm from "../components/NewSong/SongsForm";

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
    console.log(data)
  };
  return (
    <div>
      <SongsForm addSong={addSongHandler} />
    </div>
  );
};

export default AddSong;
