// export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';


// export const loadCards = () => {
//   return function(dispatch){
//    return getCards()
//    .then(cards => {
//       dispatch({
//         type: LOAD_CARDS,
//         cards: cards
//       });
//    });
//   }
// }

export const addCard = (newCard) => {
  return function(dispatch) {
    return addCard()
    .then(card => {
      dispatch({
        type: ADD_CARD,
        card: card
      });
    });
  }
}