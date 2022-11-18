import React, { useState } from "react";
import { likeApiHandler } from "../../ApiHandler";
import { UserAuth } from "../../context/AuthContext";

const LikeButton = ({ songData }) => {
  const likeNos = songData && songData.likes ? songData.likes : 0;
  const [likes, setLikes] = useState(likeNos);
  const { user } = UserAuth();

  const isLikedByUser =
    songData?.likedByUsers && songData.likedByUsers.includes(user.email)
      ? true
      : false;
  const [isLiked, setIsLiked] = useState(isLikedByUser);

  const likeUserAdd = (songData) => {
    if (songData.likedByUsers) {
      if (songData.likedByUsers.includes(user.email)) {
        return songData;
      } else {
        const newLikedByUsers = [...songData.likedByUsers, user.email];
        return { ...songData, likedByUsers: newLikedByUsers };
      }
    } else {
      return { ...songData, likedByUsers: [user.email] };
    }
  };

  const likeUserRemove = (songData) => {
    if (songData.likedByUsers) {
      const filteredUsers = songData.likedByUsers.filter(
        (email) => email !== user.email
      );
      return { ...songData, likedByUsers: filteredUsers };
    } else return songData;
  };

  const handleClick = () => {
    let newSongData = { ...songData, likes: likes };
    if (isLiked) {
      setLikes(likes - 1);
      newSongData = { ...songData, likes: likes - 1 };
      newSongData = likeUserRemove(newSongData);
    } else {
      setLikes(likes + 1);
      newSongData = { ...songData, likes: likes + 1 };
      newSongData = likeUserAdd(newSongData);
    }
    setIsLiked(!isLiked);
    likeApiHandler(newSongData);
  };

  return (
    <button onClick={handleClick}>
      <span className="likes-counter">{`Like | ${likes}`}</span>
    </button>
  );
};
export default LikeButton;
