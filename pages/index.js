import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import {connect} from 'react-redux' 

class Index extends React.Component {
    componentDidMount() {
        this.deleyAboutpages();
    }

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
                Hello World
                <Link href="/about"> 
                <a>here</a> 
                </Link>{' '}
                <button onClick={this.handleGoToAboutPages}>Number</button>
                {this.props.number}
            </div>
        );
    }
}
const mapStateToProps = ({number}) => {
    return { number    }
}

export default connect(mapStateToProps)(Index)
