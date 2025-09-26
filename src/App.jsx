import './App.css';
import GenreMoviesList from './Components/GenreMoviesList';
import Header from './Components/Header';
import ProductionHouse from './Components/ProductionHouse';
import Slider from './Components/Slider';

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Slider />

        <ProductionHouse />

        <GenreMoviesList />
      </div>
    </>
  );
}

export default App;
