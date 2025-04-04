'use client';

import React, { useState, useEffect } from 'react';
import { YouTubeEmbed } from '@next/third-parties/google';
import styles from './YouTubeVideo.module.css';

interface YouTubeVideoProps {
  videoId: string;
  width?: number;
  height?: number;
  className?: string;
  params?: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  videoId,
  width = 720,
  height = 400,
  className = '',
  params = 'rel=0',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const timeoutId = setTimeout(() => {
      if (isLoading) {
        setHasError(true);
        setIsLoading(false);
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [isLoading]);

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    // Force a re-render by using a different key
    const timestamp = new Date().getTime();
    setKey(`youtube-${videoId}-${timestamp}`);
  };

  const [key, setKey] = useState(`youtube-${videoId}`);

  if (!isClient || hasError) {
    return (
      <div className={`${styles.container} ${className}`} style={{ height }}>
        <div className={styles.fallback}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='48'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className={styles.icon}
          >
            <path d='M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z'></path>
            <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02'></polygon>
          </svg>
          <p className={styles.fallbackText}>
            {hasError ? 'Unable to load video' : 'Loading video...'}
          </p>
          {hasError && (
            <button onClick={handleRetry} className={styles.retryButton}>
              Try Again
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${className}`}>
      {isLoading && (
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
        </div>
      )}
      <div className={styles.videoWrapper}>
        <YouTubeEmbed
          key={key}
          videoid={videoId}
          height={height}
          width={width}
          params={params}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default YouTubeVideo;
