import './index.scss';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

import imageAbout from '../../../assets/landingpage/about.jpg';

export default function About() {
    return(
        <section className="about" id="about">
        <div className="about__container">
          <div className="about__text">
            <h2>
              Sobre o <span>Box Cross Alvorada</span>
            </h2>
            <p>
              Fundado com a missão de tornar o Crossfit acessível para todos, o Box Cross Alvorada é
              mais que um espaço para treinar, é uma comunidade onde cada pessoa é importante e
              recebe atenção individualizada para atingir seus objetivos.
            </p>
            <p>
              Nossa metodologia combina os princípios do Crossfit com adaptações que permitem que
              pessoas de todos os níveis de condicionamento físico possam praticar com segurança e
              eficiência. Aqui, você encontra uma comunidade acolhedora e um ambiente descontraído
              para superar seus limites.
            </p>
  
            <ul className="about__list">
              <li><FaCheck /> Treinos diários com foco em resultados;</li>
              <li><FaCheck /> Coaches certificados e experientes;</li>
              <li><FaCheck /> Acompanhamento contínuo de evolução;</li>
              <li><FaCheck /> Comunidade unida e motivadora;</li>
              <li><FaCheck /> Espaço amplo e bem equipado;</li>
              <li><FaCheck /> Planos flexíveis para todas as necessidades.</li>
            </ul>
          </div>
  
          <div className="about__image">
            <img src={imageAbout} alt="Pessoa fazendo barra fixa" />
            <div className="about__badge">
              <strong>5+</strong>
              <span>Anos de experiência</span>
            </div>
          </div>
        </div>
      </section>
    );
}