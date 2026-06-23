import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-['Inter',_sans-serif]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fitur" element={<Features />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//a