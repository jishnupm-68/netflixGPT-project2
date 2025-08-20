import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies?.nowPlayingMovies) return;
  if (!movies?.popularMovies) return;
  if (!movies?.topRatedMovies) return;
  if (!movies?.upcomingMovies) return;
  return (
      <div className="relative pt-[45%]  bg-black">
        


  
        <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular movies"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated movies"} movies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming movies"} movies={movies?.upcomingMovies} />

  
    </div>
  );
};

export default SecondaryContainer;
