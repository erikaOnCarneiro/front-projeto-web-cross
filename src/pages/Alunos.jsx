// Students.jsx
import React from 'react';
import styles from './Alunos.module.scss';
import { FaUser, FaEdit, FaTrash } from 'react-icons/fa';

const Students = () => {
  const students = [
    { name: 'Arthur Henrique', email: 'arthur@gmail.com', phone: '(11) 99999-1111', plan: 'Mensal', level: 'Iniciante', status: 'Ativo' },
    { name: 'Beatriz Silva', email: 'beatriz@email.com', phone: '(11) 99999-2222', plan: 'Anual', level: 'Avançado', status: 'Inativo' },
    { name: 'Pedro Henrique', email: 'pedro@gmail.com', phone: '(11) 99999-3333', plan: 'Mensal', level: 'Intermediário', status: 'Ativo' },
  ];

  return (
    <div className={styles.container}>
      <h1>Painel Administrativo</h1>

      <nav className={styles.navbar}>
      <a href="/dashboard">
          <button>Dashboard</button>
        </a>
          <a href="/alunos">
          <button className={styles.active}>Alunos</button>
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

      <div className={styles.content}>
        <div className={styles.listSection}>
          <h2>Lista de Alunos</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Plano</th>
                <th>Nível</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.plan}</td>
                  <td>{student.level}</td>
                  <td className={student.status === 'Ativo' ? styles.activeStatus : styles.inactiveStatus}>{student.status}</td>
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
          <h2><FaUser /> Adicionar Aluno</h2>
          <form className={styles.form}>
            <input type="text" placeholder="Nome Completo" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Telefone" />
            <div className={styles.inlineInputs}>
              <input type="text" placeholder="Data de nascimento" />
              <input type="text" placeholder="Gênero" />
            </div>
            <input type="text" placeholder="Endereço completo" />
            <div className={styles.inlineInputs}>
              <input type="text" placeholder="Plano" />
              <input type="text" placeholder="Origem" />
            </div>
            <div className={styles.inlineInputs}>
              <input type="text" placeholder="Nível de experiência" />
              <input type="text" placeholder="Foto" />
            </div>
            <textarea placeholder="Descrição"></textarea>
            <div className={styles.inlineInputs}>
              <input type="text" placeholder="Forma de Pagamento" />
              <input type="text" placeholder="Dia de vencimento" />
            </div>
            <label className={styles.checkbox}>
              <input type="checkbox" /> Declaro que li e concordo com os termos
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Students;
