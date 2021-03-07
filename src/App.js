import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
/**
 * 2.1 Internal component state
 * 컴포넌트 내부 상태(Internal component state)는 컴포넌트에 저장된 상태(state)를 말하며, 
 * 다른 말로는 로컬 상태(local state)라고 합니다. 
 * 
 * 컴포넌트 상태는 프로퍼티로 그 값을 수정, 삭제, 저장합니다.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
    }
  }

  render() {
        
    return (
      
      <div className="App"> 
        {this.state.list.map(item => 
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>  
        )}
      </div>
    );
  }
}

export default App;
