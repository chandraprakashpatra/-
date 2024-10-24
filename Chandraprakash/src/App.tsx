import './styles/index.css';  // Global styles
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Nutanix from './components/Experiences/Nutanix';
import { text } from 'framer-motion/client';

function App() {


  return (
    <div className="App">
      <Header />
      <About />
      <div id='exp_head'>Experiences</div>
      <Nutanix/>
      <Projects/>
      <Footer />

    </div>
  );
}

export default App;

