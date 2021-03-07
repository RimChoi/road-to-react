import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    
    const hello = 'Hi, React 도움닫기 ..!';
    
    return (
      
      <div className="App"> 
        <h2>{hello}</h2>
      </div>
    );
  }
}

export default App;
