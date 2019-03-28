export function getScoresFromCards(cards) {

    const dealtCards = cards.flat();
    const cardValue = dealtCards.map(card => card.value);
    return calculateScoresFromCardNames(cardValue);
}

const calculateScoresFromCardNames = (cardNames) => {
    
    const nonNumericCardValues = {
        "JACK": 10,
        "QUEEN": 10,
        "KING": 10,
        "ACE": [1,11]
    };

    let cardValues = cardNames.map(cardName => {

        return nonNumericCardValues[cardName] || parseInt(cardName);
    });

    return getScoresFromCardValues(cardValues)
}

const getScoresFromCardValues = cardValues => {

    let unfilteredScores = getAllPossibleScores(cardValues);
    let uniqueScores = removeDuplicateScores(unfilteredScores);

    return removeInvalidScores(uniqueScores);
}

const getAllPossibleScores = cardValues => {
 
    const possibleScores = cardValues.reduce((accArray, value, index) => {

        if (Array.isArray(value)) {
            
            let newArray = [];
            
            accArray.forEach(accValue => {
                value.forEach(val => newArray.push(val + accValue))    
            });

            return newArray;
        }
        
        accArray = accArray.map(accValue => accValue + value);
        return accArray;
    }, [0]);

    return possibleScores;
}

const removeDuplicateScores = scores => {
    
    let uniqueElements = [];
    
    scores.forEach(value => {
        if (uniqueElements.includes(value)) {
            return;
        }

        uniqueElements.push(value);
    });

    return uniqueElements;
}

const removeInvalidScores = scores => {

    if (scores.includes(21)) {
        return [21];
    }

    let validScores = scores.filter(score => score <= 21);
    
    if (validScores.length === 0) {
        validScores[0] = scores[0];
    }

    return validScores;
}