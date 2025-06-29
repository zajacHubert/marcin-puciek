import Gallery from '@/components/Gallery';
import { polaroidsImages } from '@/data/polaroids';
import styles from '@/styles/portfolio-category.module.css';

const PolaroidisPage = () => {
  return (
    <section className={styles.portfolioCategory}>
      <h2 className={styles.title}>Polaroids</h2>
      <Gallery images={polaroidsImages} />
    </section>
  );
};

export default PolaroidisPage;
