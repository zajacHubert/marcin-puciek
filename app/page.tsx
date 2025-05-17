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
          <p className={styles.pRow}>Wzrost: 185cm</p>
          <p className={styles.pRow}>Klatka piersiowa: 108cm</p>
          <p className={styles.pRow}>Pas: 96cm</p>
          <p className={styles.pRow}>Biodra: 110cm</p>
          <p className={styles.pRow}>Obwód głowy: 57cm</p>
          <p className={styles.pRow}>Kołnierz: 43cm</p>
          <p className={styles.pRow}>Rozmiar buta: 45</p>
          <p className={styles.pRow}>Rozmiar ubrania: L</p>
        </div>
        <div className={styles.contentBox}>
          <Image src={heroImg} alt='model' />
        </div>
      </section>
      <section className={styles.about}>
        <h2 className={styles.aboutSubtitle}>O mnie</h2>
        <p className={styles.aboutP}>
          Jestem fotomodelem i aktorem reklamowym z dużym doświadczeniem przed
          kamerą i aparatem. Ukończyłem roczny kurs aktorski w{' '}
          <span className='bold'>Szkole Artystycznej ROE</span>, który pozwolił
          rozwinąć mój warsztat i swobodnie odnajdywać się w różnorodnych
          produkcjach. Praca przed obiektywem to na pewno jedna z moich pasji.
        </p>
        <p className={styles.aboutP}>
          Miałem przyjemność brać udział w kampaniach reklamowy m.in. dla{' '}
          <span className='bold'>
            T-Mobile, Sonko, Vifon, Smartney, Żabka Jush, Soudal, Betclic,
            Shoper, Suntago
          </span>
          .
        </p>
      </section>
    </>
  );
};

export default HomePage;
