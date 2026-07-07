import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <Link to="/">
        <h1 className="text-xl font-bold text-blue-600">BrandKu</h1>
      </Link>
      <nav className="flex space-x-6 text-sm font-medium text-slate-600">
        <Link to="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
        <Link to="/fitur" className="hover:text-blue-600 transition-colors">Fitur</Link>
        <Link to="#" className="hover:text-blue-600 transition-colors">Harga</Link>
      </nav>
    </header>
  );
};

export default Navbar;
