import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import MovieCarousel from '../components/home/MovieCarousel';

// Import poster landscape
import poster1 from '/src/assets/images/posters/landscape/Type=1.png';
import poster2 from '/src/assets/images/posters/landscape/Type=2.png';
import poster5 from '/src/assets/images/posters/landscape/Type=5.png';
import poster9 from '/src/assets/images/posters/landscape/Type=9.png';
import poster14 from '/src/assets/images/posters/landscape/Type=14.png';
import poster15 from '/src/assets/images/posters/landscape/Type=15.png';

// Import poster portrait
import portraitPoster3 from '/src/assets/images/posters/portrait/Number=3.png';
import portraitPoster6 from '/src/assets/images/posters/portrait/Number=6.png';
import portraitPoster7 from '/src/assets/images/posters/portrait/Number=7.png';
import portraitPoster9 from '/src/assets/images/posters/portrait/Number=9.png';
import portraitPoster10 from '/src/assets/images/posters/portrait/Number=10.png';
import portraitPoster12 from '/src/assets/images/posters/portrait/Number=12.png';
import portraitPoster14 from '/src/assets/images/posters/portrait/Number=14.png';
import portraitPoster21 from '/src/assets/images/posters/portrait/Number=21.png';
import portraitPoster22 from '/src/assets/images/posters/portrait/Number=22.png';
import portraitPoster24 from '/src/assets/images/posters/portrait/Number=24.png';
import portraitPoster25 from '/src/assets/images/posters/portrait/Number=25.png';
import portraitPoster27 from '/src/assets/images/posters/portrait/Number=27.png';
import portraitPoster29 from '/src/assets/images/posters/portrait/Number=29.png';
import portraitPoster30 from '/src/assets/images/posters/portrait/Number=30.png';

// Data film untuk carousel
const continueWatchingMovies = [
  {
    title: "Don't Look Up",
    poster: poster1,
    rating: "4.5"
  },
  {
    title: "The Batman",
    poster: poster2,
    rating: "4.8"
  },
  {
    title: "Blue Lock",
    poster: poster5,
    rating: "4.7",
    badge: { type: "episode", text: "Episode Baru" }
  },
  {
    title: "A Man Called Otto",
    poster: poster9,
    rating: "4.6"
  },
  {
    title: "Baymax",
    poster: poster14,
    rating: "4.9"
  },
  {
    title: "Top Gun: Maverick",
    poster: poster15,
    rating: "4.8"
  }
];

const topRatingMovies = [
  {
    title: "Suzume",
    poster: portraitPoster14,
    badge: { type: "episode", text: "Episode Baru" }
  },
  {
    title: "Jurassic World",
    poster: portraitPoster25
  },
  {
    title: "Sonic",
    poster: portraitPoster29
  },
  {
    title: "All of Us Are Dead",
    poster: portraitPoster9,
    badge: { type: "episode", text: "Episode Baru" }
  },
  {
    title: "Big Hero 6",
    poster: portraitPoster12,
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "The Menu",
    poster: portraitPoster3
  },
  {
    title: "Devil At All",
    poster: portraitPoster22,
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "Avatar",
    poster: portraitPoster22
  }
];

const trendingMovies = [
  {
    title: "The Tomorrow War",
    poster: portraitPoster7,
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "Black Adam",
    poster: portraitPoster21,
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "Guardians of the Galaxy",
    poster: portraitPoster30,
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "A Man Called Otto",
    poster: portraitPoster10,
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "The Little Mermaid",
    poster: portraitPoster6,
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "Dilan",
    poster: portraitPoster27,
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "Mission Impossible",
    poster: portraitPoster24,
    badge: { type: "top", text: "Top 10" }
  }
];

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <Hero />
        <MovieCarousel 
          title="Melanjutkan Tonton Film" 
          type="landscape" 
          movies={continueWatchingMovies} 
        />
        <MovieCarousel 
          title="Top Rating Film dan Series Hari ini" 
          type="portrait" 
          movies={topRatingMovies} 
        />
        <MovieCarousel 
          title="Film Trending" 
          type="portrait" 
          movies={trendingMovies} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default Home;