import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScoreContainer from './containers/score-container'
import CardsContainer from './containers/cards-container'
import { drawCard } from './actions/index'

class App extends Component {
 startGame = () => {
    this.props.drawCard();
 }
 render() {
  return (
   <div className="App">
    <header className="App-header">
     
     <h1 className="App-title">Welcome to React</h1>
    </header>
    <pre>
    {
    JSON.stringify(this.props)
    }
    </pre>
    <ScoreContainer />
    <hr />
    <CardsContainer />
    <button onClick={this.startGame}>START</button>
   </div>
  );
 }
}

const mapStateToProps = (state) => {
    const { cards, score } = state.deckReducer;

    return {
        cards: cards,
        score: score,
    }
}

const mapDispatchToProps = dispatch => ({
    drawCard: () => dispatch(drawCard())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);