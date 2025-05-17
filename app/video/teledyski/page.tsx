import YouTubeVideo from '@/components/YouTubeVideo';
import Pagination from '@/components/Pagination';
import { musicVideos } from '@/data/musicVideos';
import styles from '@/styles/video-page.module.css';

const ITEMS_PER_PAGE = 10;

const MusicVideoPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { page = '1' } = await searchParams;
  const totalPages = Math.ceil(musicVideos.length / ITEMS_PER_PAGE);

  const startIndex = (Number(page) - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const videos = musicVideos.slice(startIndex, endIndex);

  return (
    <>
      <section className={styles.videoSection}>
        <h2 className={styles.title}>Teledyski</h2>
        <div className={styles.container}>
          {videos.map((video) => (
            <div key={video.id} className={styles.videoBox}>
              <YouTubeVideo id={video.id} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <Pagination totalPages={totalPages} siblingCount={0} />
      </section>
    </>
  );
};

export default MusicVideoPage;
