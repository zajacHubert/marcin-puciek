import Gallery from '@/components/Gallery';
import { commerceImages } from '@/data/commerce';
import styles from '@/styles/portfolio-category.module.css';

const CommerceCategoryPage = () => {
  return (
    <section className={styles.portfolioCategory}>
      <h2 className={styles.title}>Commerce</h2>
      <Gallery images={commerceImages} />
    </section>
  );
};

export default CommerceCategoryPage;
