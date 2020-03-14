import React, { Component } from 'react';

class EndGame extends Component {
    start=()=>{
        this.props.startOver()
    }
    render() {
        return (
            <div>
                {this.props.score <= 0 ? <div id="end-message1">GAME OVER!!!</div> : <div id="end-message2">Your a WINNER!!!</div>}
                <button id="end-btn" onClick={this.start}>try again</button>
            </div>
        );
    }
}
export default EndGame