import React from 'react'
import {connect} from 'react-redux' 
import { log } from 'util'
import { increaseNumber,
        decreaseNumber
}from '../redux/actions'

class Number extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }
    // }

    // Add = () => {
    //     let{number} = this.state
    //     number = number + 1
    //     this.setState({ number })
    // }
    // Sub = () => {
    //     let{number} = this.state
    //     number = number - 1  
    //     this.setState({ number })
    // }
    // Mul = () => {
    //     let{number} = this.state
    //     number = number * 2  
    //     this.setState({ number })
    // }

    render() {
        const { number,increaseNumber,decreaseNumber } = this.props
        return(
            <div>
                <h1>{number}</h1>
                <button onClick={increaseNumber}> + </button>
                <button onClick={decreaseNumber}> - </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        number: state.number
    }
}
const ActionsToProps = {
    increaseNumber,
    decreaseNumber
}

export default connect(mapStateToProps,ActionsToProps)(Number)