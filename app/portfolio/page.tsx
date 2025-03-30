import Link from 'next/link';
import styles from '../../styles/portfolio-page.module.css';
import Image from 'next/image';
import testImg from '@/public/placeholder.png';

const PortfolioPage = () => {
  return (
    <section className={styles.portfolioSection}>
      <Link href='/portfolio/bielizna-i-homewear'>
        <div className={styles.categoryBox}>
          <h2 className={styles.subtitle}>Bielizna i homewear</h2>
          <Image src={testImg} alt='underwear and homewear category' />
        </div>
      </Link>

      <Link href='/portfolio/moda-i-elegancja'>
        <div className={styles.categoryBox}>
          <h2 className={styles.subtitle}>
            Moda i elegancja - garnitury, klasyczne stylizacje
          </h2>
          <Image src={testImg} alt='fashion and style category' />
        </div>
      </Link>

      <Link href='/portfolio/lifestyle'>
        <div className={styles.categoryBox}>
          <h2 className={styles.subtitle}>
            Lifestyle - casual, codzienne sceny
          </h2>
          <Image src={testImg} alt='lifestyle category' />
        </div>
      </Link>
    </section>
  );
};

export default PortfolioPage;
