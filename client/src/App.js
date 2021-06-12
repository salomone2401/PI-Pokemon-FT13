import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landingPage';
import AllPokemons from './components/AllPokemons';
import IdPokemon from './components/IdPokemon';
import NamePokemon from './components/NamePokemon';
import Types from './components/Types';


import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/pokemon' component={AllPokemons} />
          <Route exact path='/pokemon/:id' component={IdPokemon} />
          <Route exact path='/pokemon/:name' component={NamePokemon} />
          <Route exact path='/type' component={Types} />
        </ Switch>
        </Provider>
    </Router>

  );
}

export default App;
