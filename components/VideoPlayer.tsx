import React from 'react';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  return (
    <div>
      <video width='640' height='360' controls>
        <source src={src} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoPlayer;
