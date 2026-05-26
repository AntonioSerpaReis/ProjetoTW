import { EventItem } from './EventItem';

export const EventList = ({ events }) => {
  return (
    <div className="events-list">
      {events.length > 0 ? (
        events.map((event) => (
          <EventItem 
            key={event.id || Math.random()} // O ideal é usar um ID único vindo do banco
            event={event} 
          />
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>Nenhum evento registado.</p>
      )}
    </div>
  );
};