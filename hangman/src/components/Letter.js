import React, { Component } from 'react';

class Letter extends Component {
    changeStatus = () => {
        this.props.selectLetter(this.props.letter)
        this.props.updateScore(this.props.letter)
        document.getElementById(`letter ${this.props.letter}`).style.textDecoration = "line-through";
        document.getElementById(`letter ${this.props.letter}`).style.color = "chartreuse";
    }
    render() {
        return (
            <span onClick={this.changeStatus} className="box">{this.props.letter}</span>
        )
    }
}
export default Letter