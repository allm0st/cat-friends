import React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    searchField: '',
  };

  componentDidMount() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json())
        .then(json => this.setState({ users: json }));
    }, 3000);
  }

  handleSearchChange = e => {
    this.setState({ searchField: e.target.value.toLowerCase() });
  };

  render = () => {
    const filteredUsers =
      this.state.users.filter(({ name }) => name.toLowerCase().includes(this.state.searchField));
    return (
      <div className="tc">
        {!this.state.users.length
          ? <h1 className="f1">Loading...</h1>
          : (
            <React.Fragment>
              <h1 className="f1">Cat friends</h1>
              <SearchBox handleChange={this.handleSearchChange} />
              <Scroll>
                <CardList users={filteredUsers} />
              </Scroll>
            </React.Fragment>
          )}
      </div>
    );
  };
};

export default App;