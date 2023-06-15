import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();
  const videoHandler = () => {
    setPlayVideo((prevPlayVideo) => {
      return !prevPlayVideo;
    });
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={videoHandler}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" font-size={30} />
          ) : (
            <BsFillPlayFill color="#fff" font-size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
