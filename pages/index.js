import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import {connect} from 'react-redux' 
import Box from '../components/box'

class Index extends React.Component {
    /*componentDidMount() {
        this.deleyAboutpages();
    }*/

    deleyAboutpages =()=> {
        setTimeout( ()=> {
            this.handleGoToAboutPages();
        },3000)
    }

    handleGoToAboutPages = () => {
        Router.push('/number')
    }

    render(){
        return (
            <div>
                Hello World<br></br>
                <Link href="/about"> 
                <li>About</li> 
                </Link>{' '}
                <button onClick={this.handleGoToAboutPages}>Redux</button><br></br>
                Redux Number : {this.props.number}
                <Box/>
            </div>
        );
    }
}
const mapStateToProps = ({number,sunday}) => {
    return { number,sunday }
}

export default connect(mapStateToProps)(Index)
