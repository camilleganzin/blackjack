import React from 'react'
import { connect } from 'react-redux'
import Card from '../components/Card'
 
const CardsContainer = ( { cards }) => {
    
    return (
        <div>           
            {cards.map((card, i) => <Card key={i} card={card[0]}/>)}
        </div>
        
    )
}

const mapStateToProps = (state) => {
    const { cards } = state.deckReducer;
    
    return {
        cards: cards,
    }
}

export default connect(mapStateToProps,null)(CardsContainer)