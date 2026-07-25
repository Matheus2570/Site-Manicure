import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Logo */}
      <div className="footer-left">
        <img src={logo} alt="Logo Ma'art Nails" className="footer-logo" />
      </div>

      {/* Navegação */}
      <div className="footer-center">
        <h4>Navegação</h4>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </div>

      {/* Contato */}
      <div className="footer-right">
        <h4>Contato</h4>
        <p>
          <a
            href="https://wa.me/5519989124968"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 WhatsApp
          </a>
        </p>
        <p>
          <a
            href="https://www.instagram.com/maartnails438/"
            target="_blank"
            rel="noopener noreferrer"
          >
            📷 Instagram
          </a>
        </p>
        <p>📍 Valinhos - SP</p>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ma'art Nails — Todos os direitos reservados</p>
      </div>

    </footer>
  );
}