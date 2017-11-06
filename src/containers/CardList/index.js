import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/cards';

import NewCardItem from '../../components/NewCardItem';

class CardList extends Component {
  constructor(props){
    super(props);

    this.state = {
      filterInput: ''
    }
  }

  setFilter(){

  }

  render(){
    return(
      <div className="CardList">
        {
          this.props.cards.filter(card => {
            return card.Status.type === this.props.columnStatus
          })
          .map((props) => {
            return(
              <NewCardItem
                title={props.title}
                assigned_to={props.Assignee.name}
                priorities_id={props.Priority.type}
                status_id={props.Status.type}
                created_by={props.Creator.name}
                key={props.id}/>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    cards: state.cardList
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    loadCards: () => {
      dispatch(loadCards())
    }
  };
};

const ConnectCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);

export default ConnectCardList;