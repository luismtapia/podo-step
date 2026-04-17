import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import isotipo from './assets/isotipo.svg'

import Loader from './components/Loader'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Contacto from './pages/ContactoPage';
import Agendar from './pages/AgendarPage';
import ComingSoon from './pages/ComingSoonPage';


function App() {
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