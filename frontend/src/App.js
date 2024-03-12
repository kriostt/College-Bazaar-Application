import React from 'react';
import { BrowserRouteras as Router, Route, Switch } from 'react-router-dom';
import ProductCatalogue from './components/ProductCatalogue';

function App() {
  return (
    <Router>
      <div className="App">
        <header className= "App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
            >
              Learn React
            </a>
        </header>
        <Switch>
          <Route path='/product-catalogue' Component={ProductCatalogue}/>
        </Switch>
      </div>
    </Router>
  );
}