import React from 'react';
import './index.scss';
import { FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-section about">
                    <h3>Box Cross Alvorada</h3>
                    <p>
                        Cross é para todos! Aqui você encontra a melhor estrutura e profissionais capacitados para te ajudar a alcançar seus objetivos.
                    </p>
                    <div className="social-icons">
                        <FaInstagram />
                    </div>
                </div>

                <div className="footer-section contact">
                    <h4>CONTATO</h4>
                    <p><FaPhoneAlt /> (11) 96865-0369</p>
                    <p><FaEnvelope /> contato@boxcross.com</p>
                    <p><FaMapMarkerAlt /> Rua Alvorada, 110 - Jardim Santo Eduardo - Embu das Artes/SP</p>
                    <p><FaClock /> Seg - Sex: 06h-10h | 16h-21h</p>
                </div>

                <div className="footer-section links">
                    <h4>LINKS RÁPIDOS</h4>
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#modality">Modalidades</a></li>
                        <li><a href="#schedule">Horários</a></li>
                        <li><a href="#coach">Coach</a></li>
                        <li><a href="#events">Eventos</a></li>
                        <li><a href="#call">Contato</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};


//add area do login no footer depois de criado