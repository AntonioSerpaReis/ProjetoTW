import { Header } from './components/Header';
import { EventForm } from './components/EventForm';
import { EventList } from './components/EventList';

function EventosApp() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <EventForm onAddEvent={addEvent} />
          <hr />
          <EventList events={events} />
        </section>
      </main>
    </>
  );
}