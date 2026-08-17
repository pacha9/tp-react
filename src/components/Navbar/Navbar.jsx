import styles from "./Navbar.module.css";

function Navbar({ titulo, links }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>{titulo}</div>
      <ul className={styles.menu}>
        {links.map((link, index) => (
          <li key={index} className={styles.item}>
          <a href={`#${link.toLowerCase()}`} className={styles.link}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;