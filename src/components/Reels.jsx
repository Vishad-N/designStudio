import React, { useRef } from 'react';
import './Reels.css';

const ReelCard = ({ videoSrc }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Browser blocked unmuted playback on hover:', error);
          videoRef.current.muted = true;
          videoRef.current.play();
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  return (
    <div 
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="content">
         <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="reel-video"
         />
      </div>
    </div>
  );
};

export default function Reels() {
  const reels = [
    { src: '/assets/ds_1.mp4' },
    { src: '/assets/ds_2.mp4' },
    { src: '/assets/ds_3.mp4' },
    { src: '/assets/ds_4.mp4' },
    { src: '/assets/ds_5.mp4' },
  ];

  return (
    <section className="reels-section">
      <div className="reels-container">
        {reels.map((reel, index) => (
          <ReelCard key={index} videoSrc={reel.src} />
        ))}
      </div>
    </section>
  );
}
