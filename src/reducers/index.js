import { getScoresFromCards } from '../utils/scoring';
import { drawCard, endTurn } from '../actions/index'

const getInitialState = () => ({ 
    cards: [],
    score: [],
    lastScore: [], 
    gameStarted: false,
    gameEnded: false, 
});

const deckReducer = (state = getInitialState(), action) => {
  let cards, score, lastScore;
  switch(action.type) {
    case 'NEW_CARD':
    ({ cards, score, lastScore } = action);

      return { ...state, 
        cards: [...state.cards, action.cards], 
        score: getScoresFromCards([...state.cards, action.cards], state.score, state.lastScore),
        gameStarted: true,
      };
    case 'END_TURN':
      return handleEndTurn(state, action);
    case 'RESET_GAME':
      return getInitialState()
    default:
      return state;
  }
};

const handleEndTurn = (state, action) => {
    let { cards, score, lastScore } = state;
    
    return {
        ...state, 
        cards: [],
        score: [],
        lastScore: state.score,
        gameEnded: true,
    };
}

export default deckReducer; 