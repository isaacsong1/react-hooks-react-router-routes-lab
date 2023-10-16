import { movies } from "../data";
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

function Home() {
  const mappedMovies = movies.map(movie => <MovieCard key={movie.title} title={movie.title} />);

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Home Page</h1>
        {mappedMovies}
      </main>
    </>
  );
};

export default Home;
