import img from '../../public/placeholder.png';
import Image from 'next/image';
import styles from '../../styles/contact-page.module.css';
import { MdMailOutline } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { CiInstagram } from 'react-icons/ci';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <section className={styles.sectionContact}>
        <h2 className={styles.subtitle}>Kontakt</h2>
        <div className={styles.container}>
          <div className={styles.contentBox}>
            <Image src={img} alt='model' />
          </div>
          <div className={styles.contentBox}>
            <p className={styles.p}>Widzisz mnie w swoim projekcie?</p>
            <p className={styles.p}>
              Super! Jeśli potrzebujesz fotomodela, aktora reklamowego, kogoś,
              kto świetnie czuje się przed kamerą i łatwo odnajduje w różnych
              rolach – jestem tu, żeby pomóc. Pracuję elastycznie i zawsze
              staram się dopasować do wizji projektu, więc współpraca ze mną to
              czysta przyjemność.
            </p>
            <p className={styles.p}>
              Masz pomysł, chcesz go omówić lub po prostu potrzebujesz więcej
              informacji? Napisz do mnie!
            </p>
          </div>
        </div>
        <div className={styles.iconsBox}>
          <a href='mailto:marcin.puciek88@gmail.com?subject=Zapytanie%20o%20współpracę'>
            <MdMailOutline />
          </a>
          <a
            href='https://www.youtube.com/watch?v=bM4xWww5yag&ab_channel=PrzewodnikTV'
            target='_blank'
          >
            <FaFacebook />
          </a>
          <a
            href='https://www.youtube.com/watch?v=bM4xWww5yag&ab_channel=PrzewodnikTV'
            target='_blank'
          >
            <CiInstagram />
          </a>
        </div>
      </section>
      <section>
        <ContactForm />
      </section>
    </>
  );
};

export default ContactPage;
