import './index.scss';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Call() {
    return (
        <section className="call">
            <h2>Pronto para transformar seu corpo e sua mente?</h2>
            <p>
                Agende agora sua aula experimental gratuita e descubra como o CrossFit pode mudar sua vida.
                Nossos coaches estão prontos para te guiar nessa jornada!
            </p>
            <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="call-button"
            >
                <FaWhatsapp className="whatsapp-icon" />
                Agende sua aula gratuita
            </a>
        </section>
    );
};
