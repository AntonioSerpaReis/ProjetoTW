// PartnerItem.jsx
const PartnerItem = ({ iconClass, name }) => {
  return (
    <div className="partners__item" tabIndex="0">
      <i 
        className={`fi ${iconClass}`} 
        style={{ fontSize: '40px', color: 'var(--azul-500)', marginBottom: '10px' }}
      ></i>
      <span className="partners__name">{name}</span>
    </div>
  );
};

export default PartnerItem;