import styles from "./Footer.module.css";

function Footer({ texto, anio }) {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.text}>
        copyright {anio} - {texto}
      </p>
    </footer>
  );
}

export default Footer;