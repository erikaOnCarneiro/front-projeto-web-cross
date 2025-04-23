import './index.scss';
import React from 'react';

export default function About() {
    return(
        <section className="about" id="about">
            <div className="overlay">
                <div className="content">
                    <h1>Sobre nós</h1>
                    <p>
                        O Box Cross Alvorada é um espaço dedicado ao treinamento funcional e crossfit, 
                        onde cada aluno é tratado como um atleta. Nossa missão é proporcionar um ambiente 
                        acolhedor e motivador, onde todos possam superar seus limites e alcançar seus objetivos.
                    </p>
                    <p>
                        Com uma equipe de profissionais qualificados e apaixonados pelo que fazem, 
                        oferecemos aulas dinâmicas e desafiadoras para todas as idades e níveis de condicionamento físico.
                    </p>
                </div>
            </div>
        </section>
    );
}