import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-black tracking-tighter text-white mix-blend-difference">
        PODOSTEP
      </Link>

      {/* Menú */}
      <div className="space-x-8 text-sm font-medium uppercase tracking-widest text-white mix-blend-difference">
        <Link to="/" className="hover:opacity-50 transition-opacity">Inicio</Link>
        <Link to="/contacto" className="hover:opacity-50 transition-opacity">Contacto</Link>
      </div>
    </nav>
  )
}

export default Navbar