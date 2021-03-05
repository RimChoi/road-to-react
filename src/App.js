import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var hello = 'Hi, React 도움닫기 ..!';
    // 속성은 카멜 표기법을 따른다
    return (
      
      <div className="App"> 
        <h2>{hello}</h2>
      </div>
    );
  }
}

export default App;
