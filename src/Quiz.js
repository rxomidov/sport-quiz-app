import React, { Component } from 'react';
import { questions } from './Questions';
import Finish from './Finish';
import ReactCountdownClock from 'react-countdown-clock';

class Quiz extends Component {
    btn = React.createRef();
    state = {
        questions: questions,
        index: 0,
        score: 0, 
        defaultClass: 'answer-button__default',
        disabled: false,
        correct: '',
        incorrect: '',
        finish: false,
        time: 60
      };

      nextQuestion(e)  {
          let i = this.state.index 
          if ( i < this.state.questions.length - 1) {
              i++
          }
          
          this.setState({
              index: i,
              disabled: false,
              defaultClass: this.state.defaultClass,
              correct: '',
              incorrect: ''
             

          })
      }

      finish() {
          this.setState({
              finish: true
          })
      }

      checkAnswer(q) {
        let currentAnswer = this.state.questions[this.state.index].correct_answer
        let score = this.state.score
        if (q.target.innerText === currentAnswer) {
           score++
           this.setState({
            score: score,
            disabled: true,
            correct: 'answer-button__correct', 
            defaultClass: ''
        })
        }else {
            this.setState({
             
                incorrect: 'answer-button__incorrect', 
                defaultClass: '',
                disabled: true,
                score: score,
                correct: 'answer-button__correct'
            })
        }

      }
      
      renderButton() {
        if (this.state.index < this.state.questions.length - 1) {
            return <button className="next-button" onClick={ event => this.nextQuestion()} >Next</button>
        }else {
            return <button onClick={ event => this.finish()} className="next-button">Finish</button>
        }
    }


    render() {
        const {questions, index, correct, incorrect, finish, score, time } = this.state
        const currentQuestion = questions[index]
        
        if (finish === false) {
            return (
                <div className="quiz-page">
                <div className="quiz-content animated fadeIn">
                    <div className="question-meta animated slideInRight">
                        <div className="time-container">
                            <h3>
                            <ReactCountdownClock seconds={time}
                                color="#23D9B7"
                                alpha={0.9}
                                size={60}
                                onComplete={() => this.finish()}
                                />
                            </h3>
                            </div>
                        <div className="progress-container">
                            <p>Question: {index + 1} of {questions.length}</p>
                            <progress value={index + 1} max={questions.length} className="progress"></progress>
                        </div>
                    </div>
                    <div className="display-content animated slideInLeft">
                        <h3>{currentQuestion.question}</h3>
                    </div>
                    <div className="answers-button">
                    {
                        currentQuestion.answers.map((q, i) => (
                        <button 
                            disabled={this.state.disabled} 
                            ref="btn" key={i} id={"answer"+i} 
                            className={`${ q ===  currentQuestion.correct_answer ? correct : incorrect } answer-button__default animated slideInRight`} 
                            onClick={ (event) => this.checkAnswer(event)}>
                                {q}
                            </button>
                        ))
                    }
                    </div>
                    {this.renderButton()}
                </div>
            </div>
            );
        }else {
            return <Finish score={score} questions={questions} />
        }
    }
}

export default Quiz;