import Pagination from '@/components/Pagination';
import VideoPlayer from '@/components/VideoPlayer';
import YouTubeVideo from '@/components/YouTubeVideo';
import { advertisements } from '@/data/advertisements';
import { customAdvertisements } from '@/data/customAdvertisements';
import styles from '@/styles/video-page.module.css';

const ITEMS_PER_PAGE = 10;

const AdvertisementsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { page = '1' } = await searchParams;
  const totalPages = Math.ceil(
    [...advertisements, ...customAdvertisements].length / ITEMS_PER_PAGE
  );

  const startIndex = (Number(page) - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const videos = [...advertisements, ...customAdvertisements].slice(
    startIndex,
    endIndex
  );

  return (
    <>
      <section className={styles.videoSection}>
        <h2 className={styles.title}>Reklamy</h2>
        <div className={styles.container}>
          {/* {videos.map((advertisement) => (
            <div key={advertisement.id} className={styles.videoBox}>
              <YouTubeVideo id={advertisement.id} />
            </div>
          ))} */}
          {videos.map((video) => {
            if (video.type === 'YT' && 'id' in video) {
              return (
                <div key={video.id} className={styles.videoBox}>
                  <YouTubeVideo id={video.id} />
                </div>
              );
            } else if (video.type === 'CUSTOM' && 'src' in video) {
              return (
                <div key={video.src} className={styles.videoBox}>
                  <VideoPlayer src={video.src} />
                </div>
              );
            }
          })}
        </div>
      </section>
      <section>
        <Pagination totalPages={totalPages} siblingCount={0} />
      </section>
    </>
  );
};

export default AdvertisementsPage;
