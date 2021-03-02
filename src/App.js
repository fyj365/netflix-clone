import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Banner/>
     <Row title="Trending Now" fetchUrl={requests.getAllTrending} isLargeRow/>
     <Row title="Popular Movies" fetchUrl={requests.getPopularMovies}/>
     <Row title="TV on The Air" fetchUrl={requests.getTVShows}/>
     <Row title="Top Rated Movies" fetchUrl={requests.getTopRatedMovies}/>
     <Row title="Now Playing Movies" fetchUrl={requests.getNowPlayingMovies}/>
     <Row title="Netflix Original" fetchUrl={requests.getNetflixOriginals} />

    </div>
  );
}
export default App;