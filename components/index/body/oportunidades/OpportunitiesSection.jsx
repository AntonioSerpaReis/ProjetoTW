// components/OpportunitiesSection.jsx
import OpportunityCard from './OpportunityCard';

const opportunitiesData = [
  { iconClass: 'fi-rr-graduation-cap', title: 'Estágios', text: 'Programas de estágio em investigação clínica e áreas tecnológicas de saúde.' },
  { iconClass: 'fi-rr-microscope', title: 'Projetos de Investigação', text: 'Oportunidades de participação em projetos inovadores financiados por programas de saúde.' },
  { iconClass: 'fi-rr-book', title: 'Teses e Dissertações', text: 'Temas de investigação para mestrados e doutoramentos nas áreas da saúde.' },
  { iconClass: 'fi-rr-coins', title: 'Bolsas de Investigação', text: 'Bolsas de investigação apoiando projetos de excelência em saúde e inovação biomédica.' },
];

const OpportunitiesSection = () => {
  return (
    <section className="section" aria-labelledby="oportunidades-titulo">
      <div className="container">
        <h2 className="section__title" id="oportunidades-titulo">Oportunidades</h2>
        <p className="section__description">Junte-se a nós na construção do futuro da saúde</p>

        <div className="opportunities">
          {opportunitiesData.map((item, index) => (
            <OpportunityCard 
              key={index} 
              iconClass={item.iconClass} 
              title={item.title} 
              text={item.text} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;