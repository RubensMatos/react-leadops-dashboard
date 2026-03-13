import { stageMeta } from '../data/leads.js';

export const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0
});

export function buildMetrics(leads) {
  const activeLeads = leads.filter((lead) => !['won', 'lost'].includes(lead.stage));
  const wonLeads = leads.filter((lead) => lead.stage === 'won');
  const closedLeads = leads.filter((lead) => ['won', 'lost'].includes(lead.stage));
  const touchedLeads = leads.filter((lead) => lead.lastContactAt !== null);

  const responseRate = leads.length === 0 ? 0 : (touchedLeads.length / leads.length) * 100;
  const conversionRate = closedLeads.length === 0 ? 0 : (wonLeads.length / closedLeads.length) * 100;

  const now = Date.now();
  const withinSla = activeLeads.filter((lead) => {
    if (!lead.lastContactAt) {
      return false;
    }
    const diffHours = (now - new Date(lead.lastContactAt).getTime()) / 36e5;
    return diffHours <= 48;
  });
  const slaRate = activeLeads.length === 0 ? 0 : (withinSla.length / activeLeads.length) * 100;

  const pipelineValue = activeLeads.reduce((sum, lead) => sum + lead.value, 0);

  return [
    {
      id: 'pipeline-value',
      title: 'Pipeline Value',
      value: currency.format(pipelineValue),
      helper: `${activeLeads.length} leads ativos`
    },
    {
      id: 'response-rate',
      title: 'Response Rate',
      value: `${responseRate.toFixed(1)}%`,
      helper: `${touchedLeads.length}/${leads.length} leads respondidos`
    },
    {
      id: 'conversion-rate',
      title: 'Conversion Rate',
      value: `${conversionRate.toFixed(1)}%`,
      helper: `${wonLeads.length}/${closedLeads.length || 0} fechamentos`
    },
    {
      id: 'sla',
      title: 'SLA < 48h',
      value: `${slaRate.toFixed(1)}%`,
      helper: `${withinSla.length}/${activeLeads.length || 0} leads acompanhados`
    }
  ];
}

export function groupByStage(leads) {
  return leads.reduce((acc, lead) => {
    const key = lead.stage;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(lead);
    return acc;
  }, {});
}

export function stageSummary(leads) {
  return leads.reduce((acc, lead) => {
    const key = lead.stage;
    if (!acc[key]) {
      acc[key] = { count: 0, value: 0, label: stageMeta[key].label };
    }
    acc[key].count += 1;
    if (!['won', 'lost'].includes(key)) {
      acc[key].value += lead.value;
    }
    return acc;
  }, {});
}
