import React, { useState, useEffect, useCallback } from "react";
import "./ServicosPage.css";

// Imagens dos trabalhos
import Foto1 from "../assets/Auriculoterapia.jpeg";
import Foto3 from "../assets/Moxaterapia.jpeg";
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
  { img: Foto1, titulo: "Auriculoterapia " },
  { img: Foto3, titulo: "Moxaterapia" },
  { img: Foto4, titulo: "Esmaltação tradicional" },
  { img: Foto5, titulo: "Esmaltação infantil" },
  { img: Foto6, titulo: "Unhas masculinas" }
];

const nailArtImages = [
  NailArt1, NailArt2, NailArt3, NailArt4, NailArt5,
  NailArt6, NailArt7, NailArt8, NailArt9, NailArt10, NailArt11
];

const precos = [
  { servico: "Mão Tradicional", pix: "R$ 45,00", cartao: "R$ 50,00" },
  { servico: "Mão Trad. Pct 2 Sessões", pix: "R$ 75,00", cartao: "R$ 80,00" },
  { servico: "Mão Trad. Pct 4 Sessões", pix: "R$ 140,00", cartao: "R$ 145,00" },
  { servico: "TPC", pix: "R$ 50,00", cartao: "R$ 55,00" },
  { servico: "TPC Pct 4 Sessões", pix: "R$ 180,00", cartao: "R$ 185,00" },
  { servico: "Pacote Especial (2 TPC + 2 Mão Trad.)", pix: "R$ 160,00", cartao: "R$ 165,00" },
  { servico: "Decoração (1 dedo)", pix: "R$ 3,50", cartao: "R$ 5,00" },
  { servico: "Combo Decoração (10 dedos)", pix: "R$ 25,00", cartao: "R$ 30,00" },
  { servico: "Manicure Infantil (decorações inclusas)", pix: "R$ 35,00", cartao: "R$ 40,00" },
];

const podologiaTerapias = [
  {
    servico: "Podologia completa",
    incluso: [
      "Avaliação podológica completa",
      "Atendimento completo de podologia",
      "1 retorno de acompanhamento (em até 28 dias, quando indicado)",
      "Esmaltação simples (apenas em unhas saudáveis)",
      "Kit de cuidados para manutenção em casa",
      "Orientações personalizadas para a saúde dos pés"
    ],
    pix: "R$ 250,00",
    cartao: "R$ 255,00"
  },
  {
    servico: "Reflexologia Podal (60 minutos)",
    incluso: [
      "Avaliação inicial",
      "1 retorno de acompanhamento (em até 28 dias, quando indicado)"
    ],
    pix: "R$ 150,00",
    cartao: "R$ 155,00"
  },
  {
    servico: "Auriculoterapia - Sessão Avulsa",
    incluso: ["Avaliação inicial"],
    pix: "R$ 70,00",
    cartao: "R$ 75,00"
  },
  {
    servico: "Auriculoterapia - Pacote com 4 Sessões",
    incluso: ["Avaliação inicial"],
    pix: "R$ 220,00",
    cartao: "R$ 225,00"
  },
  {
    servico: "Ventosaterapia (45 a 60 minutos)",
    incluso: [
      "Avaliação inicial",
      "1 retorno de acompanhamento (quando indicado)"
    ],
    pix: "R$ 190,00",
    cartao: "R$ 195,00"
  },
  {
    servico: "Moxaterapia (35 a 45 minutos)",
    incluso: [
      "Avaliação inicial",
      "1 retorno de acompanhamento (quando indicado)"
    ],
    pix: "R$ 170,00",
    cartao: "R$ 175,00"
  }
];

export default function ServicosPage() {
  const [current, setCurrent] = useState(0);
  const total = nailArtImages.length;

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

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
    if (distance > minSwipeDistance) next();
    if (distance < -minSwipeDistance) prev();
  };

  return (
    <section className="servicos-page">
      <div className="container">

        <h1 className="section-title">Serviços e Valores</h1>
        <p className="servicos-descricao">
          Confira meus procedimentos e valores. Todos os serviços são realizados com produtos de qualidade e muito cuidado.
        </p>

        {/* ================= TABELA DE PREÇOS - MÃOS ================= */}
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

     {/* ================= PODOLOGIA E TERAPIAS ================= */}
<div className="tratamentos-section">
  <h2 className="subtitulo">Podologia e Terapias</h2>

  <div className="tabela-wrapper">
    <table className="tabela-precos tabela-terapias">
      <thead>
        <tr>
          <th>Serviço</th>
          <th>Incluso</th>
          <th>Pix / Dinheiro</th>
          <th>Cartão</th>
        </tr>
      </thead>
      <tbody>
        {podologiaTerapias.map((item, index) => (
          <tr key={index}>
            <td className="servico-nome">{item.servico}</td>
            <td className="incluso-cell">
              <ul>
                {item.incluso.map((itemIncluso, i) => (
                  <li key={i}>{itemIncluso}</li>
                ))}
              </ul>
            </td>
            <td>{item.pix}</td>
            <td>{item.cartao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        {/* ================= GALERIA + CARROSSEL ================= */}
        <h2 className="subtitulo" style={{ marginTop: "80px" }}>
          Alguns dos nossos trabalhos
        </h2>

        <div className="galeria-grid">
          <article className="galeria-card carousel-card">
            <div
              className="carousel-inner"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <button className="carousel-btn prev" onClick={prev} aria-label="Anterior">‹</button>

              <div className="carousel-track">
                {nailArtImages.map((img, index) => (
                  <div
                    key={index}
                    className={`carousel-slide ${index === current ? "active" : ""}`}
                  >
                    <img src={img} alt={`Nail Art ${index + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>

              <button className="carousel-btn next" onClick={next} aria-label="Próximo">›</button>
            </div>

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
              <h3>Decorações personalizadas</h3>
            </div>
          </article>

          {trabalhos.map((trabalho, index) => (
            <article className="galeria-card" key={index}>
              <img src={trabalho.img} alt={trabalho.titulo} loading="lazy" />
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