/**
 * CONFIGURAÇÃO DO VITE
 * ---------------------------------------------------
 * Júlia,
 * Este arquivo controla o bundler e servidor de desenvolvimento.
 *
 * Só altere quando precisarmos:
 * - Criar aliases de pastas
 * - Configurar deploys
 * - Adicionar plugins
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', 
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
  },
})
