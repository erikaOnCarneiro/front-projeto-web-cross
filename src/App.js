import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Alunos from './pages/Alunos';
import Financas from './pages/Financas';
import Eventos from './pages/Eventos';
import Planos from './pages/Planos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/financas" element={<Financas />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/planos" element={<Planos />} />
      </Routes>
    </Router>
  );
}

export default App;

