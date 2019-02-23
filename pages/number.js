import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import {connect} from 'react-redux' 
import { log } from 'util'
import { increaseNumber,
        decreaseNumber,
        mulcreaseNumber,
        editSunday,
        addName
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
    constructor() {
        super()
        this.state = {
            user:'5935512004'
        }
    }


    render() {
        const { number,increaseNumber,decreaseNumber,mulcreaseNumber,editSunday,addName } = this.props
        return(
            <div>
                <h1>{number}</h1>
                <button onClick={increaseNumber}> + </button>
                <button onClick={decreaseNumber}> - </button>
                <button onClick={mulcreaseNumber}> x </button>
                <button onClick={editSunday}> Change </button>
                <button onClick={ () => addName(''+this.state.user)   }> Add Name </button>
                <Link href="/"> 
                <button>Back</button> 
                </Link>{' '}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.number,
        sunday: state.sunday,
        user: state.user
    }
}
const ActionsToProps = {
    increaseNumber,
    decreaseNumber,
    mulcreaseNumber,
    editSunday,
    addName
}

export default connect(mapStateToProps,ActionsToProps)(Number)