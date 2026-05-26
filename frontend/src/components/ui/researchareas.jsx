import { researchAreas, partners, opportunities } from '../../data';
import ResearchCard from '../UI/ResearchCard';
import PartnerItem from '../UI/PartnerItem';
import OpportunityCard from '../UI/OpportunityCard';

export function ResearchSection() {
  return (
    <section id="investigacao" className="section research-areas" aria-labelledby="investigacao-titulo">
      <div className="container">
        <h2 className="section__title" id="investigacao-titulo">Áreas de Investigação</h2>
        <p className="section__description">Desenvolvendo soluções inovadoras para os desafios da saúde regional e global</p>
        <div className="research">
          {researchAreas.map(area => (
            <ResearchCard key={area.id} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
}
