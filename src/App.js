import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
  	numQuestions: 0,
    numCorrect: 0
  }

  checkAnswer(proposedAnswer, ans) {
    let theTruth;
    const correctAnswer = this.state.value1 + this.state.value2 + this.state.value3;
    
    //Adds number of questions answered
    this.setState((state) => { 
      return {numQuestions: state.numQuestions + 1}
    });

	//checks proposed answer if correct or not
	if(proposedAnswer === correctAnswer) {
      	theTruth = true;
    } else {
    	theTruth = false;
    }

	//checks answer
  	if(ans === theTruth) {
      //Adds number of correct answers
      this.setState((state) => {
      	return {numCorrect: state.numCorrect + 1}
      });
      console.log("correct");
    } else {
    	console.log("wrong");
  	}
	
	//Randomize new values
	this.setState((state) => {
    	return {
          	value1: Math.floor(Math.random() * 100),
    		value2: Math.floor(Math.random() * 100),
    		value3: Math.floor(Math.random() * 100)
        }
    });
  }
  
  render() {
    //Randomize proposed answer
    const proposedAnswer = Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(proposedAnswer, true)} >True</button>
          <button onClick={() => this.checkAnswer(proposedAnswer, false)} >False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
