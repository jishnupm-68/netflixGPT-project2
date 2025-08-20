
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className=' z-50'>
      <div className=" px-4 py-2 relative z-300 opacity-85">
      <h1 className="text-3xl text-gray-200 py-2">{title}</h1>
      <div className=" flex  overflow-x-scroll ">
        <div className=" flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default MovieList
