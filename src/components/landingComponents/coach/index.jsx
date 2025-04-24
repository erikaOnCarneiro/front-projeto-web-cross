import './index.scss';
import React from 'react';
import { BsDot } from 'react-icons/bs';


export default function Coach() {
    const coachName = "André Lenon";
    return(
        <section className="coach-section">
            <div className="coach-container">
                <h2 className="coach-title">Conheça Nosso Coach</h2>
                <p className="coach-subtitle">
                    Profissional certificado e apaixonado por transformar vidas através no Cross Training.
                </p>
                <div className="coach-content">
                    <div className="coach-image">
                        <img src={require('../../../assets/landingpageImage/coach.jpeg')} alt={`Coach ${coachName}`} />
                    </div>
                    <div className="coach-info">
                        <h3 className="coach-name">{coachName}</h3>
                        <p className="coach-role">Head Coach & Fundador</p>
                        <p className="coach-description">
                            Com mais de xx anos de experiência em Cross Training e certificações do ramo esportivo,
                            {coachName} é especialista em técnicas seguras e eficientes para atletas de todos os níveis.
                        </p>
                        <div className="coach-certifications">
                            <h4>Certificações:</h4>
                            <ul>
                                <li><BsDot /> .....</li>
                                <li><BsDot /> ....</li>
                                <li><BsDot /> ....</li>
                                <li><BsDot /> .....</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}