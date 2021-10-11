import {Component} from 'react'
import store, {increment, decrement} from './store/store'

class Counter extends Component{
    constructor(){
        super()
        this.state = store.getState() // Getting that initial state
    }

    componentDidMount(){
        this.unsub = store.subscribe(() => {
            this.setState(store.getState)
        })
    }

    render(){
        return(
            <div>
                <h1>Counter is {this.state.count}</h1>
                <button onClick={() =>store.dispatch(increment())}>Imcrement</button>
                <button onClick={() =>store.dispatch(decrement())}>Decrement</button>
            </div>
        )
    }
}

export default Counter