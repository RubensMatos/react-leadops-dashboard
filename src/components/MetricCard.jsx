export default function MetricCard({ title, value, helper, accent }) {
  return (
    <article className="metric-card" style={{ '--metric-accent': accent }}>
      <p className="metric-title">{title}</p>
      <strong className="metric-value">{value}</strong>
      <p className="metric-helper">{helper}</p>
    </article>
  );
}
