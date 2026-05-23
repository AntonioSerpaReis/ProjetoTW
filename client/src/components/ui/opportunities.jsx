export function OpportunitiesSection() {
  return (
    <section id="oportunidades" className="section" aria-labelledby="oportunidades-titulo">
      <div className="container">
        <h2 className="section__title" id="oportunidades-titulo">Oportunidades</h2>
        <p className="section__description">Junte-se a nós na construção do futuro da saúde</p>
        <div className="opportunities">
          {opportunities.map(opp => (
            <OpportunityCard key={opp.id} {...opp} />
          ))}
        </div>
      </div>
    </section>
  );
}