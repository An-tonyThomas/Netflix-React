
import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';



function App() {
  return (
    
    <div className="App">
      <Nav/>
      <Banner fetchUrl={requests.fetchTrending}/>
    <Row title="NetflixOriginals"
    fetchUrl={requests.fetchNetflixOriginals}
    />
     <Row title="Trending"
    fetchUrl={requests.fetchTrending}
    />
     <Row title="TopRated"
    fetchUrl={requests.fetchActionMovies}
    />
    <Row title="ComedyMovies"
    fetchUrl={requests.fetchComedyMovies}
    />
    <Row title="HorrorMovies"
    fetchUrl={requests.fetchHorrorMovies}
    />
    <Row title="RomanceMovies"
    fetchUrl={requests.fetchRomanceMovies}
    />
    <Row title="Documentaries"
    fetchUrl={requests.fetchDocumentaries}
    />
    </div>
  );
}

export default App;
