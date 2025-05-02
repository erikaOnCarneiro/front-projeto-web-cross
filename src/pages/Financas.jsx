import React from 'react';
import styles from './Financas.module.scss';
import { FaDollarSign, FaTrash, FaEdit } from 'react-icons/fa';

const Finance = () => {
  const transactions = [
    { description: 'Mensalidade - Arthur Henrique', value: 'R$ 150,00', date: '30/03/2025', type: 'Receita' },
    { description: 'Anual - Beatriz Silva', value: 'R$ 1.600,00', date: '04/04/2025', type: 'Receita' },
    { description: 'Mensalidade - Pedro Henrique', value: 'R$ 150,00', date: '10/04/2025', type: 'Receita' },
    { description: 'Manutenção Ar Condicionado', value: 'R$ 500,00', date: '01/04/2025', type: 'Despesa' },
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
    <button className={styles.active}>Finanças</button>
    </a>
            <a href="/eventos">
          <button>Eventos</button>
        </a>
        <a href="/planos">
          <button>Planos</button>
        </a>
      </nav>

      <div className={styles.content}>
        <div className={styles.listSection}>
          <h2>Registro Financeiro</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data</th>
                <th>Tipo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.value}</td>
                  <td>{item.date}</td>
                  <td className={item.type === 'Receita' ? styles.income : styles.expense}>{item.type}</td>
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
          <h2><FaDollarSign /> Adicionar Transação</h2>
          <form className={styles.form}>
            <input type="text" placeholder="Descrição" />
            <input type="text" placeholder="Valor(R$)" />
            <input type="date" placeholder="Data" />
            <input type="text" placeholder="Tipo" />
            <button type="submit" className={styles.submitButton}>+ Adicionar Transação</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Finance;
