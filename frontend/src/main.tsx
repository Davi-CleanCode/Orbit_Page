/**
 * PONTO DE ENTRADA DO FRONTEND
 * ---------------------------------------------------
 * Júlia,
 * Este arquivo inicializa a aplicação React e faz o 
 * render do <App/> dentro do index.html.
 *
 * Você raramente precisa mexer aqui.
 * Só altere caso precisemos adicionar Providers,
 * Context API global ou configurações de inicialização.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '../src/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
