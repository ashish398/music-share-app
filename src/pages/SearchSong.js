import React, { useEffect }  from "react";
import SearchOutput from "../components/SongSearch/SearchOutput";
import { logScreen } from "../firebaseLogger";

const SearchSong = () => {
  useEffect(() => {
    logScreen("search_song");
  });
  return (
    <div>
      <SearchOutput />
    </div>
  );
};

export default SearchSong;
