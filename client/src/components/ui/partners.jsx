export function PartnersSection() {
  return (
    <section id="parceiros" className="section section--alt" aria-labelledby="parceiros-titulo">
      <div className="container">
        <h2 className="section__title" id="parceiros-titulo">Nossos Parceiros</h2>
        <p className="section__description">Colaboração institucional para excelência em saúde e investigação</p>
        <div className="partners">
          {partners.map(partner => (
            <PartnerItem key={partner.id} {...partner} />
          ))}
        </div>
        <p className="section__description" style={{ marginTop: '20px' }}>+ várias outras instituições colaboradoras</p>
      </div>
    </section>
  );
}