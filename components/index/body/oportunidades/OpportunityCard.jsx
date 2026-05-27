// components/OpportunityCard.jsx
const OpportunityCard = ({ iconClass, title, text }) => {
  return (
    <a href="#" className="opportunities__card" tabIndex="0">
      <div className="opportunities__icon">
        <i className={`fi ${iconClass}`}></i>
      </div>
      <div className="opportunities__content">
        <h3 className="opportunities__title">{title}</h3>
        <p className="opportunities__text">{text}</p>
      </div>
    </a>
  );
};

export default OpportunityCard;