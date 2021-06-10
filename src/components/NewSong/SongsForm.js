import React from "react";
import classes from "./SongsForm.module.css";
import Button from "../UI/Button";
import { Form } from "react-bootstrap";
import useInput from "../../hooks/use-input";

//Total inputs = 6

const isNotEmpty = (value) => value.trim() !== "";
const noCheck = (value) => true;

const SongsForm = (props) => {
  const {
    input: inputSong,
    hasError: inputSongHasError,
    inputBlurHandler: inputSongBlurHandler,
    inputChangeHandler: inputSongChangeHandler,
    inputIsValid: inputSongIsValid,
    reset: resetSong,
  } = useInput(isNotEmpty);

  const {
    input: inputArtist,
    hasError: inputArtistHasError,
    inputBlurHandler: inputArtistBlurHandler,
    inputChangeHandler: inputArtistChangeHandler,
    inputIsValid: inputArtistIsValid,
    reset: resetArtist,
  } = useInput(noCheck);

  const {
    input: inputLink,
    hasError: inputLinkHasError,
    inputBlurHandler: inputLinkBlurHandler,
    inputChangeHandler: inputLinkChangeHandler,
    inputIsValid: inputLinkIsValid,
    reset: resetLink,
  } = useInput(isNotEmpty);
  //

  const {
    input: inputName,
    hasError: inputNameHasError,
    inputBlurHandler: inputNameBlurHandler,
    inputChangeHandler: inputNameChangeHandler,
    inputIsValid: inputNameIsValid,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    input: inputTag1,
    hasError: inputTag1HasError,
    inputBlurHandler: inputTag1BlurHandler,
    inputChangeHandler: inputTag1ChangeHandler,
    inputIsValid: inputTag1IsValid,
    reset: resetTag1,
  } = useInput(isNotEmpty);

  const {
    input: inputTag2,
    hasError: inputTag2HasError,
    inputBlurHandler: inputTag2BlurHandler,
    inputChangeHandler: inputTag2ChangeHandler,
    inputIsValid: inputTag2IsValid,
    reset: resetTag2,
  } = useInput(noCheck);

  let formIsValid = false;

  if (
    inputSongIsValid &&
    inputLinkIsValid &&
    inputNameIsValid &&
    inputTag1IsValid &&
    inputArtistIsValid &&
    inputTag2IsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    inputSongBlurHandler();
    inputLinkBlurHandler();
    inputNameBlurHandler();
    inputTag1BlurHandler();
    const songData = {
      songName: inputSong,
      artistName: inputArtist,
      youtubeLink: inputLink,
      name: inputName,
      tag1: inputTag1,
      tag2: inputTag2,
    };
    if (!formIsValid) {
      console.log("invalid form inputs");
      return;
    }
    props.addSong(songData);
    resetSong();
    resetTag1();
    resetArtist();
    resetLink();
    resetTag2();
    resetName();
  };

  return (
    <div className={classes.card}>
      <Form onSubmit={submitHandler} className={classes.addsongform}>
        <label htmlFor='inputSong'>Song Name</label>
        <input
          id='inputSong'
          onChange={inputSongChangeHandler}
          value={inputSong}
          onBlur={inputSongBlurHandler}
          type='text'
        />
        {inputSongHasError && <p>Enter a valid song name</p>}
        <label htmlFor='inputArtist'>Artist Name</label>
        <input
          id='inputArtist'
          onChange={inputArtistChangeHandler}
          value={inputArtist}
          onBlur={inputArtistBlurHandler}
          type='text'
        />
        {inputArtistHasError && <p>Enter a valid artist name</p>}

        <label htmlFor='inputLink'>Youtube Link</label>
        <input
          id='inputLink'
          onChange={inputLinkChangeHandler}
          value={inputLink}
          onBlur={inputLinkBlurHandler}
          type='url'
        />
        {inputLinkHasError && <p>Enter a valid Link</p>}
        <label htmlFor='inputName'>Your Name</label>
        <input
          id='inputName'
          onChange={inputNameChangeHandler}
          value={inputName}
          onBlur={inputNameBlurHandler}
          type='text'
        />
        {inputNameHasError && <p>Enter a valid Name</p>}

        <label htmlFor='inputTag1'>Tag1</label>
        <input
          id='inputTag1'
          onChange={inputTag1ChangeHandler}
          value={inputTag1}
          onBlur={inputTag1BlurHandler}
          placeholder='Eg: language/mood/genre'
          type='text'
        />
        {inputTag1HasError && <p>Enter a valid Tag</p>}
        <label htmlFor='inputTag2'>Tag2</label>
        <input
          id='inputTag2'
          onChange={inputTag2ChangeHandler}
          value={inputTag2}
          onBlur={inputTag2BlurHandler}
          placeholder='Eg: language/mood/genre'
          type='text'
        />
        {inputTag2HasError && <p>Enter a valid Tag</p>}

        <Button type='submit' classname={classes.custombutton}>
          Add the Song
        </Button>
      </Form>
    </div>
  );
};

export default SongsForm;
