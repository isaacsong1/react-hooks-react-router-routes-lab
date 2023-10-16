import { actors } from "../data";
import Card from '../components/Card';
import NavBar from '../components/NavBar';


function Actors() {
  const mappedActors = actors.map(actor => <Card key={actor.name} name={actor.name} movies={actor.movies} />)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {mappedActors}
      </main>
    </>
  );
};

export default Actors;
