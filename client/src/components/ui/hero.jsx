export default function Hero() {
  return (
    <section id="missao" className="hero" aria-label="Secção principal">
      <div className="hero__container">
        <h1 className="hero__title">Construindo o Futuro<br />da Saúde nos Açores</h1>
        <p className="hero__subtitle">
          Uma parceria inovadora entre a Universidade dos Açores e instituições de saúde regionais, dedicada à investigação clínica de excelência, ao ensino de qualidade e à melhoria dos cuidados de saúde nas ilhas.
        </p>
        <div className="hero__cta-group">
          <button type="button" className="btn btn--outline btn--large" id="SaberMais" style={{ borderWidth: '1px' }}>
            Conheça as Nossas Áreas
          </button>
        </div>

        {/* Carousel implementation would normally use a state or a library like Swiper */}
        <div className="hero__gallery">
          <div className="carousel" id="heroCarousel">
            <div className="carousel-inner">
               <img src="./assets/imagem.jpg" alt="Paisagem dos Açores" className="carousel-item active" loading="eager" />
               {/* Add other images similarly */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}