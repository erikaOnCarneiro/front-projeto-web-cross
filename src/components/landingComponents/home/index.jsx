import './index.scss';
import React from 'react';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
    return (
        <section className="home" id="home">
            <div className="overlay">
                <div className="content">
                    <h1>
                        <strong>CROSS</strong> <span className="blue">É PARA</span> <span className="light-blue">TODOS</span>
                    </h1>
                    <p>
                        No box Cross Alvorada, acreditamos que cada pessoa pode superar seus limites. 
                        Venha transformar sua vida com a gente!
                    </p>
                    <div className="buttons">
                        <a 
                            className="btn-primary" 
                            href="https://wa.me/5599999999999?text=Olá! Gostaria de agendar uma aula experimental no Cross Alvorada." 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp /> Agende uma aula experimental
                        </a>
                        <button className="btn-outline">
                            Conheça nossas modalidades <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}