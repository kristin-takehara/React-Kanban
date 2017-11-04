import React, { Component } from 'react';
import { connect } from 'react-redux'; //this bridges the component to the redux

// import { loadCards } from '../../actions/cards';

import NewCardForm from '../NewCardForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards:[]
    }
  }

  // componentDidMount() {
  //   this.props.loadCards();
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><center>.:: irashaimase ::.</center></h1>
          <h2><center>KANBAN-desu</center></h2>
        </header>
        <p className="App-intro"><center>
          To get started, create your kanban card and post it to the board!
        </center></p>
      </div>
    );
  }
}


// const mapStateToProps = (state) => {
//   return {
//     cards: state.cardList
//   }
// }


// const ConnectedApp = connect(
//   mapStateToProps, { loadCards }
// )(App);

// export default ConnectedApp;

export default App;