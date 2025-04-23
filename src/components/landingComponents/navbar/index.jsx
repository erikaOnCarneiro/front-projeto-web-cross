import './index.scss';

import React from 'react';

import { FaInstagram, FaWhatsapp, FaUser } from 'react-icons/fa';
import logo from '../../../assets/logo/Logo.png'

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo Cross Alvorada" />
          <span><strong>BOX</strong><span className="highlight">CROSS</span> ALVORADA</span>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Início</a></li>
          <li><a href="#about">Sobre</a></li>
        <li><a href="#modality">Modalidades</a></li>
          <li><a href="#schedule">Horários</a></li>
          <li><a href="#coach">Coach</a></li>
          <li><a href="#events">Eventos</a></li>
        </ul>

        <div className="nav-actions">
          <div className="social-icons">
            <a href="https://instagram.com/seuperfil" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/55SEUNUMERO" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="/login" className="login-btn">
            <FaUser /> LOGIN
          </a>
          </div>
        </div>
      </nav>
    </header>
  );
}