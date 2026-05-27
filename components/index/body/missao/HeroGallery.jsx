import GalleryItem from './GalleryItem';

const HeroGallery = () => {
  const images = [
    { webp: './assets/imagem.webp', fallback: './assets/imagem.jpg', alt: 'Paisagem dos Açores' },
    { webp: './assets/uac.webp', fallback: './assets/uac.png', alt: 'Universidade dos Açores' },
    { webp: './assets/governo-acores.webp', fallback: './assets/governo-acores.jpg', alt: 'Governo dos Açores' }
  ];

  return (
    <div className="hero__gallery">
      <div className="carousel">
        <div className="carousel-inner">
          {images.map((img, index) => (
            <GalleryItem key={index} {...img} />
          ))}
        </div>
      </div>
    </div>
  );
};