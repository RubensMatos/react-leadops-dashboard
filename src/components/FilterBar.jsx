export default function FilterBar({ filters, setFilters, origins, owners }) {
  const update = (field) => (event) => {
    setFilters((prev) => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  return (
    <section className="filters">
      <label>
        <span>Search</span>
        <input
          type="text"
          value={filters.search}
          onChange={update('search')}
          placeholder="Nome, empresa ou tag"
        />
      </label>

      <label>
        <span>Origin</span>
        <select value={filters.origin} onChange={update('origin')}>
          <option value="all">Todas</option>
          {origins.map((origin) => (
            <option key={origin} value={origin}>
              {origin}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Owner</span>
        <select value={filters.owner} onChange={update('owner')}>
          <option value="all">Todos</option>
          {owners.map((owner) => (
            <option key={owner} value={owner}>
              {owner}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Engagement</span>
        <select value={filters.engagement} onChange={update('engagement')}>
          <option value="all">Todos</option>
          <option value="hot">Hot</option>
          <option value="warm">Warm</option>
          <option value="cold">Cold</option>
        </select>
      </label>
    </section>
  );
}
