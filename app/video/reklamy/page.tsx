import { YouTubeEmbed } from '@next/third-parties/google';
import React from 'react';

const AdvertisementsPage = () => {
  return (
    <section>
      <h2>Reklamy</h2>
      <div>
        <div>
          <YouTubeEmbed videoid='bM4xWww5yag' params='controls=1&width=100%' />
        </div>
      </div>
    </section>
  );
};

export default AdvertisementsPage;
