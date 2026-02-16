import Gallery from '@/components/Gallery';
import { elegantImages } from '@/data/elegant';
import styles from '@/styles/portfolio-category.module.css';

const ElegantCategoryPage = () => {
  return (
    <section className={styles.portfolioCategory}>
      <h2 className={styles.title}>garnitury</h2>
      <Gallery images={elegantImages} />
    </section>
  );
};

export default ElegantCategoryPage;
