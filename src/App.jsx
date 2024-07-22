import { BrowserRouter } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Main from "./componentes/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
