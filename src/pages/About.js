import React from "react";
import { Jumbotron } from "react-bootstrap";
import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <Jumbotron className={classes.about}>
        <h2>About Pockets</h2>
        <h6>Pockets is a collaborative Songs Search website.</h6>
        <p>
          First of all, Congratulations if you see this application, you have
          got great taste in music! This is an application to create our very
          own music community by sharing our discovered songs. If each of us
          shares one new piece every day, we can have a random playlist of more
          than ten songs every day. With each of us having a whole different
          music taste, this could be a great place to discover new music.
        </p>
        <h3>Why I made this?</h3>
        <p>
          Because I wanted to listen to some new songs which I don't even know
          exist and also I can not ask youtube to recommend something like,
          daaru ke baad kya sunu, but I know one of you will have something for
          that time. Also, my playlists are getting outdated and repetitive, so
          I needed something new.
        </p>
        <p>So, Let's have fun!</p>

        <h4>
          This is just the first version of the application. I will be adding a
          lot more functionality to it in the upcoming days. Stay tuned!
        </h4>
        <p>
          Made with <span>&#128156;</span> by Ashish Jain
        </p>
      </Jumbotron>
    </>
  );
};

export default About;
