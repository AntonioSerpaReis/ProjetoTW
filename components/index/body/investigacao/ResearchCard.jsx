// ResearchCard.jsx
import React from 'react';

const ResearchCard = ({ iconClass, title, text }) => {
  return (
    <article className="research__card" tabIndex="0">
      <div className="research__icon-wrap">
        <i className={`fi ${iconClass}`}></i>
      </div>
      <div className="research__content">
        <h3 className="research__card-title">{title}</h3>
        <p className="research__card-text">{text}</p>
      </div>
    </article>
  );
};

export default ResearchCard;