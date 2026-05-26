import { useEffect } from 'react';
import { ChartController, dadosOportunidades } from './chartController.js'; 
import OpportunityCard from './OpportunityCard';

export function OpportunitiesSection({ opportunities }) {
  
  useEffect(() => {
    const chartInstance = new ChartController(dadosOportunidades);

    chartInstance.analisarDados();
    chartInstance.mostrarGrafico();

    const handleResize = () => chartInstance.mostrarGrafico();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  return (
    <section id="oportunidades" className="section" aria-labelledby="oportunidades-titulo">
      <div className="container">
        <h2 className="section__title" id="oportunidades-titulo">Oportunidades</h2>
        <p className="section__description">Junte-se a nós na construção do futuro da saúde</p>
        
        <div id="estatisticas-grafico"></div>

        <div className="grafico-placeholder" style={{ width: '100%', height: '300px', marginBottom: '2rem' }}>
          <svg id="opportunityChart">
            <g className="corpo-grafico"></g>
            <g className="eixo-x"></g>
          </svg>
        </div>
        {/* ------------------------ */}

        <div className="opportunities">
          {opportunities.map(opp => (
            <OpportunityCard key={opp.id} {...opp} />
          ))}
        </div>
      </div>
    </section>
  );
}