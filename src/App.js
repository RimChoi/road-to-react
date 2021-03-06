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


const Search = ({ value, onChange, children }) => 
  <form>
    {children}
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </form>

const Table = ({ list, pattern, onDismiss }) =>
  <div className="table">
    {list.filter(isSearched(pattern)).map(item =>
      <div key={item.objectID} className="table-row">
        <span className="largeColumn">
          <a href={item.url}>{item.title}</a>
        </span>
        <span className="midColumn">{item.author}</span>
        <span className="smallColumn">{item.num_comments}</span>
        <span className="smallColumn">{item.points}</span>
        <span className="smallColumn">
          <Button
            onClick={() => onDismiss(item.objectID)}
            className='button-inline'
          >
            Dismiss
              </Button>
        </span>
      </div>
    )}
  </div>

const Button = ({ onClick, className = '', children, }) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

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
        <div className="page">
          <div className="interactions">
            <Search
              value={searchTerm}
              onChange={this.onSearchChange}
            >
              Search
            </Search>
          </div>
          <Table
            list={list}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
        </div>
      </div>
    );
  }
}

export default App;
