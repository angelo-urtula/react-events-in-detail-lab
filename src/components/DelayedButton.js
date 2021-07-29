// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component{
    handleClick = (event) => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick([event.clientX, event.clientY])
        }, this.props.delay)
    }

    render(){
        return(
            <button onClick={this.handleClick()}/>
        )
    }
}