# LeadOps Dashboard (React)

Projeto React para operacao comercial remota com pipeline de leads, filtros, metricas e historico de interacoes.

## Objetivo

Demonstrar dominio de front-end orientado a produto com uma interface de operacao real para times comerciais e tecnicos.

## Stack

- React 18
- Vite 5
- CSS moderno (sem framework)

## Funcionalidades

- Pipeline Kanban com 6 etapas (`new`, `contacted`, `qualified`, `proposal`, `won`, `lost`)
- Filtros por busca, origem, responsavel e nivel de engajamento
- Cards de metricas:
  - Pipeline Value
  - Response Rate
  - Conversion Rate
  - SLA de acompanhamento (< 48h)
- Painel lateral com detalhes e historico de interacoes por lead
- Acao rapida para mover lead entre etapas (`Back` e `Next`)
- Layout responsivo para desktop e mobile

## Estrutura

- `src/App.jsx`: composicao principal e regras de estado
- `src/components/*`: componentes de UI (filtros, cards, colunas, detalhes)
- `src/data/leads.js`: base mockada para modo demonstracao
- `src/utils/metrics.js`: calculos de metricas e agrupamentos

## Como executar localmente

```bash
cd projects/react-leadops-dashboard
npm install
npm run dev -- --host 127.0.0.1 --port 5174
```

Abrir: `http://127.0.0.1:5174`

## Build de validacao

```bash
cd projects/react-leadops-dashboard
npm run build
```

## Uso em portfolio

Este projeto foi desenhado para demonstrar:

1. Organizacao de estado e filtros complexos
2. Modelagem de funil comercial com contexto de negocio
3. Qualidade visual profissional com identidade propria
4. Estrutura escalavel para evolucao em integracao com backend real

## Proximos passos sugeridos

- Integrar com API real (Node/Python/PHP)
- Adicionar autenticacao e perfil por usuario
- Persistir movimentacoes em banco
- Criar dashboard de metas por periodo
