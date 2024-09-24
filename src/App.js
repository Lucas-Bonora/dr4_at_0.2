import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Resposta1A from './respostas/resposta1a';
import Resposta1B from './respostas/resposta1b';
import Resposta1C from './respostas/resposta1c';  
import Resposta2A from './respostas/resposta2a';
import Resposta2B from './respostas/resposta2b';
import Resposta2C from './respostas/resposta2c';
import Resposta2D from './respostas/resposta2d';
import Resposta3A from './respostas/resposta3a';
import Resposta3B from './respostas/resposta3b';
import Resposta3C from './respostas/resposta3c';
import Resposta3D from './respostas/resposta3d';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ textAlign: 'center', margin: '20px' }}>
          <Link to="/">Home</Link> | 
          <Link to="/resposta1a"> Resposta 1A</Link> | 
          <Link to="/resposta1b"> Resposta 1B</Link> | 
          <Link to="/resposta1c"> Resposta 1C</Link> | 
          <Link to="/resposta2a"> Resposta 2A</Link> | 
          <Link to="/resposta2b"> Resposta 2B</Link> | 
          <Link to="/resposta2c"> Resposta 2C</Link> | 
          <Link to="/resposta2d"> Resposta 2D</Link> | 
          <Link to="/resposta3a"> Resposta 3A</Link> | 
          <Link to="/resposta3b"> Resposta 3B</Link> | 
          <Link to="/resposta3c"> Resposta 3C</Link> | 
          <Link to="/resposta3d"> Resposta 3D</Link> | 
          <Link to="/admin-ligado"> Administrador Ligado</Link> | 
          <Link to="/admin-desligado"> Administrador Desligado</Link> | 
          <Link to="/brasil-selecionado"> Brasil Selecionado</Link> | 
          <Link to="/formulario-preenchido"> Formulário Preenchido</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1 style={{ textAlign: 'center' }}>Bem-vindo ao Menu de Respostas</h1>} />
          <Route path="/resposta1a" element={<Resposta1A pergunta="Quais são as desvantagens de implementar um inline event?" resposta="As desvantagens são: dificil manutenção visto que iinline events tornam o cógigo mais verboso, não poder reutilizar em outros componentes e queda na performance do site." />} />
          <Route path="/resposta1b" element={<Resposta1B />} />
          <Route path="/resposta1c" element={<Resposta1C />} />
          <Route path="/resposta2a" element={<Resposta2A />} />
          <Route path="/resposta2b" element={<Resposta2B />} />
          <Route path="/resposta2c" element={<Resposta2C />} />
          <Route path="/resposta2d" element={<Resposta2D />} />
          <Route path="/resposta3a" element={<Resposta3A />} />
          <Route path="/resposta3b" element={<Resposta3B />} />
          <Route path="/resposta3c" element={<Resposta3C />} />
          <Route path="/resposta3d" element={<Resposta3D />} />
          <Route path="/admin-ligado" element={<Resposta2A checkboxChecked={true} />} />
          <Route path="/admin-desligado" element={<Resposta2A checkboxChecked={false} />} />
          <Route path="/brasil-selecionado" element={<Resposta2B paisSelecionado="Brasil" />} />
          <Route path="/formulario-preenchido" element={<Resposta3A dadosPreenchidos={{ nome: "Lucas Bonora", email: "lucas@bonora.com", telefone: "(11) 91234-5678", mensagem: "Formulário preenchido com dados fictícios." }} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

