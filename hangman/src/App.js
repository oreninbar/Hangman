import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';
import EndGame from './components/EndGame';
//-----------------------Generate the letters 
function generateLetterStatuses() {
  let letterStatus = {}
  for (let i = 65; i < 91; i++) {
    letterStatus[String.fromCharCode(i)] = false
  }
  return letterStatus
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      letters: generateLetterStatuses(),
      word: "CALM",
      score: 50,
      hint: "Your ideal mood when coding",
      questions: [
        { word: "CALM", hint: "Your ideal mood when coding" },
        { word: "SHOOBERT", hint: "Jona most common word" },
        { word: "Gilly", hint: "Gilly dog name" }
      ],
      questionNumber: 0
    }
  }


  //start over the game
  startOver = () => {
    let counter = this.state.questionNumber
    let letters = generateLetterStatuses()
    counter++
    this.setState({
      letters: letters,
      score: 50,
      questionNumber: counter
    }, function () {
      console.log(this.state.letters);
      console.log(this.state.score);
      console.log(this.state.questionNumber);
      //window.location.reload();
    })

  }

  //checks solution completion 
  solutionCompletion = () => {
    let arrWord = this.state.word.split('')
    for (const letter of arrWord) {
      if (!this.state.letters[letter])
        return false
    }
    return true
  }

  //checks if the letter exist in the word array 
  checkTheLetterExist = letter => {
    let arrWord = this.state.word.split('')
    for (const l of arrWord)
      if (l === letter)
        return true
    return false
  }

  //changes the score state and updates
  updateScore = letter => {
    let score = this.state.score
    score = this.checkTheLetterExist(letter) ? score + 10 : score - 10
    this.setState({
      score: score
    })
  }

  //changes the letter state 
  selectLetter = letter => {
    let letters = this.state.letters
    letters[letter] = true
    this.setState({
      letters: letters
    })
  }

  render() {
    return (
      <div className="main-container">
        <Score score={this.state.score} />
        {this.solutionCompletion() || (this.state.score < 0) ?
          <EndGame score={this.state.score} startOver={this.startOver} /> :
          <Solution letters={this.state.letters} word={this.state.questions[this.state.questionNumber].word} hint={this.state.questions[this.state.questionNumber].hint} />}
        <Letters letters={this.state.letters} selectLetter={this.selectLetter} updateScore={this.updateScore} />
      </div>
    )
  }
}


export default App;

