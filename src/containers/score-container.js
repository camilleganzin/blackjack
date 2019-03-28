import { connect } from 'react-redux';
import Score from '../components/Score';

const mapStateToProps = (state) => {
    const { cards, score, lastScore } = state.deckReducer;

    return {
        cards: cards,
        score: score,
        lastScore: lastScore,
        status: getHandStatus(score, cards, lastScore)
    }
}

const getHandStatus = (score, cards, lastScore) => {
    if (score.includes(21)) {
        return cards.length === 2 ? 'BlackJack!' : '21!';
    }

    if (score.some(score => score > 21)) {
        return 'BUST! '
    }

    if (lastScore.length >= 1) {
        return score.some(score => score > 21) ? 'Computer loose' : score.some(score => 17 <= score <= 21) && 21 > lastScore > score ?  'Player win' : 'Player lose'
    }

    return null;
}

export default connect(mapStateToProps)(Score);
