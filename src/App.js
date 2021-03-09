import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';
import LandNav from './components/LandNav/LandNav';

function App() {
  return (
    <div className="App">
    <LandNav/>
     {/* <Nav/>
     <Banner/>
     <Row title="Trending Now" fetchUrl={requests.getAllTrending} isLargeRow/>
     <Row title="Now Playing Movies" fetchUrl={requests.getNowPlayingMovies}/>
     <Row title="Netflix Original" fetchUrl={requests.getNetflixOriginals} />
     <Row title="Popular Movies" fetchUrl={requests.getPopularMovies}/>
     <Row title="TV on The Air" fetchUrl={requests.getTVShows}/>
     <Row title="Top Rated Movies" fetchUrl={requests.getTopRatedMovies}/> */}
    </div>
  );
}
export default App;
