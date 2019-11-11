import React from "react";
import "../css/Player.css";

const Player = props => {
  return (
    <div className={`player-block${props.clicked ? "" : " is-invisible"}`}>
      <div className="preserve-ratio">
        <iframe
          title="video player"
          id="ytplayer"
          type="text/html"
          src={props.link}
          frameBorder="0"
        ></iframe>
      </div>
      <button onClick={props.toggle}>Close Player</button>
    </div>
  );
};

export default Player;
