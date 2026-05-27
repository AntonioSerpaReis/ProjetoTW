import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const NewsFeed = ({ query = 'saúde medicina', pageSize = 4 }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=pt&sortBy=publishedAt&pageSize=${pageSize}&apiKey=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok" && data.articles?.length > 0) {
          setNews(data.articles);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [query, pageSize]);

  if (loading) return <p>A carregar notícias...</p>;
  if (error) return <p>Erro ao carregar o feed de notícias.</p>;

  return (
    <section id="news-feed" className="section section--alt" aria-labelledby="noticias-titulo">
      <div className="container">
        <h2 className="section__title" id="noticias-titulo">Notícias Recentes</h2>
        <div id="news-container" className="news">
          {news.map((article, index) => (
            <NewsCard key={article.url || index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};