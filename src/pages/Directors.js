import { directors } from "../data";
import Card from '../components/Card';
import NavBar from '../components/NavBar';

function Directors() {
  const mappedDirectors = directors.map(director => <Card key={director.name} name={director.name} movies={director.movies}/>)
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {mappedDirectors}
      </main>
    </>
  );
};

export default Directors;
