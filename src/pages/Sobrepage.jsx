import "./SobrePage.css";

import FotoPerfil from "../assets/Perfil.jpeg";

import Espaco1 from "../assets/Espaco1.jpeg";
import Espaco2 from "../assets/Espaco2.jpeg";
import Espaco3 from "../assets/Espaco3.jpeg";
import Espaco4 from "../assets/Espaco4.jpeg";
import Espaco7 from "../assets/Espaco7.jpeg";
import Espaco8 from "../assets/Espaco8.jpeg";
import Espaco9 from "../assets/Espaco9.jpeg";
import Espaco10 from "../assets/Espaco10.jpeg";

const fotosEspaco = [
  Espaco1, Espaco2, Espaco3, Espaco4,
  Espaco7, Espaco8, Espaco9, Espaco10
];

export default function SobrePage() {
  return (
    <main className="sobre-container">

      {/* ================= PERFIL ================= */}
      <section className="sobre-apresentacao">
        <div className="sobre-imagem">
          <img
            src={FotoPerfil}
            alt="Foto de perfil da Maria - Ma'art Nails"
          />
        </div>

        <div className="sobre-texto">
          <h1>Sobre Mim</h1>

          <p>
            Olá! Meu nome é <strong>Maria</strong>.
            Sou apaixonada pelo universo da beleza e especializada em cuidados para unhas,
            buscando sempre oferecer um atendimento profissional, delicado e personalizado.
          </p>

          <p>
            Meu objetivo é proporcionar uma experiência especial para cada cliente,
            unindo qualidade, higiene, conforto e muito carinho em cada procedimento realizado.
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