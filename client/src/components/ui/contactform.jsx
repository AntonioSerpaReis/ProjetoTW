export default function ContactSection() {
  return (
    <section id="contactos" className="section">
      <div className="container">
        <h2 className="section__title">Contactos</h2>
        <p className="section__description">Fale connosco. Estamos aqui para ajudar e esclarecer qualquer dúvida.</p>
        
        <div className="contact-top">
           {/* Left Column Info could also be mapped from an array */}
           <div className="contact-info">
             <h2 className="contact-info__title">Contacte-nos</h2>
             <div className="contact-info__item">
               <i className="fi fi-rr-envelope"></i>
               <span>geral@caca.uac.pt</span>
             </div>
             {/* ...other contact info... */}
           </div>

           <div className="contact-form-card">
              <form className="c-form" aria-label="Formulário de contacto">
                <div className="c-form__row">
                  <div className="c-form__group">
                    <label className="sr-only" htmlFor="first-name">Primeiro nome</label>
                    <input type="text" id="first-name" name="first-name" className="c-form__input" placeholder="Primeiro nome" required />
                  </div>
                  {/* Notice `htmlFor` instead of `for` */}
                  <div className="c-form__group">
                    <label className="sr-only" htmlFor="last-name">Apelido</label>
                    <input type="text" id="last-name" name="last-name" className="c-form__input" placeholder="Apelido" required />
                  </div>
                </div>
                {/* Other fields... */}
                <button type="submit" className="c-form__submit">Enviar Mensagem</button>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
}