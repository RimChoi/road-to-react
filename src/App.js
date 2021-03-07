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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // ES6에서는 객체 프로퍼티 이름과 변수 이름이 같다면, 하나로 축약해 정의합니다.
      list,
    };
    /**
     * 1. 클래스 메서드는 클래스 인스턴스에 자동으로 this를 바인딩하지 않기 때문에 일일이 바인딩을 해줘야 합니다
     * 2. render() 메서드 안에서 바인딩이 가능하지만, 컴포넌트가 업데이트 될 때마다 실행 - 성능에 영향
     * 을 주기 때문에 컴포넌트가 인스턴스화될때 한번만 바인딩하는 것이 좋은 방법입니다.
     */
    this.onDismiss = this.onDismiss.bind(this);

    /** 
     * 3. 생성자에서 바로 클래스 메서드의 할 일을 정의할 수도 있습니다.
     * 하지만, 생성자에게 혼란을 줄 수 있기 때문에 사용하지 않는 것이 좋습니다. 
     * 생성자는 클래스의 모든 프로퍼티를 인스턴스 화하기 위해 존재합니다. 
     * 
     * 따라서 클래스 메서드의 로직은 생성자 외부에서 정의하는 것이 좋습니다.
     */
    this.onClickClickMe = () => {
      console.log(this);
    }
  } // End Constructor()

  /**
   * 4. ES6 화살표 함수를 사용하면 클래스 메서드를 생성자 내부에 바인딩하지 않고도 자동 바인딩할 수 있습니다.
   *    그러나 리액트 공식 문서는 생성자 내부에 클래스 메서드를 바인딩할 것을 제안하고 있습니다
   */
  onClickMe = () => {
    console.log(this);
  }

  /**
   * @description 이 함수는 클래스에 바인딩되어 있으므로 클래스 메서드입니다.
     * 따라서 onDismiss()가 아니라 this.onDismiss()로 접근합니다.
     * this 객체는 클래스 인스턴스입니다.
   * @param {*} id 
   */
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
            <span>
                <button
                  onClick={this.onClickMe}
                  type="button"
                >
                  Click Me
                </button>
            </span>
          </div>  
        )}
      </div>
    );
  }
}

export default App;
