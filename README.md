# Cron Lembretes — Frontend

Interface web para criar, listar e excluir lembretes agendados, construída com React, TypeScript e Vite. O frontend consome uma API REST (executando por padrão em `http://localhost:3333`) que dispara os lembretes via cron job.

## Funcionalidades

- Criar lembretes com título e data/hora agendada
- Listar lembretes com status (pendente / enviado)
- Excluir lembretes
- Atualização automática da lista a cada segundo

## Pré-requisitos

- Node.js 18+
- A API de lembretes rodando em `http://localhost:3333` (veja `src/api.ts`)

## Instalação

```bash
npm install
```

## Uso

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173` (padrão do Vite).

## Scripts disponíveis

| Comando           | Descrição                                  |
| ------------------ | ------------------------------------------- |
| `npm run dev`      | Inicia o servidor de desenvolvimento         |
| `npm run build`    | Compila o projeto (TypeScript + Vite build)  |
| `npm run preview`  | Serve o build de produção localmente         |
| `npm run lint`     | Executa o ESLint                             |

## Estrutura do projeto

```
src/
├── api.ts      # Funções de comunicação com a API de lembretes
├── App.tsx     # Componente principal (formulário e listagem)
└── main.tsx    # Ponto de entrada da aplicação
```

## Tecnologias

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
