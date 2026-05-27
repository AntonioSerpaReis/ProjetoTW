import React from 'react';
import ResearchCard from './ResearchCard.jsx';

const researchData = [
  { id: 1, icon: 'fi-rr-computer', title: 'e-Saúde', text: 'Desenvolvimento de plataformas digitais para gestão de saúde, telesaúde e monitorização remota de pacientes nas ilhas.' },
  { id: 2, icon: 'fi-rr-brain', title: 'Inteligência Artificial', text: 'Aplicação de machine learning e análise preditiva para diagnóstico precoce e otimização de processos clínicos.' },
  { id: 3, icon: 'fi-rr-video-camera', title: 'Telemedicina', text: 'Soluções inovadoras de teleconsulta para populações insulares e áreas remotas, reduzindo barreiras geográficas.' },
  { id: 4, icon: 'fi-rr-search-alt', title: 'Epidemiologia Regional', text: 'Estudos de prevalência de doenças e fatores de risco específicos das populações insulares.' },
  { id: 5, icon: 'fi-rr-shield-check', title: 'Saúde Pública', text: 'Promoção da saúde e desenvolvimento de intervenções comunitárias adaptadas à realidade açoriana.' },
];

const ResearchSection = () => {
  return (
    <section id="investigacao" className="section research-areas" aria-labelledby="investigacao-titulo">
      <div className="container">
        <h2 className="section__title" id="investigacao-titulo">Áreas de Investigação</h2>
        <p className="section__description">Desenvolvendo soluções inovadoras para os desafios da saúde regional e global</p>

        <div className="research">
          {researchData.map((item) => (
            <ResearchCard 
              key={item.id}
              iconClass={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;