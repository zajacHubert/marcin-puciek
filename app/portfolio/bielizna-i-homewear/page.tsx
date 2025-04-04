import Gallery from '@/components/Gallery';
import styles from '@/styles/portfolio-category.module.css';

const UnderwearCategoryPage = () => {
  return (
    <section className={styles.portfolioCategory}>
      <h2 className={styles.title}>Bielizna i homewear</h2>
      <Gallery
        images={[
          { src: '/placeholder.png', title: 'Tytuł 1' },
          { src: '/placeholder.png', title: 'Tytuł 2' },
          { src: '/placeholder.png', title: 'Tytuł 3' },
          { src: '/placeholder.png', title: 'Tytuł 4' },
          { src: '/placeholder.png', title: 'Tytuł 5' },
          { src: '/placeholder.png', title: 'Tytuł 6' },
          { src: '/placeholder.png', title: 'Tytuł 7' },
          { src: '/placeholder.png', title: 'Tytuł 8' },
          { src: '/placeholder.png', title: 'Tytuł 9' },
        ]}
      />
    </section>
  );
};

export default UnderwearCategoryPage;
