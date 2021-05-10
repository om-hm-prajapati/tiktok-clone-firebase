import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import './Video.css';

function Video() {
 const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
    return (
        <div className="video">
            <video  className="video__player"
             loop
            //  controls
            onClick={onVideoPress}
            ref={videoRef}
             src="https://media.chingari.io/uploads/bc88a25c-7da9-4d2e-a149-6a256d703e3b-1620027469271/webpath_bc88a25c-7da9-4d2e-a149-6a256d703e3b-1620027469271.mp4"></video>
            <VideoFooter/>
            <h3>this is video</h3>
        </div>
    )
}

export default Video
