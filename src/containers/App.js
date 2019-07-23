import React, { Component, Fragment } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
  state = {
    users: [],
    searchField: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(json => this.setState({ users: json }));
  }

  handleSearchChange = e => {
    this.setState({ searchField: e.target.value.toLowerCase() });
  };

  render = () => {
    const filteredUsers =
      this.state.users.filter(({ name }) => name.toLowerCase().includes(this.state.searchField));
    return (
      <div className="tc" style={{ height: '100vh', width: '100vw' }}>
        <h1 className="f1">{!this.state.users.length ? 'Loading...' : 'Cat friends'}</h1>
        {!!this.state.users.length && (
          <Fragment>
            <SearchBox handleChange={this.handleSearchChange} />
            <Scroll>
              <ErrorBoundary>
                <CardList users={filteredUsers} />
              </ErrorBoundary>
            </Scroll>
          </Fragment>
        )}
      </div>
    );
  };
};

export default App;