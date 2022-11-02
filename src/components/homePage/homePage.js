import React from "react";
import "./homePage.css";
import Hc from "../../assets/hc.png";
import stm from "../../assets/stm.png";
import staw from "../../assets/staw.png"
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Home-top">
        <div className="Home-top-child">
          <div className="Home-top-text-container">
            <span className="Home-top-big-text">
              Instant collaborations for remote teams
            </span>
            <span className="Home-top-small-text">
              All in one for your remote team chats, collaboration and track
              projects
            </span>
            <span style={{ height: "50px" }}></span>
            <span className="Home-top-input-container">
              <button className="Home-top-input-button" onClick={() => {navigate('/posts')}}>Start</button>
            </span>
          </div>
        </div>
      </div>
      <div className="Home-center">
        <div className="first">
          <div className="first-in">
            <div className="text1">Your Hub for teamwork</div>
            <div className="text2">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <span className="text3">Learn more</span>
          </div>
        </div>
        <div className="second">
          <img src={Hc} />
        </div>
      </div>
      <div className="HomeThirdPlace">
        <div className="stage1">
          <img src={stm} />
        </div>
        <div className="stage2">
          <div className="first-in">
            <div className="text1">Simple Task Management</div>
            <div className="text2">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <span className="text3">Learn more</span>
          </div>
        </div>
      </div>
      <div className="HomeThirdPlace">
        <div className="stage2">
          <div className="first-in">
            <div className="text11">Scheduling that actually works</div>
            <div className="text2">
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </div>
            <span className="text3">Learn more</span>
          </div>
        </div>
        <div className="stage1">
          <img src={staw} />
        </div>
      </div>
    </div>
  );
};
