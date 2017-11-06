import React, { Component } from 'react';
import { connect } from 'react-redux'; //this bridges the component to the redux

import { loadUsers } from '../../actions/users';
import { loadCards, addCard } from '../../actions/cards';
import { loadPriorities } from '../../actions/priorities';

import Columns from '../../components/Columns';

import NewCardForm from '../NewCardForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards:[]
    }
  }

  componentDidMount() {
    this.props.loadCards();
    this.props.addCard();
    this.props.loadUsers();
    this.props.loadPriorities();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><center>.:: irashaimase ::.</center></h1>
          <h2><center>KANBAN-desu</center></h2>
        </header>
        <p className="App-intro">
          To get started, create your kanban card and post it to the board!
        </p>
        <NewCardForm/>
        <Columns/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    cards: state.cardList,
    card: state.cardList,
    users: state.usersList,
    priorities: state.prioritiesList
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    loadCards: () => {
      dispatch(loadCards())
    },
    addCard: () => {
      dispatch(addCard())
    },
    loadUsers: () => {
      dispatch(loadUsers())
    },
    loadPriorities: () => {
      dispatch(loadPriorities())
    }
  };
};


const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;