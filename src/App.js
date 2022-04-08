
import Header from './components/header';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies'
import CursosUdemy from './components/CursosUdemy'
import Proyectos from './components/Proyectos';
import Footer from './components/Footer';

function App() {
  document.body.style = "background: #1D1D1D;";
  return (
    <div >
      <Header />
      <AboutMe />
      <Proyectos />
      <Technologies />
      <CursosUdemy />
      <Footer />
    </div>
  );
}

export default App;
