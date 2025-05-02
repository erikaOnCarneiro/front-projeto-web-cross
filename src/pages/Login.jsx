import React from 'react';
import styles from './Login.module.scss';

export default function Login() {
  return (
    <div className={styles.container}>
      <h1>Portal Administrativo</h1>
      <form className={styles.loginForm}>
        <label htmlFor="email">Usuario:</label>
        <input type="text" id="email" placeholder="Digite seu usuário" required />

        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" placeholder="Digite sua senha" required />

        <a href="/dashboard">
      <button>Entrar</button>
    </a>
      </form>

      
    </div>
  );
}
