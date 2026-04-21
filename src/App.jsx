import { useState } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'


import isotipo from './assets/isotipo.svg'

import Loader from './components/Loader'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Contacto from './pages/ContactoPage';
import Agendar from './pages/AgendarPage';
import ComingSoon from './pages/ComingSoonPage';

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // mode="wait" asegura que la página actual termine de salir antes de que entre la nueva
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/contacto" element={
          <PageWrapper>
            <Contacto />
          </PageWrapper>
        } />
        <Route path="/agendar" element={
          <PageWrapper>
            <Agendar />
          </PageWrapper>
        } />
        <Route path="/" element={
          <PageWrapper>
            <ComingSoon />
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <main className="scroll-container">
        <AnimatedRoutes />
      </main>
    </Router>
  )
}


function Appi() {
  // const [loading, setLoading] = useState(true)

  return (
    <Router>
      {/* {loading && <Loader setFinished={setLoading} />} */}
      
      {/* El Navbar vive fuera de las rutas para ser global */}
      {/* <Navbar /> */}

      <main className="scroll-container">
        <Routes>
          {/* <Route path="/" element={
            <>
              <HeroSection />
              <section className="section bg-white flex items-center justify-center">
                <h2 className="text-4xl font-bold text-slate-800">Tratamientos</h2>
              </section>
            </>
          } /> */}
          
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/agendar" element={<Agendar />} />
          <Route path="/" element={<ComingSoon />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App