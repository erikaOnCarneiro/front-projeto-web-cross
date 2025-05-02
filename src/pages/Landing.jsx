import React from 'react';
import styles from './Landing.module.scss';

export default function Landing() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1><span>CROSS</span> É PARA TODOS</h1>
          <p>No Box Cross Alvorada, acreditamos que todos podem evoluir com o CrossFit.</p>
          <a href="/login">
      <button>faça login</button>
    </a>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.text}>
          <h2>Sobre o <span>Box Cross Alvorada</span></h2>
          <p>
            Fundado com a missão de tornar o CrossFit acessível a todos, o Box Cross Alvorada é referência em treino funcional...
          </p>
          <ul>
            <li>Coaches certificados e experientes</li>
            <li>Ambiente acolhedor</li>
            <li>5+ anos de experiência</li>
          </ul>
        </div>
        <img src="/sobre.jpg" alt="Treinando Cross" />
      </section>

      <section className={styles.modalidades}>
        <h2>Nossas Modalidades</h2>
        <div className={styles.cards}>
          {['CrossFit Iniciante', 'CrossFit Intermediário', 'CrossFit Avançado', 'CrossFit Kids', 'CrossFit Sênior', 'Funcionais Específicos'].map((mod, i) => (
            <div key={i} className={styles.card}>
              <img src={`/mod${i + 1}.jpg`} alt={mod} />
              <h3>{mod}</h3>
              <p>Descrição curta da modalidade.</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.horarios}>
        <h2>Grade Horária</h2>
        <table>
          <thead>
            <tr>
              <th>Horário</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
            </tr>
          </thead>
          <tbody>
            {[7, 8, 9, 10, 16, 19].map(h => (
              <tr key={h}>
                <td>{h}:00</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
                <td>CrossFit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.coach}>
        <h2>Conheça Nosso Coach</h2>
        <div className={styles.perfil}>
          <img src="./coach.jpg" alt="Coach Carlos" />
          <div>
            <h3>Carlos Oliveira</h3>
            <p>Coach Level 2 Trainer | Especialista em Movimentos Olímpicos...</p>
          </div>
        </div>
      </section>

      <section className={styles.eventos}>
        <h2>Próximos Eventos</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="./interna.jpg" alt="Evento 1" />
            <h3>Competição Interna</h3>
            <p>27/03/2025 - 08h às 15h</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUvrt6gBNSpXMFW5HH8bnGaG6X6c-B1vlscneuvncXZmv9Kg/viewform?usp=header" target="_blank" rel="noopener noreferrer">
            <button>Inscreva-se</button>
            </a>
          </div>
          <div className={styles.card}>
            <img src="./work.jpg" alt="Evento 2" />
            <h3>Workshop de Técnicas Olímpicas</h3>
            <p>02/04/2025 - 09h às 15h</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeex42stdTo_kXCUKW5fThx_243wvuusyfHJW41b0CIrzg_3Q/viewform?usp=header" target="_blank" rel="noopener noreferrer">
            <button>Inscreva-se</button>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.callToAction}>
  <h2>Pronto para transformar seu corpo e sua mente?</h2>
  <a href="https://wa.me/5511968650369" target="_blank" rel="noopener noreferrer">
    <button>Agende seu treino gratuito</button>
  </a>
</section>


      <footer className={styles.footer}>
        <div>
          <h3>Box Cross Alvorada</h3>
          <p>Av. Principal, 123 - Alvorada/RS</p>
          <p>(51) 99999-9999</p>
        </div>
        <div>
          <h4>Contato</h4>
          <p>Email: contato@boxcrossalvorada.com</p>
        </div>
        <div>
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#">Modalidades</a></li>
            <li><a href="#">Horários</a></li>
            <li><a href="#">Treino Grátis</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}