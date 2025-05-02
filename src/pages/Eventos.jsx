import React from 'react';
import styles from './Eventos.module.scss';
import { FaTrash } from 'react-icons/fa';

const Events = () => {
  const eventList = [
    {
      title: 'Competição Interna',
      date: '27/08/2025',
      time: '09:00 - 14:00',
      location: 'Box Cross Alvorada',
      registrations: 30
    },
    {
      title: 'Workshop de Técnicas Olímpicas',
      date: '15/09/2025',
      time: '14:00 - 17:00',
      location: 'Box Cross Alvorada',
      registrations: 20
    },
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
            <button className={styles.active}>Eventos</button>
        </a>
        <a href="/planos">
          <button>Planos</button>
        </a>
      </nav>

      <div className={styles.content}>
        <div className={styles.listSection}>
          <h2>Eventos Cadastrados</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Título</th>
                <th>Data</th>
                <th>Horário</th>
                <th>Local</th>
                <th>Inscrições</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {eventList.map((event, index) => (
                <tr key={index}>
                  <td>{event.title}</td>
                  <td>{event.date}</td>
                  <td>{event.time}</td>
                  <td>{event.location}</td>
                  <td>{event.registrations}</td>
                  <td><FaTrash className={styles.iconDelete} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.formSection}>
          <h2>+ Adicionar Evento</h2>
          <form className={styles.form}>
            <input type="text" placeholder="Título" />
            <input type="text" placeholder="Data" />
            <input type="text" placeholder="Horário" />
            <input type="text" placeholder="Local" />
            <textarea placeholder="Descrição" />
            <input type="text" placeholder="Link do Formulário" />
            <button type="submit">+ Adicionar Evento</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Events;
