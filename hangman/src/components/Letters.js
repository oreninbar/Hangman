import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {


    render() {
        const lettersList = Object.keys(this.props.letters)
        return (
            <div id="letters-box" className="box">
                <div > Available letters </div>
                {<div id="letters" >{lettersList.map(l => {
                    return (
                        <span id={`letter ${l}`} className='available-letters'><Letter key={l} letter={l} selectLetter={this.props.selectLetter} updateScore={this.props.updateScore} /></span>)
                })}
                </div>}
            </div>
        )
    }

}
export default Letters