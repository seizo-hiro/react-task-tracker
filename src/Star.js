import React, { Component } from 'react'

export class Star extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isStar:false
        }
    }
    
    handleClick=()=>{
        this.setState({isStar:!this.state.isStar})
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.isStar ? "★" : "☆"}</button>
            </div>
        )
    }
}

export default Star
