import { currency } from '../utils/metrics.js';

function formatDate(dateText) {
  if (!dateText) {
    return 'Sem registro';
  }
  const date = new Date(dateText);
  return date.toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  });
}

export default function LeadDetails({ lead, stageLabel }) {
  if (!lead) {
    return (
      <aside className="lead-details empty">
        <h3>Lead details</h3>
        <p>Selecione um lead no pipeline para visualizar historico e dados completos.</p>
      </aside>
    );
  }

  return (
    <aside className="lead-details">
      <header>
        <div>
          <h3>{lead.company}</h3>
          <p>{lead.name}</p>
        </div>
        <span className={`engagement ${lead.engagement}`}>{lead.engagement}</span>
      </header>

      <dl>
        <div>
          <dt>Stage</dt>
          <dd>{stageLabel}</dd>
        </div>
        <div>
          <dt>Owner</dt>
          <dd>{lead.owner}</dd>
        </div>
        <div>
          <dt>Origin</dt>
          <dd>{lead.origin}</dd>
        </div>
        <div>
          <dt>Value</dt>
          <dd>{currency.format(lead.value)}</dd>
        </div>
        <div>
          <dt>Last contact</dt>
          <dd>{formatDate(lead.lastContactAt)}</dd>
        </div>
        <div>
          <dt>Next action</dt>
          <dd>{formatDate(lead.nextActionAt)}</dd>
        </div>
      </dl>

      <section className="history-section">
        <h4>Interaction history</h4>
        <ul>
          {lead.history.map((item) => (
            <li key={item.id}>
              <span>{formatDate(item.when)}</span>
              <strong>{item.channel}</strong>
              <p>{item.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
