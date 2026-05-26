export default function OpportunityCard({ icon, title, text }) {
  return (
    <a href="#" className="opportunities__card" tabIndex="0">
      <div className="opportunities__icon">
        <i className={`fi ${icon}`}></i>
      </div>
      <div className="opportunities__content">
        <h3 className="opportunities__title">{title}</h3>
        <p className="opportunities__text">{text}</p>
      </div>
    </a>
  );
}