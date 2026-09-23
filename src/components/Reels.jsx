import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
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
  const baseReels = [
    { src: '/assets/ds_1.mp4' },
    { src: '/assets/ds_2.mp4' },
    { src: '/assets/ds_3.mp4' },
    { src: '/assets/ds_4.mp4' },
    { src: '/assets/ds_5.mp4' },
    { src: '/assets/ds_6.mp4' },
    { src: '/assets/ds_7.mp4' },
    { src: '/assets/ds_8.mp4' },
    { src: '/assets/ds_9.mp4' },
  ];

  // Duplicate the array to ensure Swiper always has enough DOM elements to loop continuously
  // without glitching or showing blank spaces on large/ultrawide screens.
  const reels = [...baseReels, ...baseReels, ...baseReels];

  return (
    <section className="reels-section">
      <div className="reels-container">
        <Swiper
          spaceBetween={30}
          slidesPerView={'auto'}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          mousewheel={{ forceToAxis: true }}
          modules={[Mousewheel]}
          className="mySwiper"
        >
          {reels.map((reel, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              <ReelCard videoSrc={reel.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
