import React, { useEffect, useRef, useState } from "react";
import Gif from "../images/Wax-staxx.mp4";
import Logo from '../images/Wax-staxx.svg'

function Header() {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  // play the video logo when the website loads 
  useEffect(() => {
    if(videoRef.current.currentTime === 0){
      videoRef.current.play()
    } else {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }

    return () => {
      if (videoRef.current) {
          videoRef.current.pause();
      }
    };
  }, []);
  
  // once the video is done i want to switch the logo to the svg logo 
  useEffect(() => {
    const handleVideoEnded = () => {
      setVideoEnded(true);
    };

    // I need to Add event listener for video ending 
    videoRef.current.addEventListener("ended", handleVideoEnded);

    return () => {
      // Remove my event listener when component unmounts
      videoRef.current.removeEventListener("ended", handleVideoEnded);
    };
  }, []);

  return (
    <div className="header-container">
      {/* i need to Conditionally render video or SVG logo based on videoEnded state */}
      {videoEnded ? (
        <img className="logo" src={Logo} alt="Logo" />
      ) : (
        <video
          className="logo"
          height="500"
          muted
          ref={videoRef}
        >
          <source src={Gif} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export default Header;