import { connect } from 'react-redux';
import Score from '../components/Score';

const mapStateToProps = (state) => {
    const { cards, score } = state.deckReducer;

    return {
        cards: cards,
        score: score,
        status: getHandStatus(state.deckReducer.score, state.deckReducer.cards)
    }
}

const getHandStatus = (score, cards) => {
    if (score.includes(21)) {
        return cards.length === 2 ? 'BlackJack!' : '21!';
    }

    if (score.some(score => score > 21)) {
        return 'BUST!'
    }

    return null;
}

export default connect(mapStateToProps)(Score);
