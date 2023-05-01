import React from "react";
import Links from './Links';

function About({user}) {
  const{links, bio} = user
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio? bio:null }</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin={links.linkedin} github={links.github}/>
    </div>
  );
}

export default About;
