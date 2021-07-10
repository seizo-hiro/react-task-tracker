import React, { Component } from 'react'
import Star from './Star'

export class Card extends Component {
    render() {
        const {val, itemDelete} = this.props
        return (
            <div style={{border:"1px solid black"}}>
                <h4>ID : {val[0]}</h4>
                <h4>{val[1]}</h4>
                <h4>Date : {val[2]}</h4>
                <button onClick={itemDelete(val[0])}>Delete this item</button>
                <Star />
            </div>
        )
    }
}

export default Card
