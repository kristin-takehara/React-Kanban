import { getCards, postCard } from '../lib/XMLHttpRequest';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';


export const loadCards = () => {
  return function(dispatch){
    //GET method
   return getCards()
   .then(cards => {
      dispatch({
        type: LOAD_CARDS,
        cards: cards
      });
   });
  }
}

export const addCard = (newCard) => {
  return function(dispatch) {
    //POST method
    return addCard(newCard)
    .then(newCard => {
      dispatch({
        type: ADD_CARD,
        newCard: newCard
      });
    });
  }
}