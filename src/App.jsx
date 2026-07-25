import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/HomePage.jsx";
import Sobre from "./pages/Sobrepage.jsx";
import Servicos from "./pages/ServicosPage.jsx";
import Contato from "./pages/ContatoPage.jsx";

// Componentes
import NavBar from "./components/navBar.jsx";
import Footer from "./components/footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Teste

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;