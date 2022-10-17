import React, { useEffect } from "react";
import SongsForm from "../components/NewSong/SongsForm";
import { logScreen } from "../firebaseLogger";
import React, { useState } from "react";
import SongsForm from "../components/NewSong/SongsForm";
import ResponseToast from "../components/UI/ResponseToast";

const AddSong = () => {
  const SUCCESSTEXT = "Cheers, your song has been shared";
  const FAILURETEXT = "Oops! unable to share the song";
  const [showToast, setShowToast] = useState(true);
  const [toastText, setToastText] = useState("");

  const addSongHandler = async (songData) => {
    try {
      const response = await fetch(
        "https://song-app-dae54-default-rtdb.asia-southeast1.firebasedatabase.app/songs.json",
        {
          method: "POST",
          body: JSON.stringify(songData),
          "Content-Type": "application/json",
        }
      );
      if (response.status === 200) {
        setToastText(SUCCESSTEXT);
        setShowToast(true);
      }
    } catch (error) {
      setToastText(FAILURETEXT);
      setShowToast(true);
    }
  };
  useEffect(() => {
    logScreen("add_song");
  });
  return (
    <div>
      <SongsForm addSong={addSongHandler} />
      <ResponseToast
        text={toastText}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </div>
  );
};

export default AddSong;
