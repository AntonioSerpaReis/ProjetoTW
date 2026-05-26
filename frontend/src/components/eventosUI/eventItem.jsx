export const EventItem = ({ event }) => {
  return (
    <div className="event-card" style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', marginBottom: '16px' }}>
      <h4>{event.title}</h4>
      <p>
        <strong>Data:</strong> {event.date} às {event.time}
      </p>
      <p>
        <strong>Local:</strong> {event.location}
      </p>
      {event.description && <p>{event.description}</p>}
    </div>
  );
};