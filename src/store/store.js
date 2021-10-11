import {createStore, applyMiddleware} from 'redux'
import reduxLogger from 'redux-logger'

//action types
const INCREDMENT_COUNT = "INCREDMENT_COUNT"
const DECREMENT_COUNT = "DECREMENT_COUNT"
const NAME_CHANGE = "NAME_CHANGE"
//action creators

export let changeUserNameToMario = () => {
    return {
        type: NAME_CHANGE,
    }
}

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
    count: 0,
    name: "Zach"
}

let reducer = (state = initialState, action) => {
    switch(action.type){
        case INCREDMENT_COUNT:
            return {count: state.count + action.amount}
       
        case DECREMENT_COUNT:
            return {...state, count: state.count - action.amount}
  
        case NAME_CHANGE:
            return {...state, name: "Mario"}
        default:
            return state
    
    }
}


let store = createStore(reducer, applyMiddleware(reduxLogger))

export default store