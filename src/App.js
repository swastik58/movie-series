import { Container } from '@material-ui/core';
//import reactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SimpleBottomNavigation from './components/Mainnav';
import Trending from './components/Pages/Trending';
import Search from  "./components/Pages/search";
import Movies from './components/Pages/movies';
import Series from './components/Pages/series';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App"> 
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>

      <SimpleBottomNavigation />

    </BrowserRouter>
  );
}

export default App;
