import React from 'react';
import styles from "./Dashboard.module.scss";
import { FaUser, FaDollarSign, FaCalendarAlt } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Painel Administrativo</h1>
        <nav className={styles.navbar}>
            <a href="/dashboard">
            <button className={styles.active}>Dashboard</button>
        </a>
          <a href="/alunos">
      <button>Alunos</button>
    </a>
    <a href="/financas">
      <button>Finanças</button>
    </a>
            <a href="/eventos">
          <button>Eventos</button>
        </a>
        <a href="/planos">
          <button>Planos</button>
        </a>
        </nav>
      </header>

      <section className={styles.cards}>
        <div className={styles.card}>
          <FaUser className={styles.icon} />
          <p>Total de Alunos</p>
          <h2>3</h2>
          <span>2 ativos</span>
        </div>

        <div className={styles.card}>
          <FaDollarSign className={styles.iconGreen} />
          <p>Receita do mês</p>
          <h2>R$ 2.155,00</h2>
          <span>Previsão: R$ 7.500,00</span>
        </div>

        <div className={styles.card}>
          <GiTakeMyMoney className={styles.iconRed} />
          <p>Despesas do mês</p>
          <h2>R$ 1.300,00</h2>
          <span>Previsão: R$ 4.000,00</span>
        </div>

        <div className={styles.card}>
          <FaCalendarAlt className={styles.iconBlue} />
          <p>Próximos eventos</p>
          <h2>2</h2>
          <span>50 inscritos</span>
        </div>
      </section>

      
    </div>
  );
};

export default Dashboard;