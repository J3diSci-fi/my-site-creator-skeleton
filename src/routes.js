import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

const validPaths = ['/', '/about', '/contact', '/404'];

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!validPaths.includes(location.pathname)) {
      navigate('/404', { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default AppRoutes;