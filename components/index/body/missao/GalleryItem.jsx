const GalleryItem = ({ webp, fallback, alt }) => (
  <picture>
    <source srcSet={webp} type="image/webp" />
    <img src={fallback} alt={alt} className="carousel-item" loading="lazy" width="1050" height="590" />
  </picture>
);