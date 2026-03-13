import { useMemo, useState } from 'react';
import FilterBar from './components/FilterBar.jsx';
import LeadDetails from './components/LeadDetails.jsx';
import MetricCard from './components/MetricCard.jsx';
import StageColumn from './components/StageColumn.jsx';
import { initialLeads, stageMeta, stageOrder } from './data/leads.js';
import { buildMetrics, groupByStage, stageSummary } from './utils/metrics.js';

const metricAccents = ['#2563eb', '#0f766e', '#b45309', '#1d4ed8'];

function fromNow(hoursAhead = 24) {
  return new Date(Date.now() + hoursAhead * 3600 * 1000).toISOString();
}

export default function App() {
  const [leads, setLeads] = useState(initialLeads);
  const [selectedLeadId, setSelectedLeadId] = useState(initialLeads[0].id);
  const [filters, setFilters] = useState({
    search: '',
    origin: 'all',
    owner: 'all',
    engagement: 'all'
  });
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const origins = useMemo(
    () => [...new Set(leads.map((lead) => lead.origin))].sort((a, b) => a.localeCompare(b)),
    [leads]
  );
  const owners = useMemo(
    () => [...new Set(leads.map((lead) => lead.owner))].sort((a, b) => a.localeCompare(b)),
    [leads]
  );

  const filteredLeads = useMemo(() => {
    const term = filters.search.trim().toLowerCase();

    return leads.filter((lead) => {
      if (filters.origin !== 'all' && lead.origin !== filters.origin) {
        return false;
      }
      if (filters.owner !== 'all' && lead.owner !== filters.owner) {
        return false;
      }
      if (filters.engagement !== 'all' && lead.engagement !== filters.engagement) {
        return false;
      }
      if (!term) {
        return true;
      }

      const haystack = [lead.name, lead.company, lead.owner, lead.origin, ...lead.tags]
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [filters, leads]);

  const metrics = useMemo(() => buildMetrics(filteredLeads), [filteredLeads]);
  const groupedLeads = useMemo(() => groupByStage(filteredLeads), [filteredLeads]);
  const summary = useMemo(() => stageSummary(filteredLeads), [filteredLeads]);
  const selectedLead = useMemo(
    () => leads.find((lead) => lead.id === selectedLeadId) || null,
    [leads, selectedLeadId]
  );

  const moveLead = (leadId, targetStage) => {
    setLeads((previous) =>
      previous.map((lead) => {
        if (lead.id !== leadId || lead.stage === targetStage) {
          return lead;
        }

        const now = new Date().toISOString();
        const nextActionAt = ['won', 'lost'].includes(targetStage) ? null : fromNow(24);

        return {
          ...lead,
          stage: targetStage,
          lastContactAt: now,
          nextActionAt,
          history: [
            {
              id: `AUTO-${Math.random().toString(36).slice(2, 9)}`,
              when: now,
              channel: 'workflow',
              note: `Lead movido para ${stageMeta[targetStage].label}.`
            },
            ...lead.history
          ]
        };
      })
    );

    setLastUpdated(new Date());
  };

  return (
    <div className="app-shell">
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />

      <header className="hero">
        <div>
          <p className="tagline">React Project | LeadOps Dashboard</p>
          <h1>Pipeline comercial para operacao remota com visao de performance.</h1>
          <p>
            Projeto de portfolio orientado a times de vendas tech: filtro rapido, pipeline por etapa,
            historico de interacoes e metricas para acompanhamento diario.
          </p>
        </div>

        <div className="hero-meta">
          <span>Lead base: {leads.length}</span>
          <span>Visible now: {filteredLeads.length}</span>
          <span>
            Updated: {lastUpdated.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })}
          </span>
        </div>
      </header>

      <FilterBar filters={filters} setFilters={setFilters} origins={origins} owners={owners} />

      <section className="metrics-grid">
        {metrics.map((metric, index) => (
          <MetricCard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            helper={metric.helper}
            accent={metricAccents[index % metricAccents.length]}
          />
        ))}
      </section>

      <section className="stage-overview">
        {stageOrder.map((stage) => {
          const item = summary[stage] || { count: 0, value: 0, label: stageMeta[stage].label };
          return (
            <article key={stage} className="overview-chip" style={{ '--chip-accent': stageMeta[stage].color }}>
              <strong>{item.label}</strong>
              <span>{item.count} leads</span>
            </article>
          );
        })}
      </section>

      <section className="workspace">
        <div className="kanban-board">
          {stageOrder.map((stage) => (
            <StageColumn
              key={stage}
              stage={stage}
              stageInfo={stageMeta[stage]}
              leads={groupedLeads[stage] || []}
              onOpenLead={setSelectedLeadId}
              onMoveLead={moveLead}
            />
          ))}
        </div>

        <LeadDetails lead={selectedLead} stageLabel={selectedLead ? stageMeta[selectedLead.stage].label : ''} />
      </section>
    </div>
  );
}
