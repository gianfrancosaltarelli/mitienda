import { useDesktop } from "../utils";
import NavBar from "./NavBar";

function Footer() {
  const isDesktop = useDesktop();

  return (
    <footer className="p-4 text-center bg-black-800">
      <p className="text-xs mb-2">&copy; {new Date().getFullYear()} - Gianfranco Saltarelli</p>
      {isDesktop && <NavBar isHeader={false} />}
    </footer>
  );
}

export default Footer;
