import Movie from "./Movie"

const Movies = ({movies}) => {

  return (
    <section>
      {movies?.map((movie) => (
          <Movie
            key={movie.imdbID}
            title={movie.Title}
          />
        ))
      }
    </section>
  )
}
export default Movies;