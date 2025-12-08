import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Ministries from './pages/Ministries/Ministries';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar title="ChurchProject" />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer year={new Date().getFullYear()} />
    </Router>
  );
}

export default App;
