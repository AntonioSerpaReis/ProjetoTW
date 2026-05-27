const NewsCard = ({ article }) => {
  const dateStr = new Date(article.publishedAt).toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <article className="news__card" tabIndex={0}>
      {article.urlToImage && (
        <div className="news__image-wrapper">
          <img src={article.urlToImage} alt="Imagem de notícias" className="news__image" loading="lazy" />
        </div>
      )}
      
      <div className="news__content-wrapper">
        <div className="news__date">
          <i className="fi fi-rr-calendar"></i> {dateStr}
        </div>
        
        <div className="news__content">
          <span className="news__tag news__tag--noticia">Notícia</span>
          <h3 className="news__title">{article.title || 'Notícia'}</h3>
          <p className="news__excerpt">
            {article.description || 'Clique no botão abaixo para ler os detalhes da notícia na íntegra.'}
          </p>
        </div>
        
        <div style={{ marginTop: '24px' }}>
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn--primary"
            aria-label={`Ler notícia: ${article.title}`}
            style={{ padding: '8px 16px', fontSize: '0.8rem', borderRadius: 'var(--radius-full)' }}
          >
            Ler Notícia &rarr;
          </a>
        </div>
      </div>
    </article>
  );
};