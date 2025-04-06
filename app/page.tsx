import MainSlider from '@/components/MainSlider';
import styles from '../styles/home-page.module.css';
import heroImg from '@/public/images/dimensions/img17.jpg';
import Image from 'next/image';

const HomePage = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <MainSlider />
      </section>
      <section className={styles.dimensionsSection}>
        <div className={styles.contentBox}>
          <h2 className={styles.subtitle}>Marcin Puciek</h2>
          <p className={styles.pTtitle}>MODEL&COMMERCIAL ACTOR</p>
          <p className={styles.pRow}>Doświadcznie: 10lat</p>
          <p className={styles.pRow}>Wzrost: 185cm</p>
          <p className={styles.pRow}>Waga: 95kg</p>
          <p className={styles.pRow}>Kolor włosów: blond</p>
          <p className={styles.pRow}>Penis: mocne 13cm</p>
        </div>
        <div className={styles.contentBox}>
          <Image src={heroImg} alt='model' />
        </div>
      </section>
      <section className={styles.about}>
        <h2 className={styles.aboutSubtitle}>O mnie</h2>
        <p className={styles.aboutP}>
          Jestem fotomodelem i aktorem reklamowym z dużym doświadczeniem przed
          kamerą i aparatem. Ukończyłem roczny kurs aktorski w Szkole
          Artystycznej ROE, który pozwolił rozwinąć mój warsztat i swobodnie
          odnajdywać się w różnorodnych produkcjach. Praca przed obiektywem to
          na pewno jedna z moich pasji.
        </p>
        <p className={styles.aboutP}>
          Miałem przyjemność brać udział w kampaniach reklamowy m.in. dla
          T-Mobile, Sonko, Vifon, Smartney, Żabka, Betclic.
        </p>
      </section>
    </>
  );
};

export default HomePage;
