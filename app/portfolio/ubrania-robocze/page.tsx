import Gallery from '@/components/Gallery';
import { workImages } from '@/data/work';
import styles from '@/styles/portfolio-category.module.css';

const WorkCategoryPage = () => {
  return (
    <section className={styles.portfolioCategory}>
      <h2 className={styles.title}>ubrania robocze</h2>
      <Gallery images={workImages} />
    </section>
  );
};

export default WorkCategoryPage;
