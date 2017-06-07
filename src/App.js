import React, { Component } from 'react';
import SearchForm from './SearchForm'
import RepositoryList from './RepositoryList'
import Details from './Details'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Github viewer</h1>
        <button className='button info'>Home</button>
        <hr />
        <SearchForm />
        <RepositoryList />
        <Details />
      </div>
    );
  }
}

export default App;
