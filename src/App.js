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
      // ES6에서는 객체 프로퍼티 이름과 변수 이름이 같다면, 하나로 축약해 정의합니다.
      list,
    };
    /**
     * 이 함수는 클래스에 바인딩되어 있으므로 클래스 메서드입니다. 
     * 따라서 onDismiss()가 아니라 this.onDismiss()로 접근합니다.
     * this 객체는 클래스 인스턴스입니다.
     */
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    // function isNotId(item) {
    //   return item.objectID !== id;
    // }

    const isNotId = item => item.objectID !== id;
    const updateList = this.state.list.filter(isNotId);
    this.setState({ list: updateList });
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
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                dismiss  
              </button>
            </span>
          </div>  
        )}
      </div>
    );
  }
}

export default App;
