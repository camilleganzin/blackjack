import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
 
const CardsContainer = ( { cards, gameStarted }) => {
    
    return (
        <div className="App-cards-container">
            {cards.map((card, i) => <Card key={i} card={card[0]}/>)}
        </div>
        
    )
}

const mapStateToProps = (state) => {
    const { cards, gameStarted } = state.deckReducer;
    
    return {
        cards: cards,
        gameStarted: gameStarted,
    }
}

export default connect(mapStateToProps,null)(CardsContainer)