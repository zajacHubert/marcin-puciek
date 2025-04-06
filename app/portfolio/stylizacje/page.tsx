import Gallery from '@/components/Gallery';
import { stylingImages } from '@/data/styling';
import styles from '@/styles/portfolio-category.module.css';

const StylingCategoryPage = () => {
  return (
    <section className={styles.portfolioCategory}>
      <h2 className={styles.title}>Stylizacje</h2>
      <Gallery images={stylingImages} />
    </section>
  );
};

export default StylingCategoryPage;
