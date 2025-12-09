import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Ministries from './pages/Ministries/Ministries';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';

function App() {
  return (
    <Router basename="/ChurchProject">
      <Navbar title="ChurchProject" />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<div style={{ textAlign: 'center', padding: '50px', color: 'white' }}>Página não encontrada. <a href="/ChurchProject/" style={{ color: 'yellow' }}>Voltar ao Início</a></div>} />
        </Routes>
      </div>
      <Footer year={new Date().getFullYear()} />
    </Router>
  );
}

export default App;
