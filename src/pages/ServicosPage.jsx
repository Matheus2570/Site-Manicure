import React from "react";
import "./ServicosPage.css";

// Troque pelas fotos reais
import Foto1 from "../assets/Logo.png";
import Foto2 from "../assets/Logo.png";
import Foto3 from "../assets/Logo.png";
import Foto4 from "../assets/Logo.png";
import Foto5 from "../assets/Logo.png";
import Foto6 from "../assets/Logo.png";

const trabalhos = [
  { img: Foto1, titulo: "Alongamento em Gel" },
  { img: Foto2, titulo: "Nail Art" },
  { img: Foto3, titulo: "Banho de Gel" },
  { img: Foto4, titulo: "Esmaltação" },
  { img: Foto5, titulo: "Decoração Personalizada" },
  { img: Foto6, titulo: "Unhas Naturais" }
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
            <h3>Todos os procedimentos incluem:</h3>
            <ul>
              <li>✅ Lavagem completa</li>
              <li>✅ Hidratação</li>
              <li>✅ Esfoliação</li>
            </ul>
          </div>
        </div>

        {/* ================= GALERIA DE TRABALHOS ================= */}
        <h2 className="subtitulo" style={{ marginTop: "80px" }}>
          Alguns dos nossos trabalhos
        </h2>

        <div className="galeria-grid">
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