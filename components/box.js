import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import {connect} from 'react-redux'
 
class Box extends React.Component {
    constructor() {
        super()
        this.obj = {
            data: {},
        }
    }
    showHis = () => { 
        
        this.obj.data = this.props.sunday
        console.log('OBJ='+this.obj.data)
        console.log('User From Redux ='+this.props.user)
        return <div>
        {this.props.sunday}

        
        </div>
    }
    render(){
        return (
            <div>
                Redux : {this.showHis()}
               
            </div>
        );
    }
}
const mapStateToProps = ({sunday}) => {
    return { sunday }
}

export default connect(mapStateToProps)(Box)
