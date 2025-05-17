import Pagination from '@/components/Pagination';
// import VideoPlayer from '@/components/VideoPlayer';
import YouTubeVideo from '@/components/YouTubeVideo';
import { advertisements } from '@/data/advertisements';
// import { customAdvertisements } from '@/data/customAdvertisements';
import styles from '@/styles/video-page.module.css';

interface SearchParams {
  searchParams: {
    page?: string;
  };
}

const ITEMS_PER_PAGE = 10;

const AdvertisementsPage = ({ searchParams }: SearchParams) => {
  const page = parseInt(searchParams.page ?? '1', 10);
  const totalPages = Math.ceil(advertisements.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const videos = advertisements.slice(startIndex, endIndex);
  return (
    <>
      <section className={styles.videoSection}>
        <h2 className={styles.title}>Reklamy</h2>
        {/* {customAdvertisements.map((video) => (
          <VideoPlayer src={video.src} key={video.src} />
        ))} */}
        <div className={styles.container}>
          {videos.map((advertisement) => (
            <div key={advertisement.id} className={styles.videoBox}>
              <YouTubeVideo id={advertisement.id} />
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

export default AdvertisementsPage;
