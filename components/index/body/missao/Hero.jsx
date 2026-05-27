import HeroGallery from './HeroGallery';

const Hero = () => {
  return (
    <section id="missao" className="hero" aria-label="Secção principal">
      <div className="hero__container">
        <h1 className="hero__title">Construindo o Futuro<br />da Saúde nos Açores</h1>
        <p className="hero__subtitle">
          Uma parceria inovadora entre a Universidade dos Açores e instituições
          de saúde regionais, dedicada à investigação clínica de excelência...
        </p>

        <div className="hero__cta-group">
          <button className="btn btn--outline btn--large" style={{ borderWidth: '1px' }}>
            Conheça as Nossas Áreas
          </button>
        </div>

        <HeroGallery />
      </div>
    </section>
  );
};