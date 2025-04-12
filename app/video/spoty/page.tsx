import YouTubeVideo from '@/components/YouTubeVideo';
import { advertisements } from '@/data/advertisements';
import styles from '@/styles/video-page.module.css';

const AdvertisementsPage = () => {
  return (
    <section className={styles.videoSection}>
      <h2 className={styles.title}>Reklamy</h2>
      <div className={styles.container}>
        {advertisements.map((advertisement) => (
          <div key={advertisement.id} className={styles.videoBox}>
            <YouTubeVideo id={advertisement.id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvertisementsPage;
