import Gallery from '@/components/Gallery';
import { sportImages } from '@/data/sport';
import styles from '@/styles/portfolio-category.module.css';

const WorkCategoryPage = () => {
  return (
    <section className={styles.portfolioCategory}>
      <h2 className={styles.title}>Sport i turystyka</h2>
      <Gallery images={sportImages} />
    </section>
  );
};

export default WorkCategoryPage;
