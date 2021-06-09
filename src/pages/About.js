import React from "react";
import { Jumbotron } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Jumbotron>
        <h2>About Pockets</h2>
        <h6>Pockets is a colloborative Songs Search website</h6>
        <p>
          First of all, Congratulations if you are seeing this application you
          have got a great taste in music! This is an application to create a
          music community by sharing our discovered songs with each other. If
          each of us share one new song every day we can have a random playlist
          of more then 10 songs every day. With each of us a whole different
          music taste it will be a great place to discover some new music.
        </p>
        <h3>Why I made this?</h3>
        <p>
          Because I wanted to listen to some new songs which I dont even know
          exist and also I can not ask youtube to recommend something like,
          daaru ke baad kya sunu, but I know one of you will have something for
          that time. Also my playlists are kinda getting outdated and repetitive
          so needed something new.
        </p>
        <p>So, Lets have fun!</p>

        <h4>
          Also this is just the first version of application and I will be
          adding alot more functionality to it in upcoming days.
        </h4>
        <p>
          Made with <span>&#128156;</span> by Ashish Jain
        </p>
      </Jumbotron>
    </>
  );
};

export default About;