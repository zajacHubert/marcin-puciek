import Gallery from '@/components/Gallery';
import { otherImages } from '@/data/other';
import styles from '@/styles/portfolio-category.module.css';

const OtherCategoryPage = () => {
  return (
    <section className={styles.portfolioCategory}>
      <h2 className={styles.title}>Pozostałe</h2>
      <Gallery images={otherImages} />
    </section>
  );
};

export default OtherCategoryPage;
