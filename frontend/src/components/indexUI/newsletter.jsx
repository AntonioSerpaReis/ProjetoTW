import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setFeedback('Subscrição efetuada com sucesso!');
    setEmail('');
  };

  return (
    <section id="newsletter" className="newsletter-new-section">
      <div className="newsletter-new-container">
        <div className="newsletter-new-content">
          <h2 className="newsletter-new-title">Mantenha-se Atualizado com a Nossa Newsletter!</h2>
        </div>
        <form className="newsletter-new-form" onSubmit={handleSubscribe}>
          <div className="newsletter-new-form__pill">
            <input 
              type="email" 
              className="newsletter-new-input" 
              placeholder="nome@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="newsletter-new-btn">Subscrever →</button>
          </div>
          <div className="newsletter-new-disclaimer">{feedback}</div>
        </form>
      </div>
    </section>
  );
}