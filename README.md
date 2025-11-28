Orbit_Page

Uma landing page temática voltada para cultura geek, com visuais modernos, animações e foco em apresentar conteúdo relevante ao público geek.
Disponível em: https://orbit-page-five.vercel.app/

O “Orbit Page” é uma landing page temática inspirada no universo geek / cultura pop.
O principal objetivo é servir como página de apresentação visual, talvez para portfólios, produtos ou conteúdo alusivo à cultura geek.

Funcionalidades

Layout responsivo (desktop, tablet, mobile)

Efeitos visuais e animações suaves

Seções de destaque para conteúdo (ex: heróis, destaque, call-to-action)

Navegação fluida

Design moderno com elementos visuais inspirados em temas espaciais / orbitais

Back end:
BACKEND — Documentação rápida de estrutura

config/

- db.js → Conexão com o banco de dados.

controllers/

- formController.js → Regras de formulário.
- newsletterController.js → Regras da newsletter.

graphql/

- schema.js → Queries e mutations do GraphQL.

models/

- init.sql → Script para criar as tabelas.
- SubscriberModel.js → Modelo dos assinantes.

routes/

- index.js → Carrega todas as rotas.
- newsletterRoutes.js → Rotas da newsletter.

services/

- api.js → Configuração de APIs externas.
- EmailService.js → Lógica de envio de emails.

app.js → App Express (middlewares, rotas, configs).
server.js → Inicia o servidor Node.

Front end:
App.tsx

Estrutura visual principal da página.
Onde montamos as seções gerais.

main.tsx

Inicializa o React e renderiza o App.

components/

Pasta de componentes reutilizáveis.

OrbitSlider.tsx → componente responsável pelo slider animado.

slider.css → estilos exclusivos do slider.

index.css

Folha de estilo global.
Define resets, fontes e utilidades da interface.

public/

Imagens, logos e arquivos estáticos.

tailwind.config.js

Personalização do tema visual, cores e animações.

vite.config.ts

Configuração do bundler e plugins

🚀 Guia Rápido — Como Rodar o Projeto Completo (Backend + Frontend)

Este guia mostra como instalar, iniciar e entender todo o ecossistema da Orbit, tanto no frontend quanto no backend.

🔧 1. Instalando Dependências

Assim que clonar o projeto, entre nas pastas backend e frontend e instale tudo.

📌 Backend
cd backend
npm install

📌 Frontend
cd frontend
npm install

Esses comandos baixam todas as dependências necessárias para rodar o servidor, APIs, interface e build.

▶️ 2. Rodando o Backend

Dentro da pasta backend:

npm run dev

Ou, se estiver usando o script padrão:

npm start

O backend faz:

Iniciar servidor Express

Conectar ao banco de dados (db.js)

Carregar modelos

Registrar rotas (newsletter, forms, APIs)

Disponibilizar GraphQL (se configurado)

O servidor geralmente roda em:

http://localhost:3000

🖥️ 3. Rodando o Frontend

Dentro da pasta frontend:

npm run dev

O frontend funciona com Vite, então vai rodar em:

http://localhost:5173

🔗 4. Como Backend e Frontend se Conectam
✔️ O FRONT envia requisições ao BACK via:

Rotas REST (/api/...)

GraphQL (se configurado)

Endpoints de newsletter e formulários

✔️ Fluxo geral:

Usuário acessa a landing → Frontend (React)

Frontend faz requisições → Backend (Node Express)

Backend processa e salva dados → Banco de Dados

Backend retorna resposta → Frontend atualiza tela

🧬 5. Ordem Correta para Rodar Tudo

1️⃣ Rodar backend primeiro

npm run dev

2️⃣ Depois rodar frontend

npm run dev

3️⃣ Abrir o navegador

http://localhost:5173

📦 6. Se for rodar tudo de novo outro dia

Apenas reabrir o terminal e fazer:

Backend:
cd backend
npm run dev

Frontend:
cd frontend
npm run dev

Não precisa instalar dependências novamente.

🧩 7. Resumo do Funcionamento (bem simples)

Backend = lógica, API, banco, regras de negócio

Frontend = interface, componentes React, visual

Ambos conversam entre si via HTTP

O frontend nunca funciona sem o backend rodando (em modo completo)
