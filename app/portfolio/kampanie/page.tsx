import Gallery from '@/components/Gallery';
import { kampanieImages } from '@/data/kampanie';

import styles from '@/styles/portfolio-category.module.css';

const kampanieCategoryPage = () => {
  return (
    <section className={styles.portfolioCategory}>
      <h2 className={styles.title}>Kampanie</h2>
      <Gallery images={kampanieImages} />
    </section>
  );
};

export default kampanieCategoryPage;
