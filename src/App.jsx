import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const nombreSitio = "TecnoSistemas MDM";
  const opcionesNav = ["Inicio", "Productos", "Contacto"];
  
  // Agregamos los datos para el componente Main y Footer exigidos por el TP
  const tituloSeccion = "Catálogo Tecnológico";
  const descSeccion = "Soluciones informáticas a tu medida.";
  const listaItems = ["Servicio Técnico", "Componentes PC", "Redes e Infraestructura"];

  return (
    <>
      <Navbar titulo={nombreSitio} links={opcionesNav} />
      
      <Main 
        titulo={tituloSeccion} 
        descripcion={descSeccion} 
        items={listaItems} 
      />
      
      <Footer 
        texto="Todos los derechos reservados." 
        anio="2026" 
      />
    </>
  );
}

export default App;