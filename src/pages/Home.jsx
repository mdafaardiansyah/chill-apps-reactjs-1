import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import MovieCarousel from '../components/home/MovieCarousel';

// Data film untuk carousel
const continueWatchingMovies = [
  {
    title: "Don't Look Up",
    poster: "/assets/images/posters/landscape/Type=1.png",
    rating: "4.5"
  },
  {
    title: "The Batman",
    poster: "/assets/images/posters/landscape/Type=2.png",
    rating: "4.8"
  },
  {
    title: "Blue Lock",
    poster: "/assets/images/posters/landscape/Type=5.png",
    rating: "4.7",
    badge: { type: "episode", text: "Episode Baru" }
  },
  {
    title: "A Man Called Otto",
    poster: "/assets/images/posters/landscape/Type=9.png",
    rating: "4.6"
  },
  {
    title: "Baymax",
    poster: "/assets/images/posters/landscape/Type=14.png",
    rating: "4.9"
  },
  {
    title: "Top Gun: Maverick",
    poster: "/assets/images/posters/landscape/Type=15.png",
    rating: "4.8"
  }
];

const topRatingMovies = [
  {
    title: "Suzume",
    poster: "/assets/images/posters/portrait/Number=14.png",
    badge: { type: "episode", text: "Episode Baru" }
  },
  {
    title: "Jurassic World",
    poster: "/assets/images/posters/portrait/Number=25.png"
  },
  {
    title: "Sonic",
    poster: "/assets/images/posters/portrait/Number=29.png"
  },
  {
    title: "All of Us Are Dead",
    poster: "/assets/images/posters/portrait/Number=9.png",
    badge: { type: "episode", text: "Episode Baru" }
  },
  {
    title: "Big Hero 6",
    poster: "/assets/images/posters/portrait/Number=12.png",
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "The Menu",
    poster: "/assets/images/posters/portrait/Number=3.png"
  },
  {
    title: "Devil At All",
    poster: "/assets/images/posters/portrait/Number=22.png",
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "Avatar",
    poster: "/assets/images/posters/portrait/Number=22.png"
  }
];

const trendingMovies = [
  {
    title: "The Tomorrow War",
    poster: "/assets/images/posters/portrait/Number=7.png",
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "Black Adam",
    poster: "/assets/images/posters/portrait/Number=21.png",
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "Guardians of the Galaxy",
    poster: "/assets/images/posters/portrait/Number=30.png",
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "A Man Called Otto",
    poster: "/assets/images/posters/portrait/Number=10.png",
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "The Little Mermaid",
    poster: "/assets/images/posters/portrait/Number=6.png",
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "Dilan",
    poster: "/assets/images/posters/portrait/Number=27.png",
    badge: { type: "top", text: "Top 10" }
  },
  {
    title: "Mission Impossible",
    poster: "/assets/images/posters/portrait/Number=24.png",
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