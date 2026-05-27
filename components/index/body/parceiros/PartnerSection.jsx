// PartnersSection.jsx
import PartnerItem from './PartnerItem';

const partnersData = [
  { id: 1, icon: 'fi-rr-graduation-cap', name: 'Universidade dos Açores' },
  { id: 2, icon: 'fi-rr-hospital', name: 'Hospital Regional dos Açores' },
  { id: 3, icon: 'fi-rr-building', name: 'Governo Regional dos Açores' },
  { id: 4, icon: 'fi-rr-microscope', name: 'Centros de Investigação' },
  { id: 5, icon: 'fi-rr-globe', name: 'Parceiros Internacionais' },
];

const PartnersSection = () => {
  return (
    <section className="section section--alt" aria-labelledby="parceiros-titulo">
      <div className="container">
        <h2 className="section__title" id="parceiros-titulo">Nossos Parceiros</h2>
        <p className="section__description">
          Colaboração institucional para excelência em saúde e investigação
        </p>

        <div className="partners">
          {partnersData.map((partner) => (
            <PartnerItem 
              key={partner.id} 
              iconClass={partner.icon} 
              name={partner.name} 
            />
          ))}
        </div>

        <p className="section__description" style={{ marginTop: '20px' }}>
          + várias outras instituições colaboradoras
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;