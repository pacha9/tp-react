import styles from "./Main.module.css";

function Main({ titulo, descripcion, items }) {
  return (
    <main className={styles.mainContainer}>
      <h1 className={styles.title}>{titulo}</h1>
      <p className={styles.description}>{descripcion}</p>
      
      <div className={styles.gridContainer}>
        {items.map((item, index) => (
          <div key={index} className={styles.cardItem}>
            <h3>{item}</h3>
            <p>Componente o servicio disponible en nuestra plataforma técnica.</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;