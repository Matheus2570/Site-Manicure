import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

// Troque essas imagens pelas fotos reais dos trabalhos
import Trabalho1 from "../assets/Logo.png";
import Trabalho2 from "../assets/Logo.png";

function Home() {
  const destaques = [
    {
      title: "Alongamento em Gel",
      img: Trabalho1,
      text: [
        "Alongamentos com acabamento profissional, resistência e beleza para valorizar seu estilo.",
        "Cada procedimento é feito pensando no estilo e preferência de cada cliente."
      ]
    },
    {
      title: "Cuidados e Beleza",
      img: Trabalho2,
      text: [
        "Procedimentos personalizados feitos com cuidado, higiene e produtos de qualidade.",
        "Um atendimento delicado para deixar suas unhas ainda mais bonitas e saudáveis."
      ]
    }
  ];

  const servicos = [
    {
      titulo: "Alongamento em Gel",
      subtitulo: "Unhas longas, resistentes e elegantes",
      texto: "Ideal para quem deseja unhas longas, bonitas e com maior durabilidade, com acabamento profissional."
    },
    {
      titulo: "Banho de Gel",
      subtitulo: "Fortalece e protege",
      texto: "Técnica que fortalece as unhas naturais proporcionando brilho, proteção e acabamento perfeito."
    },
    {
      titulo: "Nail Art",
      subtitulo: "Detalhes únicos",
      texto: "Decorações personalizadas e criativas feitas de acordo com o estilo de cada cliente."
    }
  ];

  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-texto">
          <h1>Realçando sua beleza através das unhas</h1>

          <p>
            Atendimento personalizado, técnicas modernas e muito cuidado em cada detalhe.
          </p>

          <div className="hero-botoes">
            <a
              href="https://wa.me/5519989124968"
              target="_blank"
              rel="noopener noreferrer"
              className="botao-whatsapp"
            >
              💬 Agendar horário
            </a>

            <a
              href="https://www.google.com/maps/place/Ma'art+Nails/@-22.9750217,-46.9804304,19z/data=!4m6!3m5!1s0x94c8cd18a49fb1dd:0x24347c31412dd8eb!8m2!3d-22.9747827!4d-46.9810777!16s%2Fg%2F11z8t3kvcx?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="botao-localizacao"
            >
              📍 Ver localização
            </a>
          </div>
        </div>
      </section>

      {/* ================= MEUS TRABALHOS ================= */}
      <section className="section-a">
        <h2 className="titulo-sobre">Meus trabalhos</h2>

        <div className="cards-area">
          {destaques.map((card, index) => (
            <article
              key={index}
              className={`bloco-card ${index === 1 ? "reverse" : ""}`}
            >
              <img
                src={card.img}
                alt={card.title}
                className="imagem-sobre"
                loading="lazy"
              />

              <div className="texto-sobre">
                <h3>{card.title}</h3>
                {card.text.map((paragrafo, i) => (
                  <p key={i}>{paragrafo}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= SERVIÇOS PRINCIPAIS ================= */}
      <section className="objetivos-section">
        <div className="container">
          <h2 className="section-title">Serviços</h2>

          <div className="objetivos-grid">
            {servicos.map((servico, index) => (
              <article className="objetivo-card" key={index}>
                <div className="card-header">
                  <h3>{servico.subtitulo}</h3>
                </div>

                <div className="card-body">
                  <h4>{servico.titulo}</h4>
                  <p>{servico.texto}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="ver-todos-wrap">
            <Link to="/servicos" className="botao-ver-todos">
              Ver todos os serviços e valores
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;