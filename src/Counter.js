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
            <div style={{display: "flex", flexDirection: "column", fontFamily: 'monospace'}}>
                <h1>Counter is {this.state.count}</h1>
                <button onClick={() =>store.dispatch(increment())} style={{margin: '20px',borderRadius: "20px", width: '500px', height: "100px", fontSize: '20px'}} >Increment</button>
                <button onClick={() =>store.dispatch(decrement())} style={{margin: '20px',borderRadius: "20px", width: '500px', height: "100px", fontSize: '20px'}} >Decrement</button>
            </div>
        )
    }
}

export default Counter