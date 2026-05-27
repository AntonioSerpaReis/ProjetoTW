import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui aplicaria a lógica de validação similar à do seu FormController
    const isValid = true; // Simulação de validação
    
    if (isValid) {
      setFeedback({ type: 'success', message: 'Mensagem enviada com sucesso!' });
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } else {
      setFeedback({ type: 'error', message: 'Por favor, corrija os erros.' });
    }
  };

  return (
    <div className="contact-form-card">
      <form className="c-form" onSubmit={handleSubmit}>
        <div className="c-form__row">
          <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Primeiro nome" required />
          <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Apelido" required />
        </div>
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="O seu email" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Como podemos ajudar?" maxLength="120" />
        <span className="c-form__char-count">{formData.message.length}/120</span>
        
        <button type="submit" className="c-form__submit">Enviar Mensagem</button>
        
        {feedback && <div className={`banner ${feedback.type}`}>{feedback.message}</div>}
      </form>
    </div>
  );
};