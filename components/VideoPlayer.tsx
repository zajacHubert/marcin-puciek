'use client';

import React, { useState, useRef } from 'react';
import styles from './videoPlayer.module.css';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={styles.playerContainer}>
      {!isPlaying && (
        <div className={styles.overlay} onClick={handlePlay}>
          <div className={styles.youtubeButton}>
            <div className={styles.youtubePlayIcon} />
          </div>
        </div>
      )}
      <video ref={videoRef} className={styles.video} controls={isPlaying}>
        <source src={src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
