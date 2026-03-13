import { currency } from '../utils/metrics.js';

const stageFlow = ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost'];

export default function LeadCard({ lead, onOpen, onMove }) {
  const stageIndex = stageFlow.indexOf(lead.stage);
  const prevStage = stageFlow[Math.max(stageIndex - 1, 0)];
  const nextStage = stageFlow[Math.min(stageIndex + 1, stageFlow.length - 1)];

  const canGoBack = prevStage !== lead.stage;
  const canAdvance = nextStage !== lead.stage;

  return (
    <article className="lead-card">
      <header>
        <button type="button" className="lead-title" onClick={() => onOpen(lead.id)}>
          {lead.company}
        </button>
        <span className={`engagement ${lead.engagement}`}>{lead.engagement}</span>
      </header>

      <p className="lead-person">{lead.name}</p>
      <p className="lead-meta">
        <span>{lead.owner}</span>
        <span>{lead.origin}</span>
      </p>

      <div className="lead-tags">
        {lead.tags.map((tag) => (
          <small key={tag}>{tag}</small>
        ))}
      </div>

      <footer>
        <strong>{currency.format(lead.value)}</strong>
        <div className="lead-actions">
          <button type="button" disabled={!canGoBack} onClick={() => onMove(lead.id, prevStage)}>
            Back
          </button>
          <button type="button" disabled={!canAdvance} onClick={() => onMove(lead.id, nextStage)}>
            Next
          </button>
        </div>
      </footer>
    </article>
  );
}
