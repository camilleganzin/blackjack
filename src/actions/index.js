const PROXI_ADDRESS = 'https://cors-anywhere.herokuapp.com/';

const API_ADDRESS = PROXI_ADDRESS + 'https://deckofcardsapi.com/api/deck';

export const drawCard = () => dispatch => {
    
    return fetch(`${API_ADDRESS}/new/draw/`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Unsuccessful request to deckofcardsapi.com')
      }
      
      return response.json();
    })
    .then(json => dispatch(getNewCard(json)))
    .catch(error => alert(error));
}

export function getNewCard(data){

    return{
        type: 'NEW_CARD',
        cards: data.cards,
    }
}

export function endTurn() {

    return {
        type: 'END_TURN',
    };
}

export function resetGame() {
    
    return {
        type: 'RESET_GAME',
    };
}
