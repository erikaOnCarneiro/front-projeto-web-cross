import './index.scss';
import React from 'react';

export default function Schedule() {
    return (
        <section className="schedule" id="schedule">
            <div className="schedule__container">
                <h2 className="schedule__title">Funcionamento</h2>
                <p className="schedule__description">
                    Veja nossos horários e escolha o melhor
                     momento para treinar conosco.
                </p>

                <div className="schedule__info">
                    <div className="schedule__card">
                        <h3>Segunda a Sexta</h3>
                        <p>Aulas das <strong>06h às 09h</strong> e das <strong>16h às 20h</strong></p>
                    </div>
                    <div className="schedule__card">
                        <h3>Sábado e Domingo</h3>
                        <p>Reservado para aulas especiais e eventos — entre em contato ou acompanhe nossos eventos!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};