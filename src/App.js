import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScoreContainer from './containers/score-container'
import CardsContainer from './containers/cards-container'
import { drawCard, endTurn, resetGame } from './actions/index'

class App extends Component {

 startGame = () => {
    this.props.drawCard();
 }
 endTurn = () => {
    this.props.endTurn();
 }

 resetGame = () => {
    this.props.resetGame();
 }

 render() {

    let labelPlay = this.props.gameStarted ? 'Hit' : 'Start';
    let labelNewGame = this.props.gameEnded ? 'Play Again' : 'Reset';

    if (this.props.lastScore.length >= 1 && this.props.gameStarted) {
        if (this.props.score.join() <= 17) {
            this.props.drawCard();
        }
    }
    
  return (
   <div className="App">
    <header className="App-header">
     <h1 className="App-title">BlackJack</h1>
    </header>
    {this.props.gameStarted &&
        <ScoreContainer />
    }
    <CardsContainer />
    <div className="App-btns">
        {this.props.score < 21 && !this.props.gameEnded &&
            <a className="App-btn blue" onClick={this.startGame}>{ labelPlay }</a>
        }
        {!this.props.gameEnded &&
            <a className="App-btn orange" onClick={this.endTurn}>Let</a>
        }
        <a className="App-btn red"onClick={this.resetGame}>{ labelNewGame }</a>
    </div>
   </div>
  );
 }
}

const mapStateToProps = (state) => {
    const { cards, score, lastScore, gameStarted, gameEnded } = state.deckReducer;

    return {
        cards: cards,
        score: score,
        lastScore: lastScore,
        gameStarted: gameStarted,
        gameEnded: gameEnded,
    }
}

const mapDispatchToProps = dispatch => ({
    drawCard: () => dispatch(drawCard()),
    endTurn: () => dispatch(endTurn()),
    resetGame: () => dispatch(resetGame()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);