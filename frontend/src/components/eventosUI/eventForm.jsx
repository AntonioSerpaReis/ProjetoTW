export const EventForm = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({ title: '', date: '', location: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(formData);
  };

  return (
    <form id="event-form" onSubmit={handleSubmit}>
      {/* Inputs mapeados para o estado formData */}
      <input type="text" onChange={(e) => setFormData({...formData, title: e.target.value})} />
      <button type="submit">Guardar Evento</button>
    </form>
  );
};