import { YouTubeEmbed } from '@next/third-parties/google';

interface YouTubeVideoProps {
  id: string;
}

const YouTubeVideo = ({ id }: YouTubeVideoProps) => {
  return (
    <div>
      <YouTubeEmbed videoid={id} params='controls=1&width=100%' />
    </div>
  );
};

export default YouTubeVideo;
