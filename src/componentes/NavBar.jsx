import { ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function NavBar({ isHeader }) {
  return (
    <nav className={`flex items-center gap-4 ${isHeader ? "" : "justify-center text-xs"}`}>
      {isHeader ? (
        <>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/categoria/furniture">Muebles</NavLink>
          <NavLink to="/categoria/laptops">Laptops</NavLink>
          <NavLink to="/carrito" className="flex items-center gap-2">
            Carrito <ShoppingCart />
          </NavLink>
        </>
      ) : (
        <>
          <Link to="/tyc">Términos y Condiciones</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contacto">Contacto</Link>
        </>
      )}
    </nav>
  );
}

export default NavBar;
