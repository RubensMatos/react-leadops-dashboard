import LeadCard from './LeadCard.jsx';
import { currency } from '../utils/metrics.js';

export default function StageColumn({ stage, stageInfo, leads, onOpenLead, onMoveLead }) {
  const value = leads.reduce((sum, lead) => sum + lead.value, 0);

  return (
    <section className="stage-column" style={{ '--stage-accent': stageInfo.color }}>
      <header>
        <div>
          <h3>{stageInfo.label}</h3>
          <span>{leads.length} leads</span>
        </div>
        <strong>{currency.format(value)}</strong>
      </header>

      <div className="stage-content">
        {leads.length === 0 ? (
          <p className="empty-state">Nenhum lead nesta etapa.</p>
        ) : (
          leads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} onOpen={onOpenLead} onMove={onMoveLead} />
          ))
        )}
      </div>

      <p className="stage-key">key: {stage}</p>
    </section>
  );
}
