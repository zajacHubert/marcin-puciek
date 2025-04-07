import styles from './footer.module.css';
import { FaFacebookF } from 'react-icons/fa';
import { CiInstagram } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Marcin Puciek</p>
        <div className={styles.iconsBox}>
          <a
            className={styles.link}
            href='https://www.facebook.com/share/16JJZE2SHg/'
            target='_blank'
          >
            <FaFacebookF size={18} />
          </a>
          <a
            className={styles.link}
            href='https://www.instagram.com/m.puciek?igsh=MWJxdzJ0bGF5anhwOQ=='
            target='_blank'
          >
            <CiInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
