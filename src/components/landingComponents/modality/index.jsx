import './index.scss';
import React from 'react';

//import das imagens
import imageBeginner from '../../../assets/landingpage/modality/beginner.jpg';
import imageIntermediate from '../../../assets/landingpage/modality/intermediate.jpg';  
import imageAdvanced from '../../../assets/landingpage/modality/advanced.jpg';
import imageLPO from '../../../assets/landingpage/modality/lpo.jpg';
import imageGymnastics from '../../../assets/landingpage/modality/gymnastics.jpg';
import imageMatcon from '../../../assets/landingpage/modality/matcon.jpg';

export default function Modality() {
    const modalityLevel = [
      {
        titulo: 'CrossFit Iniciante',
        descricao: 'Ideal para quem está começando, com foco na técnica e no aprendizado dos movimentos básicos.',
        imagem: imageBeginner,
      },
      {
        titulo: 'CrossFit Intermediário',
        descricao: 'Para quem já domina os movimentos básicos e quer aumentar a intensidade.',
        imagem: imageIntermediate,
      },
      {
        titulo: 'CrossFit Avançado',
        descricao: 'Treinos de alta intensidade com movimentos complexos para atletas experientes.',
        imagem: imageAdvanced,
      },
    ];
  
    const modalityType = [
      {
        titulo: 'LPO',
        descricao: 'Aprimoramento das técnicas de levantamento olímpico com foco em força e potência.',
        imagem: imageLPO,
      },
      {
        titulo: 'Ginástico',
        descricao: 'Desenvolvimento de habilidades corporais como barra, argolas, flexões e equilíbrio.',
        imagem: imageGymnastics,
      },
      {
        titulo: 'MatCon',
        descricao: 'Treinos metabólicos intensos com foco em condicionamento e resistência cardiovascular.',
        imagem: imageMatcon,
      },
    ];
  
    return (
      <section className="modality" id="modality">
        <h2>Nossas Modalidades</h2>
        <p>
          Oferecemos diversas modalidades adaptadas para diferentes níveis e objetivos,
          porque acreditamos que o CrossFit é realmente para todos.
        </p>
  
        <div className="modality-group">
          {modalityLevel.map((mod, index) => (
            <div className="modality-card" key={index} style={{ backgroundImage: `url(${mod.imagem})` }}>
              <div className="overlay">
                <h3>{mod.titulo}</h3>
                <p>{mod.descricao}</p>
              </div>
            </div>
          ))}
        </div>
  
        <div className="modality-group">
          {modalityType.map((mod, index) => (
            <div className="modality-card" key={index} style={{ backgroundImage: `url(${mod.imagem})` }}>
              <div className="overlay">
                <h3>{mod.titulo}</h3>
                <p>{mod.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }