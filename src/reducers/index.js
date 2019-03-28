import { getScoresFromCards } from '../utils/scoring';

const getInitialState = () => ({ 
    cards: [],
    score: [], 
    playerId: 0 
});

const deckReducer = (state = getInitialState(), action, payload) => {
  let cards, score, playerId;

  switch(action.type) {
    case 'NEW_CARD':
    ({ cards, score } = action);
    
      return { ...state, 
        cards: [...state.cards, action.cards], 
        score: getScoresFromCards([...state.cards, action.cards]),
      };
    default:
      return state;
  }
};

export default deckReducer; 