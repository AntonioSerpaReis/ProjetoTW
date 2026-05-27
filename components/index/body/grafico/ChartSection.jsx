import React, { useMemo } from 'react';
import OpportunityChart from './OpportunityChart';

const dadosOportunidades = [
  { ano: "2015", valor: 10 }, { ano: "2016", valor: 20 },
  { ano: "2017", valor: 35 }, { ano: "2018", valor: 50 },
  { ano: "2019", valor: 45 }, { ano: "2020", valor: 70 },
  { ano: "2021", valor: 85 }, { ano: "2022", valor: 90 },
  { ano: "2023", valor: 100 }
];

export const ChartSection = () => {
  // Cálculo de estatísticas usando useMemo para performance
  const stats = useMemo(() => {
    const total = dadosOportunidades.reduce((acc, d) => acc + d.valor, 0);
    const anosAlta = dadosOportunidades.filter(d => d.valor > 50).map(d => d.ano);
    return { total, anosAlta };
  }, []);

  return (
    <section className="section section--alt">
      <div className="container">
        <h2 className="section__title">Gráfico de Oportunidades</h2>
        <div className="chart-wrapper">
          <h3 className="chart-wrapper__title">Oportunidades por Ilha</h3>
          
          <div id="estatisticas-grafico">
            <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Foram geradas <strong>{stats.total}</strong> oportunidades no total. <br />
              Anos de maior sucesso: {stats.anosAlta.join(', ')}.
            </p>
          </div>

          <div className="grafico-placeholder">
            <OpportunityChart data={dadosOportunidades} />
          </div>
        </div>
      </div>
    </section>
  );
};