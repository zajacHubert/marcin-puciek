import Gallery from '@/components/Gallery';
import { underwearImages } from '@/data/underwear';
import styles from '@/styles/portfolio-category.module.css';

const UnderwearCategoryPage = () => {
  return (
    <section className={styles.portfolioCategory}>
      <h2 className={styles.title}>Bielizna</h2>
      <Gallery images={underwearImages} />
    </section>
  );
};

export default UnderwearCategoryPage;
