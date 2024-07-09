import React, { useRef } from "react";
// import college_video from "../assets/";

import collegeAd from "../assets/collegeAd.mp4";
const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
      console.log("hello");
    }
  };
  return (
    <div className="containers">
      <div
        className={`video-player border ${playState ? "" : "hide"}`}
        ref={player}
        onClick={closePlayer}
      >
        <video src={collegeAd} autoPlay muted controls></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
