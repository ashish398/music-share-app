import React, { useRef } from "react";
import classes from "./SongsForm.module.css";
import { Button, Form} from "react-bootstrap";

const SongsForm = (props) => {
  const songInputRef = useRef();
  const artistInputRef = useRef();
  const linkInputRef = useRef();
  const nameInputRef = useRef();
  const tag1InputRef = useRef();
  const tag2InputRef = useRef();
  

  const submitHandler = (event) => {
    event.preventDefault();
    const songData = {
      songName: songInputRef.current.value,
      artistName: artistInputRef.current.value,
      youtubeLink: linkInputRef.current.value,
      name: nameInputRef.current.value,
      tag1: tag1InputRef.current.value,
      tag2: tag2InputRef.current.value,
    };
    props.addSong(songData);
    songInputRef.current.value = "";
    artistInputRef.current.value = "";
    linkInputRef.current.value = "";
    nameInputRef.current.value = "";
    tag1InputRef.current.value = "";
    tag2InputRef.current.value = "";
  };

  return (
    <div className = {classes.card}>
      <Form onSubmit={submitHandler}>
        <div className={classes.nothing}>
          <label htmlFor='song'>Song Name:</label>
          <input type='text' id='song' ref={songInputRef} />
          <label htmlFor='artist'>Artist Name:</label>
          <input type='text' id='artist' ref={artistInputRef} />
        </div>
        <div>
          <label htmlFor='link'>Youtube Link:</label>
          <input type='text' id='link' ref={linkInputRef} />
          <label htmlFor='name'>Your Name:</label>
          <input type='text' id='name' ref={nameInputRef} />
        </div>
        <div>
          <label htmlFor='tag1'>Tag1:</label>
          <input
            type='text'
            id='tag1'
            placeholder='Eg: language/mood/genre'
            ref={tag1InputRef}
          />
          <label htmlFor='tag2'>Tag2:</label>
          <input
            type='text'
            id='tag2'
            placeholder='Eg: language/mood/genre'
            ref={tag2InputRef}
          />
        </div>
        <Button type='submit'>Add the Song</Button>
      </Form>
      
    </div>
  );
};

export default SongsForm;
