import Gallery from '@/components/Gallery';
import { eCommerceImages } from '@/data/e-commerce';
import styles from '@/styles/portfolio-category.module.css';

const eCommerceCategoryPage = () => {
  return (
    <section className={styles.portfolioCategory}>
      <h2 className={styles.title}>e-commerce</h2>
      <Gallery images={eCommerceImages} />
    </section>
  );
};

export default eCommerceCategoryPage
