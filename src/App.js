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

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());


class Search extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form>
        <input 
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
    );
  }
}

class Table extends Component {
  render() {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div>
        {list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
                onClick={() => onDismiss(item.objectID)}
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: '',
    };
    
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);

  } // End Constructor()


  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updateList = this.state.list.filter(isNotId);
    this.setState({ list: updateList });
  }

  // 리액트의 통합적 이벤트(synthetic event) 를 사용해 이벤트 페이로드에 접근
  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value  });
  }

  render() {
    // destructing
    const { searchTerm, list } = this.state;

    return (
      <div className="App"> 
        <Search 
          value={searchTerm}
          onChange={this.onSearchChange}
        />
        <Table 
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default App;
