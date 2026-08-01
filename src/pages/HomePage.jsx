import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

// Troque essas imagens pelas fotos reais dos trabalhos
import Trabalho1 from "../assets/EsmaltacaoTradicional.jpeg";
import Trabalho2 from "../assets/CuidadosEBeleza.jpeg";
import Trabalho3 from "../assets/PodologiaCompleta.jpg";
import Trabalho4 from "../assets/Auriculoterapia.jpeg";
import Trabalho5 from "../assets/NailArt1.jpeg";


function Home() {
  const destaques = [
    {
      title: "Esmaltação tradicional",
      img: Trabalho1,
      text: [
        "Cuidado especializado com as unhas e uma esmaltação linda que realça sua beleza. Acabamento impecável, produtos antialérgicos, atendimento personalizado e resultados incríveis."
      ]
    },
    {
      title: "Atendimento infantil, masculino e geriátrico",
      img: Trabalho2,
      text: [
        "O cuidado com a beleza e saúde não se limita apenas a mulheres adultas. Aqui trabalho com amor e carinho atendendo o público infantil, masculino e geriátrico. Todos os atendimentos são personalizados e adequados a cada cliente, garantindo excelência."
      ]
    },
    {
      title: "Podologia completa",
      img: Trabalho3,
      text: [
        "Podologia não é apenas para os pés em apuros; para mantê-los saudáveis ela é inegociável. Ma'art Nails garante um atendimento humanizado com excelência, qualidade incomparável e uma saúde garantida para seus pés."
      ]
    },
    {
      title: "Terapias integrativas",
      img: Trabalho4,
      text: [
        "Para manter uma beleza externa é necessário saúde interna. As terapias integrativas são um caminho de cuidado com seu interior de forma tranquila e eficiente, proporcionando relaxamento e cuidado paralelamente."
      ]
    },
    {
      title: "Decorações personalizadas",
      img: Trabalho5,
      text: [
        "Unhas básicas são lindas, mas decorações trazem personalidade e beleza de uma forma transformadora! Basta escolher sua referência e transformo suas unhas em uma obra de arte."
      ]
    }
  ];

  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-texto">
          <h1>Realçando sua beleza e cuidando da sua saúde</h1>

          <p>
            Atendimento personalizado, técnicas modernas e muito cuidado em cada detalhe.
          </p>

          <div className="hero-botoes">
            <Link to="/contato#agendamento" className="botao-whatsapp">
              💬 Agendar horário
            </Link>

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
              className={`bloco-card ${index % 2 === 1 ? "reverse" : ""}`}
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

      {/* ================= BOTÃO VER SERVIÇOS ================= */}
      <section className="objetivos-section">
        <div className="container">
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