import "./SobrePage.css";

import FotoPerfil from "../assets/perfil.jpeg";

import Espaco1 from "../assets/espaco1.jpeg";
import Espaco2 from "../assets/espaco2.jpeg";
import Espaco3 from "../assets/espaco3.jpeg";
import Espaco4 from "../assets/espaco4.jpeg";
import Espaco5 from "../assets/espaco5.jpeg";
import Espaco6 from "../assets/espaco6.jpeg";
import Espaco7 from "../assets/espaco7.jpeg";
import Espaco8 from "../assets/espaco8.jpeg";

const fotosEspaco = [
  Espaco2, Espaco5, Espaco7, Espaco3,
  Espaco8, Espaco6, Espaco4, Espaco1
];

export default function SobrePage() {
  return (
    <main className="sobre-container">

      {/* ================= PERFIL ================= */}
      <section className="sobre-apresentacao">
        <div className="sobre-imagem">
          <img
            src={FotoPerfil}
            alt="Foto de perfil da Maria Clara - Ma'art Nails"
          />
        </div>

        <div className="sobre-texto">
          <h1>Sobre Mim</h1>

          <p>
            Olá! Meu nome é <strong>Maria Clara</strong>. Sou apaixonada pelo universo da saúde e beleza.
          </p>

          <p>
            Sou podologista, terapeuta integrativa e amo misturar arte nesse meio.
            Procuro trazer em meus atendimentos profissionalismo, delicadeza e qualidade.
          </p>
        </div>
      </section>

      {/* ================= MEU ESPAÇO ================= */}
      <section className="sobre-espaco">
        <div className="titulo-espaco">
          <h2>Meu Espaço</h2>
          <p>
            Um ambiente preparado para oferecer conforto, segurança e tranquilidade
            durante cada atendimento.
          </p>
        </div>

        <div className="espaco-galeria">
          {fotosEspaco.map((foto, index) => (
            <article className="espaco-card" key={index}>
              <img
                src={foto}
                alt={`Espaço de atendimento ${index + 1}`}
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </section>

      {/* ================= DIFERENCIAIS ================= */}
      <section className="diferenciais">
        <h2>Meus Diferenciais</h2>

        <div className="cards">
          <div className="card">
            <h3>✨ Qualidade</h3>
            <p>
              Produtos selecionados e técnicas modernas para melhores resultados.
            </p>
          </div>

          <div className="card">
            <h3>💅 Especialização</h3>
            <p>
              Procedimentos personalizados de acordo com o estilo e preferência de cada cliente.
            </p>
          </div>

          <div className="card">
            <h3>🧴 Higiene</h3>
            <p>
              Cuidado com limpeza e organização em todos os detalhes do atendimento.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}