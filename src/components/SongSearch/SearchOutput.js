import React, { useState, useEffect, useCallback } from "react";
import Button from "../UI/Button";
import { Table, Card } from "react-bootstrap";
import classes from "./SearchOutput.module.css";
import LikeButton from "./LikeButton";

//AIzaSyAonBgL_dJteImasf4i_-7Hb5aU2Rd8x5E

const SearchOutput = () => {
  const [songsList, setSongsList] = useState([]);
  const [reversed, setReversed] = useState(false);

  const fetchSongsHandler = useCallback(async () => {
    const response = await fetch(
      "https://song-app-dae54-default-rtdb.asia-southeast1.firebasedatabase.app/songs.json"
    );
    const songsData = await response.json();
    const loadedSongs = [];
    for (const key in songsData) {
      const songData = { ...songsData[key], key: key };
      loadedSongs.push(songData);
    }
    setSongsList(loadedSongs);
  }, []);

  const reverseHandler = () => {
    let reverseList = [];
    setReversed(!reversed);
    for (const key in songsList) {
      reverseList = [songsList[key], ...reverseList];
    }
    setSongsList(reverseList);
  };

  useEffect(() => {
    fetchSongsHandler();
  }, [fetchSongsHandler]);

  return (
    <>
      <Button onClick={reverseHandler}>
        {reversed ? "Sort by oldest-to-latest" : "Sort by latest-to-oldest"}
      </Button>
      <Table striped bordered hover className={classes.show}>
        <thead>
          <tr>
            <th>#</th>
            <th>Song Name</th>
            <th>Artist Name</th>
            <th>Link</th>
            <th>Submitted by</th>
            <th>Tag1</th>
            <th>Tag2</th>
          </tr>
        </thead>
        <tbody>
          {songsList.map((data, index) => (
            <tr key={`${data.youtubeLink}+${index}`}>
              <td style={{ color: "white" }}>{index + 1}</td>
              <td style={{ color: "#17e9e0" }}>{data.songName}</td>
              <td style={{ color: "#f8d60e" }}>{data.artistName}</td>
              <td>
                <a
                  style={{ color: "#17e9e0", textTransform: "lowercase" }}
                  href={data.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.youtubeLink}
                </a>
              </td>
              <td style={{ color: "#f8d60e" }}>{data.name}</td>
              <td style={{ color: "#faaf92" }}>{data.tag1}</td>
              <td style={{ color: "white" }}>{data.tag2}</td>
              <td style={{ color: "white" }}>
                <LikeButton songData={data} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className={classes.hide}>
        {songsList.map((data, index) => (
          <Card className={classes.cards} key={`${data.youtubeLink}+${index}`}>
            <Card.Body>
              <Card.Title className={classes.cardTitle}>
                {data.songName}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {data.artistName}
              </Card.Subtitle>
              <Card.Text>{data.tag1}</Card.Text>
              <Card.Text>{data.tag2}</Card.Text>
              <Card.Link
                href={data.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Play on Youtube
              </Card.Link>
            </Card.Body>
            {/* <Footer className="blockquote-footer">{data.name}</Footer> */}
          </Card>
        ))}
      </div>
    </>
  );
};

export default SearchOutput;
