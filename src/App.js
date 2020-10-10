import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'

class App extends React.Component
{
  OnSearchSubmit()
  {

  }
  render()
  {
    return (
      <div className = "ui container" style={{marginTop:"10px"}}>
        <SearchBar onSubmit = {this.OnSearchSubmit}/>
      </div>
    );
  }
}

export default App;
