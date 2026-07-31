import React, { useState, useEffect, useCallback } from "react";
import "./ServicosPage.css";

// Imagens dos trabalhos
import Foto1 from "../assets/Alongamento.jpeg";
import Foto3 from "../assets/BanhoGel.jpeg";
import Foto4 from "../assets/EsmaltacaoTradicional.jpeg";
import Foto5 from "../assets/EsmaltacaoInfantil.jpeg";
import Foto6 from "../assets/UnhasMasculinas.jpeg";

// Nail Art – carrossel (1 a 11)
import NailArt1 from "../assets/NailArt1.jpeg";
import NailArt2 from "../assets/NailArt2.jpeg";
import NailArt3 from "../assets/NailArt3.jpeg";
import NailArt4 from "../assets/NailArt4.jpeg";
import NailArt5 from "../assets/NailArt5.jpeg";
import NailArt6 from "../assets/NailArt6.jpeg";
import NailArt7 from "../assets/NailArt7.jpeg";
import NailArt8 from "../assets/NailArt8.jpeg";
import NailArt9 from "../assets/NailArt9.jpeg";
import NailArt10 from "../assets/NailArt10.jpeg";
import NailArt11 from "../assets/NailArt11.jpeg";

const trabalhos = [
  { img: Foto1, titulo: "Alongamento em Gel" },
  { img: Foto3, titulo: "Banho de Gel" },
  { img: Foto4, titulo: "Esmaltação tradicional" },
  { img: Foto5, titulo: "Esmaltação infantil" },
  { img: Foto6, titulo: "Unhas masculinas" }
];

const nailArtImages = [
  NailArt1, NailArt2, NailArt3, NailArt4, NailArt5,
  NailArt6, NailArt7, NailArt8, NailArt9, NailArt10, NailArt11
];

const precos = [
  { servico: "Pedicure Tradicional", pix: "R$ 40", cartao: "R$ 45" },
  { servico: "Manicure Tradicional", pix: "R$ 45", cartao: "R$ 50" },
  { servico: "Pedicure Infantil", pix: "R$ 30", cartao: "R$ 37" },
  { servico: "Manicure Infantil", pix: "R$ 35", cartao: "R$ 32" },
  { servico: "Alongamento", pix: "R$ 140", cartao: "R$ 150" },
  { servico: "Esmaltação / Banho de Gel", pix: "R$ 70", cartao: "R$ 75" },
  { servico: "Blindagem", pix: "R$ 65", cartao: "R$ 70" },
  { servico: "Remoção de Gel", pix: "R$ 50", cartao: "R$ 53" },
  { servico: "TPC", pix: "R$ 50", cartao: "R$ 53" },
  { servico: "Spa dos Pés", pix: "R$ 30", cartao: "R$ 32" },
  { servico: "Spa das Mãos", pix: "R$ 15", cartao: "R$ 16" },
  { servico: "Spa Ombros e Pescoço", pix: "R$ 25", cartao: "R$ 27" },
  { servico: "Combo Spa", pix: "R$ 60", cartao: "R$ 65" },
];

const tratamentosPes = [
  { servico: "Apenas corte e lixamento", pix: "R$ 30", cartao: "R$ 35" },
  { servico: "Tratamento básico para verruga plantar", pix: "R$ 115", cartao: "R$ 120" },
  { servico: "Remoção de calosidades", pix: "R$ 95", cartao: "R$ 100" },
  { servico: "Remoção de unhas incômodas (apenas alívio)", pix: "R$ 40", cartao: "R$ 45" },
];

export default function ServicosPage() {
  const [current, setCurrent] = useState(0);
  const total = nailArtImages.length;

  // Controle do swipe (arrastar no celular)
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play a cada 4 segundos
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  // Funções de toque (swipe)
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
  };

  return (
    <section className="servicos-page">
      <div className="container">

        {/* Título */}
        <h1 className="section-title">Serviços e Valores</h1>
        <p className="servicos-descricao">
          Confira nossos procedimentos e valores. Todos os serviços são realizados com produtos de qualidade e muito cuidado.
        </p>

        {/* ================= TABELA DE PREÇOS ================= */}
        <div className="tabela-wrapper">
          <table className="tabela-precos">
            <thead>
              <tr>
                <th>Serviço</th>
                <th>Pix / Dinheiro</th>
                <th>Cartão</th>
              </tr>
            </thead>
            <tbody>
              {precos.map((item, index) => (
                <tr key={index}>
                  <td>{item.servico}</td>
                  <td>{item.pix}</td>
                  <td>{item.cartao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="tabela-rodape">
          Ma'art Nails cuida de você e da sua saúde.
        </p>

        {/* ================= TRATAMENTO DOS PÉS ================= */}
        <div className="tratamentos-section">
          <h2 className="subtitulo">Tratamento para os Pés</h2>

          <div className="tabela-wrapper">
            <table className="tabela-precos">
              <thead>
                <tr>
                  <th>Serviço</th>
                  <th>Pix / Dinheiro</th>
                  <th>Cartão</th>
                </tr>
              </thead>
              <tbody>
                {tratamentosPes.map((item, index) => (
                  <tr key={index}>
                    <td>{item.servico}</td>
                    <td>{item.pix}</td>
                    <td>{item.cartao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="inclusos">
            <h3>Todos os procedimentos de tratamento incluem:</h3>
            <ul>
              <li>✅ Lavagem completa</li>
              <li>✅ Hidratação</li>
              <li>✅ Esfoliação</li>
            </ul>
          </div>
        </div>

        {/* ================= GALERIA + CARROSSEL ================= */}
        <h2 className="subtitulo" style={{ marginTop: "80px" }}>
          Alguns dos nossos trabalhos
        </h2>

        <div className="galeria-grid">

          {/* Card Nail Art com carrossel + swipe */}
          <article className="galeria-card carousel-card">
            <div
              className="carousel-inner"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <button
                className="carousel-btn prev"
                onClick={prev}
                aria-label="Anterior"
              >
                ‹
              </button>

              <div className="carousel-track">
                {nailArtImages.map((img, index) => (
                  <div
                    key={index}
                    className={`carousel-slide ${index === current ? "active" : ""}`}
                  >
                    <img
                      src={img}
                      alt={`Nail Art ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <button
                className="carousel-btn next"
                onClick={next}
                aria-label="Próximo"
              >
                ›
              </button>
            </div>

            {/* Bolinhas */}
            <div className="carousel-dots">
              {nailArtImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === current ? "active" : ""}`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>

            <div className="galeria-info">
              <h3>Nail Art</h3>
            </div>
          </article>

          {/* Demais trabalhos */}
          {trabalhos.map((trabalho, index) => (
            <article className="galeria-card" key={index}>
              <img
                src={trabalho.img}
                alt={trabalho.titulo}
                loading="lazy"
              />
              <div className="galeria-info">
                <h3>{trabalho.titulo}</h3>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}