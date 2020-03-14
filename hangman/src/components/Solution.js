import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
    render() {
        return (
            <div id="solution">
                <div id='solution-letters'>{this.props.word.split('').map(c => <Letter key={c} letter={this.props.letters[c] ? c : '_'} />)}</div>
                <div id="hint" className="box">{this.props.hint}</div>
            </div>
        )

    }
}
export default Solution

