import React from 'react';
import styles from './Planos.module.scss';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const Plans = () => {
  const plans = [
    { name: 'Mensal', price: 'R$ 150,00', description: 'Acesso ilimitado por 1 mês' },
    { name: 'Trimestral', price: 'R$ 405,00', description: 'Acesso ilimitado por 3 meses (10% de desconto)' },
    { name: 'Semestral', price: 'R$ 765,00', description: 'Acesso ilimitado por 6 meses (15% de desconto)' },
    { name: 'Anual', price: 'R$ 1.600,00', description: 'Acesso ilimitado por 12 meses (20% de desconto)' },
    { name: 'Gympass', price: 'Variável', description: 'Integração com Gympass' },
    { name: 'TotalPass', price: 'Variável', description: 'Integração com TotalPass' },
  ];

  return (
    <div className={styles.container}>
      <h1>Painel Administrativo</h1>

      <nav className={styles.navbar}>
      <a href="/dashboard">
          <button>Dashboard</button>
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
        <button className={styles.active}>Planos</button>
        </a>
      </nav>

      <div className={styles.content}>
        <div className={styles.listSection}>
          <h2>Planos Disponíveis</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Descrição</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr key={index}>
                  <td>{plan.name}</td>
                  <td>{plan.price}</td>
                  <td>{plan.description}</td>
                  <td>
                    <FaEdit className={styles.iconEdit} />
                    <FaTrash className={styles.iconDelete} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.formSection}>
          <h2><FaPlus /> Adicionar Plano</h2>
          <form className={styles.form}>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Valor(R$)" />
            <textarea placeholder="Descrição"></textarea>
            <button type="submit">+ Adicionar Plano</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Plans;
