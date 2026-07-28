import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./navBar.css";
import BotaoMudarTema from "./botaoMudaTema";
import logo from "../assets/logo.png";   // ← ajuste o caminho se necessário


export default function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();

  const alternarMenu = () => setMenuAberto(!menuAberto);
  const handleClick = () => setMenuAberto(false);

  const titulos = {
    "/": "Ma'art Nails",
    "/sobre": " Sobre",
    "/servicos": " Serviços",
    "/contato": " Contato",
  };

  const tituloAtual = titulos[location.pathname] || "Ma'art Nails";

  return (
    <nav className="navBar">
      <div className="navTopo">
        {/* Logo + Título */}
        <div className="logoTitulo">
          <Link to="/" onClick={handleClick} className="logoLink">
          <img
  src={logo}
  alt="Ma'art Nails"
  className="logo"
/>
          </Link>
          <h1 className="tituloSite">{tituloAtual}</h1>
        </div>

        <div className="tituloComBotao">
          <i
            className={menuAberto ? "bx bx-x" : "bx bx-menu"}
            onClick={alternarMenu}
            style={{ cursor: "pointer" }}
          ></i>

          <BotaoMudarTema />
        </div>
      </div>

      {menuAberto && (
        <div className="menu-opcoes">
          <ul>
            <li>
              <Link to="/" onClick={handleClick} className="navLink">
                🏠 Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" onClick={handleClick} className="navLink">
                ✨ Sobre
              </Link>
            </li>
            <li>
              <Link to="/servicos" onClick={handleClick} className="navLink">
                💅 Serviços
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={handleClick} className="navLink">
                📱 Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}