import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { changeSearchField, getUsers } from '../actions';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { searchField, handleSearchChange, users, isPending } = this.props;
    const filteredUsers = users.filter(({ name }) =>
      name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="tc" style={{ height: '100vh', width: '100vw' }}>
        <h1 className="f1">{isPending ? 'Loading...' : 'Cat friends'}</h1>
        {!!users.length && (
          <Fragment>
            <SearchBox handleChange={handleSearchChange} />
            <Scroll>
              <ErrorBoundary>
                <CardList users={filteredUsers} />
              </ErrorBoundary>
            </Scroll>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchField: state.usersReducer.searchField,
  isPending: state.requestUsers.isPending,
  users: state.requestUsers.users,
});

const mapDispatchToProps = dispatch => ({
  handleSearchChange: event => dispatch(changeSearchField(event.target.value)),
  getUsers: () => dispatch(getUsers()),
});

// const mapDispatchToProps = dispatch => bindActionCreators({
//   handleSearchChange: event => changeSearchField(event.target.value),
//   getUsers,
// }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
