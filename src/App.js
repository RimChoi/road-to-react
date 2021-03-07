import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    /**
     * let - 변수 재할당 가능.
     * const - 변수 재할당 X, 변수가 배열이나 객체 타입일 경우 변경 가능. 
     * 불변 데이터 구조(immutable data structures)
     * 한 번 데이터 구조가 정의된 이후, 다시 변경할 수 없습니다.
     */
    const hello = 'Hi, React 도움닫기 ..!';
    
    return (
      
      <div className="App"> 
        <h2>{hello}</h2>
      </div>
    );
  }
}

export default App;
