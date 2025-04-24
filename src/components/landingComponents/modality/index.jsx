import './index.scss';
import React from 'react';

import imageBeginner from '../../../assets/landingpage/beginner.jpg';
import imageIntermediate from '../../../assets/landingpage/intermediario.jpg';
import imageAdvanced from '../../../assets/landingpage/advanced.jpg';
import imageLPO from '../../../assets/landingpage/modalidadeLpo.jpg';
import imageGymnastics from '../../../assets/landingpage/modalidadeGymnastics.jpg';
import imageMatcon from '../../../assets/landingpage/modalidadeMetcon(1).jpg';

const Card = ({ image, alt, title, description }) => (
  <article className="card">
    <figure>
      <img src={image} alt={alt} className="imagem" />
    </figure>
    <div className="conteudo">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </article>
);

export default function Modality() {
  return (
    <section className="modalidades-section">
      <div className="modalidades-container">
        <header>
          <h2 className="titulo-principal">
            O Cross Alvorada é para todos!<br />
          </h2>
          <p className="descricao">
            Se você está começando agora ou já tem experiência, aqui é o seu lugar!
            Utilizamos uma didática de treino adaptada a todos os níveis — do iniciante ao avançado —
            garantindo evolução com segurança e motivação.
          </p>
          <p className="descricao">
            Além disso, oferecemos práticas completas das principais modalidades do Cross Training,
            com treinos dinâmicos, desafiadores e que realmente trazem resultados.
          </p>
        </header>

        {/* BLOCO 1 – Níveis de Treino */}
        <section className="bloco">
          <h3 className="subtitulo-bloco">Níveis dos praticantes</h3>
          <div className="cards-container">
            <Card
              image={imageBeginner}
              alt="CrossFit para iniciantes"
              title="CrossFit Iniciantes"
              description="Ideal para quem está começando, com foco em técnica e aprendizado dos movimentos básicos."
            />
            <Card
              image={imageIntermediate}
              alt="CrossFit Intermediário"
              title="CrossFit Intermediário"
              description="Para praticantes que já dominam os movimentos básicos e buscam aumentar a intensidade."
            />
            <Card
              image={imageAdvanced}
              alt="CrossFit Avançado"
              title="CrossFit Avançado"
              description="Treinos de alta intensidade com movimentos complexos para atletas experientes."
            />
          </div>
        </section>

        {/* BLOCO 2 – Modalidades Específicas */}
        <section className="bloco">
          <h3 className="subtitulo-bloco">Modalidades do Cross</h3>
          <div className="cards-container">
            <Card
              image={imageLPO}
              alt="Levantamento de Peso Olímpico"
              title="Levantamento de Peso Olímpico (LPO)"
              description="Foco em técnica, potência e força com movimentos clássicos como o arremesso e o arranco."
            />
            <Card
              image={imageGymnastics}
              alt="Ginástica"
              title="Ginástica"
              description="Trabalha o controle corporal com exercícios como barras, argolas e movimentos ginásticos."
            />
            <Card
              image={imageMatcon}
              alt="Treino Metabólico (MetCon)"
              title="MetCon"
              description="Treinos metabólicos intensos que combinam movimentos funcionais para resistência e condicionamento."
            />
          </div>
        </section>
      </div>
    </section>
  );
}

