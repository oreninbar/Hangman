import React, { Component } from 'react';

class Score extends Component {
    checkScore = () => {
        if (this.props.score <= 50)
            return "low-score"
        else if ((this.props.score > 50 && this.props.score <= 80))
            return "medium-score"
        else return "high-score"
    }
    render() {
        return <h1 id="score-container" className={this.checkScore()}>{this.props.score}</h1>
    }

}
export default Score