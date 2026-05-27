const Contactos = () => {
  return (
    <section id="contactos" className="section">
      <div className="container">
        <h2 className="section__title">Contactos</h2>
        <div className="contact-top">
          <ContactInfo />
          <ContactForm />
        </div>
        <div className="contact-bottom-cards">
          <BottomCard title="Suporte Geral" text="A nossa equipa está disponível..." />
          <BottomCard title="Investigação" text="Valorizamos a colaboração..." />
          <BottomCard title="Media" text="Para questões de imprensa..." />
        </div>
      </div>
    </section>
  );
};