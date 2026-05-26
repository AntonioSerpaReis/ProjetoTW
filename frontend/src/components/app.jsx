import React from 'react';
import Header from './components/Sections/Header';
import Hero from './components/Sections/Hero';
import { ResearchSection, PartnersSection, OpportunitiesSection } from './components/Sections/ContentSections';
import ContactSection from './components/Sections/ContactSection';
// Import Footer, Newsletter, etc...

export default function App() {
  return (
    <>
      <noscript>
        <div className="java-disabled">
          <p><strong>Aviso:</strong> O JavaScript está desativado. Para uma experiência completa, por favor ative o JavaScript.</p>
        </div>
      </noscript>

      <Header />
      
      <main>
        <Hero />
        <ResearchSection />
        {/* NewsFeed Section would go here */}
        <PartnersSection />
        <OpportunitiesSection />
        {/* Charts Section would go here */}
        <ContactSection />
        {/* Newsletter Section would go here */}
        {/* MapEvents Section would go here */}
      </main>

      {/* Footer component would wrap the pre-footer CTA and standard footer */}
      {/* <Footer /> */}
      
      <button type="button" className="btn-top" id="btn-topo" aria-label="Voltar ao topo">⬆</button>
    </>
  );
}