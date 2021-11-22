import React, { useState, useEffect, useCallback } from "react";
import Button from "../UI/Button";
import { Table, Card } from "react-bootstrap";
import classes from "./SearchOutput.module.css";

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
      loadedSongs.push(songsData[key]);
    }
    setSongsList(loadedSongs);
  }, []);

  useEffect(() => {
    fetchSongsHandler();
  }, [fetchSongsHandler]);


  const reverseHandler=() => {
    let reverseList = [];
    setReversed(!reversed);
    for (const key in songsList){
        reverseList=[songsList[key],...reverseList]
    }
    setSongsList(reverseList);
  }

  return (
    <>
      <Button onClick={reverseHandler}>
         {reversed?'Sort by oldest-to-latest':'Sort by latest-to-oldest'}
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
            <tr key={data.youtubeLink}>
              <td>{index + 1}</td>
              <td>{data.songName}</td>
              <td>{data.artistName}</td>
              <td>
                <a
                  style={{ color: "#17e9e0", textTransform: "lowercase" }}
                  href={data.youtubeLink}
                >
                  {data.youtubeLink}
                </a>
              </td>
              <td>{data.name}</td>
              <td>{data.tag1}</td>
              <td>{data.tag2}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className={classes.hide}>
        {songsList.map((data) => (
          <Card className={classes.cards}>
            <Card.Body>
              <Card.Title className={classes.cardTitle}>
                {data.songName}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {data.artistName}
              </Card.Subtitle>
              <Card.Text>{data.tag1}</Card.Text>
              <Card.Text>{data.tag2}</Card.Text>
              <Card.Link href={data.youtubeLink}>Play on Youtube</Card.Link>
            </Card.Body>
            <footer className="blockquote-footer">{data.name}</footer>
          </Card>
        ))}
      </div>
    </>
  );
};

export default SearchOutput;
