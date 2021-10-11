import {increment, decrement} from './store/store'
import {connect} from 'react-redux'

// If this was a class based comp you need props in constructor and super
// constructor(props){
//     super(props)
// }

let Counter = (props) => {
    console.log("********* ", props)
    return(
        <div style={{display: "flex", flexDirection: "column", fontFamily: 'monospace'}}>
            <h1>Counter is {props.pizza}</h1>
            <button onClick={() => props.counterOneIncrement()} style={{margin: '20px',borderRadius: "20px", width: '500px', height: "100px", fontSize: '20px'}} >Increment</button>
            <button onClick={() => props.potato()} style={{margin: '20px',borderRadius: "20px", width: '500px', height: "100px", fontSize: '20px'}} >Decrement</button>
        </div>
    )
}

// connect this component below it - best practice

let mapStateToProps = (cat) => {
    return {
        pizza: cat.count,
        nameOfUser: cat.name
    }
}

// props.name-in-the obj
let mapDispatchToProps = (dispatch) => {
    return {
        counterOneIncrement: () => dispatch(increment()),
        potato: () => dispatch(decrement())
    }
}


let connectCounter = connect(mapStateToProps, mapDispatchToProps)(Counter) // mapStateToProps(reduxState)

export default connectCounter