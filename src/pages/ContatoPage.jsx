import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ContatoPage.css";

export default function ContatoPage() {
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const location = useLocation();

  // Faz o scroll automático quando vier com #agendamento
  useEffect(() => {
  if (location.hash === "#agendamento") {
    const element = document.getElementById("agendamento");
    if (element) {
      setTimeout(() => {
        const yOffset = -100; // ajuste esse valor (quanto mais negativo, mais para cima)
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100);
    }
  }
}, [location]);

  const handleAgendar = () => {
    if (!data || !hora) {
      alert("Por favor, selecione a data e o horário desejados.");
      return;
    }

    // Formata a data para DD/MM/AAAA
    const [ano, mes, dia] = data.split("-");
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const mensagem = `Oi, tudo bem?\nGostaria de saber se tem disponibilidade para o dia ${dataFormatada} às ${hora}.\nPode me confirmar, por favor?`;

    const url = `https://wa.me/5519989124968?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contato-page">
      <div className="container">

        <h1 className="section-title">Contato</h1>
        <p className="contato-descricao">
          Fale comigo, tire suas dúvidas ou agende seu horário.  
          Será um prazer cuidar das suas unhas!
        </p>

        {/* ================= CARDS DE CONTATO ================= */}
        <div className="contato-cards">

          {/* WhatsApp */}
          <a
            href="https://wa.me/5519989124968"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-card"
          >
            <div className="contato-icone">📱</div>
            <h3>WhatsApp</h3>
            <p>Agende seu horário de forma rápida e fácil</p>
            <span className="contato-botao">Conversar agora</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/maartnails438/"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-card"
          >
            <div className="contato-icone">📷</div>
            <h3>Instagram</h3>
            <p>Acompanhe os trabalhos e novidades</p>
            <span className="contato-botao">Seguir</span>
          </a>

          {/* Localização */}
          <a
            href="https://www.google.com/maps/place/Ma'art+Nails/@-22.9750217,-46.9804304,19z/data=!4m6!3m5!1s0x94c8cd18a49fb1dd:0x24347c31412dd8eb!8m2!3d-22.9747827!4d-46.9810777!16s%2Fg%2F11z8t3kvcx?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-card"
          >
            <div className="contato-icone">📍</div>
            <h3>Localização</h3>
            <p>R. Luís Bissoto - Valinhos/SP</p>
            <span className="contato-botao">Ver no mapa</span>
          </a>

        </div>

        {/* ================= AGENDAMENTO ================= */}
        <div className="agendamento-wrapper" id="agendamento">
          <h2 className="agendamento-titulo">Agende seu horário</h2>
          <p className="agendamento-descricao">
            Escolha a data e o horário de preferência. Como não tenho horários fixos, 
            combinamos a disponibilidade pelo WhatsApp.
          </p>

          <div className="agendamento-form">
            <div className="campo">
              <label htmlFor="data">Data</label>
              <input
                type="date"
                id="data"
                value={data}
                onChange={(e) => setData(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="campo">
              <label htmlFor="hora">Horário</label>
              <input
                type="time"
                id="hora"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
            </div>

            <button className="btn-agendar" onClick={handleAgendar}>
              Agendar horário
            </button>
          </div>
        </div>

        {/* ================= MAPA ================= */}
        <div className="mapa-wrapper">
          <h2 className="mapa-titulo">Onde estou</h2>

          <div className="mapa-container">
            <iframe
              title="Localização Ma'art Nails"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.5!2d-46.9810777!3d-22.9747827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cd18a49fb1dd%3A0x24347c31412dd8eb!2sMa%27art%20Nails!5e0!3m2!1spt-BR!2sbr!4v1721860000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}