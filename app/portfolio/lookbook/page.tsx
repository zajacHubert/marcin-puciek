import Gallery from '@/components/Gallery';
import { lookbookImages } from '@/data/lookbook';
import styles from '@/styles/portfolio-category.module.css';

const LookbookCategoryPage = () => {
  return (
    <section className={styles.portfolioCategory}>
      <h2 className={styles.title}>Lookbook</h2>
      <Gallery images={lookbookImages} />
    </section>
  );
};

export default LookbookCategoryPage;
