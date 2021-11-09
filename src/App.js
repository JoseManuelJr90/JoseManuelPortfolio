
// CSS
import './App.css';
// COMPONENTS
import Home from './Home';
import Acerca from './Acerca';
import Servicios from './Servicios';
import Proyectos from './Proyectos';
import Footer from './Footer';
import Contacto from './Contacto';

function App() {
  return (
    <div className="App">
      <Home />
      <Acerca/>
      <Servicios/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
