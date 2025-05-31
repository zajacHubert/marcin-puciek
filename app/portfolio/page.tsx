import Link from 'next/link';
import styles from '../../styles/portfolio-page.module.css';
import Image from 'next/image';
import underwearImg from '@/public/images/portfolio/underwear/img1.jpg';
import commerceImg from '@/public/images/portfolio/commerce/img1.jpg';
import elegantImg from '@/public/images/portfolio/elegant/img1.jpg';
import lifestyleImg from '@/public/images/portfolio/lifestyle/img8.jpg';
import lookbookImg from '@/public/images/portfolio/lookbook/img1.jpg';
import otherImg from '@/public/images/portfolio/other/img1.jpg';
import sportImg from '@/public/images/portfolio/sport/img6.jpg';
import stylingImg from '@/public/images/portfolio/styling/img1.jpg';
import workImg from '@/public/images/portfolio/work/img1.jpg';

const PortfolioPage = () => {
  return (
    <section className={styles.portfolioContainer}>
      <div className={styles.content}>
        <Link href='/portfolio/bielizna'>
          <div className={styles.categoryBox}>
            <h2 className={styles.subtitle}>Bielizna</h2>
            <Image src={underwearImg} alt='underwear category' />
          </div>
        </Link>
      </div>

      <div className={styles.content}>
        <Link href='/portfolio/commerce'>
          <div className={styles.categoryBox}>
            <h2 className={styles.subtitle}>Commerce</h2>
            <Image src={commerceImg} alt='commerce category' />
          </div>
        </Link>
      </div>

      <div className={styles.content}>
        <Link href='/portfolio/elegancko'>
          <div className={styles.categoryBox}>
            <h2 className={styles.subtitle}>Elegancko</h2>
            <Image src={elegantImg} alt='elegant category' />
          </div>
        </Link>
      </div>

      <div className={styles.content}>
        <Link href='/portfolio/lifestyle'>
          <div className={styles.categoryBox}>
            <h2 className={styles.subtitle}>Lifestyle</h2>
            <Image src={lifestyleImg} alt='lifestyle category' />
          </div>
        </Link>
      </div>

      <div className={styles.content}>
        <Link href='/portfolio/lookbook'>
          <div className={styles.categoryBox}>
            <h2 className={styles.subtitle}>Lookbook</h2>
            <Image src={lookbookImg} alt='lookbook category' />
          </div>
        </Link>
      </div>

      <div className={styles.content}>
        <Link href='/portfolio/robocze'>
          <div className={styles.categoryBox}>
            <h2 className={styles.subtitle}>Robocze</h2>
            <Image src={workImg} alt='working category' />
          </div>
        </Link>
      </div>

      <div className={styles.content}>
        <Link href='/portfolio/sport-i-turystyka'>
          <div className={styles.categoryBox}>
            <h2 className={styles.subtitle}>Sport i turystyka</h2>
            <Image src={sportImg} alt='sport category' />
          </div>
        </Link>
      </div>

      <div className={styles.content}>
        <Link href='/portfolio/stylizacje'>
          <div className={styles.categoryBox}>
            <h2 className={styles.subtitle}>Stylizacje</h2>
            <Image src={stylingImg} alt='styling category' />
          </div>
        </Link>
      </div>

      <div className={styles.content}>
        <Link href='/portfolio/pozostale'>
          <div className={styles.categoryBox}>
            <h2 className={styles.subtitle}>Pozostałe</h2>
            <Image src={otherImg} alt='other category' />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PortfolioPage;
