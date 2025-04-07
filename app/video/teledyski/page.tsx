import YouTubeVideo from '@/components/YouTubeVideo';
import { musicVideos } from '@/data/musicVideos';
import styles from '@/styles/video-page.module.css';

const MusicVideoPage = () => {
  return (
    <section className={styles.videoSection}>
      <h2 className={styles.title}>Teledyski</h2>
      <div className={styles.container}>
        {musicVideos.map((video) => (
          <div key={video.id} className={styles.videoBox}>
            <YouTubeVideo id={video.id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicVideoPage;
