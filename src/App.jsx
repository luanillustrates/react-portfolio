import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
