export const stageOrder = ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost'];

export const stageMeta = {
  new: { label: 'New Inbound', color: '#1f7a8c' },
  contacted: { label: 'Contacted', color: '#f59e0b' },
  qualified: { label: 'Qualified', color: '#0f766e' },
  proposal: { label: 'Proposal', color: '#b45309' },
  won: { label: 'Won', color: '#15803d' },
  lost: { label: 'Lost', color: '#b91c1c' }
};

export const initialLeads = [
  {
    id: 'L-1001',
    name: 'Marina Costa',
    company: 'Orion Data',
    origin: 'linkedin',
    owner: 'Rubens',
    stage: 'new',
    engagement: 'hot',
    value: 38000,
    createdAt: '2026-03-10T11:00:00Z',
    lastContactAt: null,
    nextActionAt: '2026-03-14T14:00:00Z',
    tags: ['SaaS', 'B2B'],
    history: [
      {
        id: 'H-1',
        when: '2026-03-10T11:00:00Z',
        channel: 'inbound',
        note: 'Lead chegou via post tecnico no LinkedIn.'
      }
    ]
  },
  {
    id: 'L-1002',
    name: 'Rafael Gomes',
    company: 'BlueVolt',
    origin: 'github',
    owner: 'Rubens',
    stage: 'contacted',
    engagement: 'warm',
    value: 22000,
    createdAt: '2026-03-08T09:00:00Z',
    lastContactAt: '2026-03-12T16:20:00Z',
    nextActionAt: '2026-03-15T15:30:00Z',
    tags: ['API', 'Refactor'],
    history: [
      {
        id: 'H-2',
        when: '2026-03-08T09:00:00Z',
        channel: 'github',
        note: 'Contato apos avaliacao de repositorio.'
      },
      {
        id: 'H-3',
        when: '2026-03-12T16:20:00Z',
        channel: 'whatsapp',
        note: 'Apresentacao inicial com foco em integracoes.'
      }
    ]
  },
  {
    id: 'L-1003',
    name: 'Camila Nunes',
    company: 'FinCenter',
    origin: 'referral',
    owner: 'Livia',
    stage: 'qualified',
    engagement: 'hot',
    value: 54000,
    createdAt: '2026-03-03T10:00:00Z',
    lastContactAt: '2026-03-13T09:15:00Z',
    nextActionAt: '2026-03-14T17:00:00Z',
    tags: ['Fintech', 'Cloud'],
    history: [
      {
        id: 'H-4',
        when: '2026-03-04T12:30:00Z',
        channel: 'call',
        note: 'Mapeamento de escopo para modernizacao de backend.'
      },
      {
        id: 'H-5',
        when: '2026-03-13T09:15:00Z',
        channel: 'email',
        note: 'Lead confirmou orcamento alvo para squad remoto.'
      }
    ]
  },
  {
    id: 'L-1004',
    name: 'Julio Fernandes',
    company: 'Trackly',
    origin: 'site',
    owner: 'Rubens',
    stage: 'proposal',
    engagement: 'warm',
    value: 31000,
    createdAt: '2026-03-01T15:00:00Z',
    lastContactAt: '2026-03-11T13:00:00Z',
    nextActionAt: '2026-03-14T11:00:00Z',
    tags: ['React', 'Dashboard'],
    history: [
      {
        id: 'H-6',
        when: '2026-03-02T09:00:00Z',
        channel: 'email',
        note: 'Diagnostico de gargalos no painel comercial.'
      },
      {
        id: 'H-7',
        when: '2026-03-11T13:00:00Z',
        channel: 'meeting',
        note: 'Proposta tecnica entregue para etapa MVP.'
      }
    ]
  },
  {
    id: 'L-1005',
    name: 'Priscila Lima',
    company: 'Nexo Agro',
    origin: 'whatsapp',
    owner: 'Livia',
    stage: 'won',
    engagement: 'hot',
    value: 47000,
    createdAt: '2026-02-24T08:00:00Z',
    lastContactAt: '2026-03-10T14:45:00Z',
    nextActionAt: null,
    tags: ['Sustentacao', 'AWS'],
    history: [
      {
        id: 'H-8',
        when: '2026-02-24T08:00:00Z',
        channel: 'whatsapp',
        note: 'Lead entrou para reforco tecnico emergencial.'
      },
      {
        id: 'H-9',
        when: '2026-03-10T14:45:00Z',
        channel: 'meeting',
        note: 'Contrato fechado para 4 meses de entrega continua.'
      }
    ]
  },
  {
    id: 'L-1006',
    name: 'Bruno Almeida',
    company: 'InsureFast',
    origin: 'linkedin',
    owner: 'Iara',
    stage: 'lost',
    engagement: 'cold',
    value: 29000,
    createdAt: '2026-02-20T09:00:00Z',
    lastContactAt: '2026-03-02T18:10:00Z',
    nextActionAt: null,
    tags: ['API', 'Legacy'],
    history: [
      {
        id: 'H-10',
        when: '2026-03-02T18:10:00Z',
        channel: 'email',
        note: 'Projeto pausado por budget no trimestre.'
      }
    ]
  },
  {
    id: 'L-1007',
    name: 'Vitoria Reis',
    company: 'Pulse Retail',
    origin: 'github',
    owner: 'Rubens',
    stage: 'qualified',
    engagement: 'warm',
    value: 26000,
    createdAt: '2026-03-05T13:00:00Z',
    lastContactAt: '2026-03-12T10:00:00Z',
    nextActionAt: '2026-03-14T16:30:00Z',
    tags: ['E-commerce', 'Vue'],
    history: [
      {
        id: 'H-11',
        when: '2026-03-05T13:00:00Z',
        channel: 'github',
        note: 'Discussao inicial sobre migracao de dashboard.'
      },
      {
        id: 'H-12',
        when: '2026-03-12T10:00:00Z',
        channel: 'call',
        note: 'Aprovada etapa de discovery tecnico.'
      }
    ]
  },
  {
    id: 'L-1008',
    name: 'Henrique Prado',
    company: 'Atlas Metrics',
    origin: 'site',
    owner: 'Iara',
    stage: 'new',
    engagement: 'warm',
    value: 18000,
    createdAt: '2026-03-12T18:00:00Z',
    lastContactAt: null,
    nextActionAt: '2026-03-14T10:30:00Z',
    tags: ['Analytics'],
    history: [
      {
        id: 'H-13',
        when: '2026-03-12T18:00:00Z',
        channel: 'site',
        note: 'Pedido de escopo para observabilidade de APIs.'
      }
    ]
  },
  {
    id: 'L-1009',
    name: 'Larissa Souza',
    company: 'CoreBank',
    origin: 'referral',
    owner: 'Rubens',
    stage: 'proposal',
    engagement: 'hot',
    value: 62000,
    createdAt: '2026-02-28T12:00:00Z',
    lastContactAt: '2026-03-13T08:45:00Z',
    nextActionAt: '2026-03-14T19:00:00Z',
    tags: ['Arquitetura', 'AWS'],
    history: [
      {
        id: 'H-14',
        when: '2026-03-01T09:30:00Z',
        channel: 'meeting',
        note: 'Kickoff tecnico para reestruturacao de servicos.'
      },
      {
        id: 'H-15',
        when: '2026-03-13T08:45:00Z',
        channel: 'email',
        note: 'Revisao final da proposta com escopo em fases.'
      }
    ]
  },
  {
    id: 'L-1010',
    name: 'Diego Pires',
    company: 'FreshLog',
    origin: 'whatsapp',
    owner: 'Livia',
    stage: 'contacted',
    engagement: 'cold',
    value: 15000,
    createdAt: '2026-03-06T14:00:00Z',
    lastContactAt: '2026-03-09T15:40:00Z',
    nextActionAt: '2026-03-15T13:00:00Z',
    tags: ['CRUD', 'Manutencao'],
    history: [
      {
        id: 'H-16',
        when: '2026-03-09T15:40:00Z',
        channel: 'whatsapp',
        note: 'Lead pediu estudo tecnico antes de avancar.'
      }
    ]
  },
  {
    id: 'L-1011',
    name: 'Aline Moura',
    company: 'Nova Energia',
    origin: 'linkedin',
    owner: 'Iara',
    stage: 'won',
    engagement: 'warm',
    value: 41000,
    createdAt: '2026-02-18T09:00:00Z',
    lastContactAt: '2026-03-06T10:20:00Z',
    nextActionAt: null,
    tags: ['Node.js', 'Integracao'],
    history: [
      {
        id: 'H-17',
        when: '2026-03-06T10:20:00Z',
        channel: 'meeting',
        note: 'Contrato assinado para integracao com ERP externo.'
      }
    ]
  },
  {
    id: 'L-1012',
    name: 'Pedro Salomao',
    company: 'Jupiter Labs',
    origin: 'github',
    owner: 'Rubens',
    stage: 'lost',
    engagement: 'cold',
    value: 24000,
    createdAt: '2026-02-15T09:00:00Z',
    lastContactAt: '2026-02-28T18:00:00Z',
    nextActionAt: null,
    tags: ['Python'],
    history: [
      {
        id: 'H-18',
        when: '2026-02-28T18:00:00Z',
        channel: 'email',
        note: 'Lead encerrou processo por prioridade interna.'
      }
    ]
  }
];
