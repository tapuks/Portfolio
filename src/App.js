
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './components/header';
import AboutMe from './components/AboutMe';

function App() {
  document.body.style = "background: #1D1D1D;";
  return (
    <div >
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
