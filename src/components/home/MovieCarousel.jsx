import React, { useRef } from 'react';

const MovieCarousel = ({ title, type = 'landscape', movies }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      // Menghitung lebar item untuk scroll yang lebih akurat
      const scrollAmount = carouselRef.current.clientWidth / 2;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      // Menghitung lebar item untuk scroll yang lebih akurat
      const scrollAmount = carouselRef.current.clientWidth / 2;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="carousel-section">
      <div className="container">
        <div className="carousel-header">
          <h2 className="carousel-title">{title}</h2>
        </div>

        <div className="scroll-container" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <div className="scroll-arrow scroll-arrow-left" onClick={scrollLeft} style={{ position: 'absolute', left: '0', zIndex: 10, cursor: 'pointer', padding: '10px', backgroundColor: 'rgba(31, 29, 43, 0.7)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', top: '50%', transform: 'translateY(-50%)' }}>
            <img src="/assets/images/icons/arrow-left.png" alt="Scroll Left" style={{ width: '24px', height: '24px' }} />
          </div>

          <div className="movie-carousel" ref={carouselRef} style={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth', width: '100%', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`
              .movie-carousel::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {movies.map((movie, index) => (
              <div key={index} className={`movie-card movie-card-${type}`}>
                <div className="movie-poster">
                  <img src={movie.poster} alt={movie.title} />
                  {movie.info && type === 'landscape' && (
                    <div className="movie-info">
                      <h3>{movie.title}</h3>
                      <div className="rating">
                        <span>★ {movie.rating}/5</span>
                      </div>
                    </div>
                  )}
                  {movie.badge && (
                    <span className={`badge badge-${movie.badge.type}`}>{movie.badge.text}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-arrow scroll-arrow-right" onClick={scrollRight} style={{ position: 'absolute', right: '0', zIndex: 10, cursor: 'pointer', padding: '10px', backgroundColor: 'rgba(31, 29, 43, 0.7)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', top: '50%', transform: 'translateY(-50%)' }}>
            <img src="/assets/images/icons/arrow-right.png" alt="Scroll Right" style={{ width: '24px', height: '24px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCarousel;