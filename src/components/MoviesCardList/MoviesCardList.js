import { useState, useMemo, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

const MoviesCardList = ({
  movies,
  savedMovies,
  onLikeMovie,
  onDeleteMovie,
  countToRender,
  paginationCount
}) => {
  const [moviesToAdd, setMoviesToAdd] = useState(0);
  let location = useLocation();

  useEffect(() => {
    setMoviesToAdd(0);
  }, [movies]);

  const moviesToRender = useMemo(() => {
    if (!countToRender) {
      return movies;
    }
    return movies.slice(0, countToRender + moviesToAdd);
  }, [movies, moviesToAdd, countToRender]);

  return (
    <>
      <ul className="movies-cardlist">
        {moviesToRender.map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              savedMovies={savedMovies}
              onLikeMovie={onLikeMovie}
              onDeleteMovie={onDeleteMovie}
            />
          );
        })}
      </ul>
      {location.pathname === '/movies' &&
        movies.length > moviesToRender.length && (
          <button
            onClick={() => {
              setMoviesToAdd((prev) => prev + paginationCount);
            }}
            className="movies__more-btn"
          >
            Еще
          </button>
        )}
    </>
  );
};

export default MoviesCardList;
