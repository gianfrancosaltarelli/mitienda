import { Link, Route, Routes } from "react-router-dom";
import { PackageOpen, Search } from "lucide-react";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-black-800 text-white">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <PackageOpen size="32" />
        <Link to="/" className="hover:text-violet-400">
          Mi Tienda
        </Link>
      </h1>
      <Routes>
        <Route path="/productos" element={
          <div className="lg:flex items-center gap-2">
            <input
              type="text"
              placeholder="Buscar..."
              className="px-2 py-1 rounded-lg"
              aria-label="Buscar productos"
            />
            <button type="button" className="p-1 rounded-lg bg-violet-600 hover:bg-violet-700">
              <Search size="24" /> 
            </button>
          </div>
        } />
      </Routes>
      <NavBar isHeader={true} />
    </header>
  );
}

export default Header;
