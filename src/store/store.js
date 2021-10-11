import {createStore, applyMiddleware} from 'redux'
import reduxLogger from 'redux-logger'

//action types
const INCREDMENT_COUNT = "INCREDMENT_COUNT"
const DECREMENT_COUNT = "DECREMENT_COUNT"

//action creators

export const increment = (amount = 1) => {
    return {
        type: INCREDMENT_COUNT,
        amount
    }
}

export const decrement = (amount = 1) => {
    return {
        type: DECREMENT_COUNT,
        amount
    }
}

let initialState = {
    count: 0
}

let reducer = (state = initialState, action) => {
    switch(action.type){
        case INCREDMENT_COUNT:
            state = {...state, count: state.count + action.amount}
        break;
        case DECREMENT_COUNT:
            state = {...state, count: state.count - action.amount}
        break;
        default:
            console.log("Nothing Changed in state")
        break;
        
    }

    return state
}


let store = createStore(reducer, applyMiddleware(reduxLogger))

export default store