import Gallery from '@/components/Gallery';
import { lifestyleImages } from '@/data/lifestyle';
import styles from '@/styles/portfolio-category.module.css';

const LifestyleCategoryPage = () => {
  return (
    <section className={styles.portfolioCategory}>
      <h2 className={styles.title}>lifestyle</h2>
      <Gallery images={lifestyleImages} />
    </section>
  );
};

export default LifestyleCategoryPage;
