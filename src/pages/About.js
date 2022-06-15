import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/me.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Arjun Aggarwal</div>
            <div className="brief_description">
              Hey! I'm from the <strong>DC area</strong> and I am a rising
              sophomore at the <strong>University of Maryland</strong>. I'm
              double majoring in CS and Math.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
