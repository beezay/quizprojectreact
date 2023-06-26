import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import questions from "../../questions.json";
import isEmpty from "../../utils/is-empty";
import { Button, Card, ListGroup } from "react-bootstrap";

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: {},
      numberOfQUestions: 0,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    };
  }

  componentDidMount() {
    this.displayQuestions(
      this.state.questions,
      this.state.currentQuestion,
      this.state.nextQuestion,
      this.state.previousQuestion
    );
  }

  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    let { currentQuestionIndex } = this.state;

    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];

      const answer = currentQuestion.answer;
      this.setState({
        currentQuestion,
        nextQuestion,
        previousQuestion,
        numberOfQUestions: questions.length,
        answer,
      });
    }
  };

  handleOptionClick = (optionId) => {
    const correctAnswerId = this.state.currentQuestion.correctAnswer.id;
    if (optionId === correctAnswerId) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }
  };

  handleNextButtonClick = () => {
    if (this.state.nextQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
        }),
        () => {
          this.displayQuestions(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };

  handlePrevButtonClick = () => {
    if (this.state.previousQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
        }),
        () => {
          this.displayQuestions(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };

  handleQuitButtonClick = () => {
    if (window.confirm("Are you Sure you want to Quit?")) {
      this.props.history.push("/");
    }
  };

  correctAnswer = () => {
    // M.toast({
    //     html: 'Correct Answer!',
    //     classes: 'toast-valid',
    //     displayLenght: 1500
    // })

    this.setState(
      (prevState) => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.endgame();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      }
    );
  };

  wrongAnswer = () => {
    // M.toast({
    //     html: 'Wrong Answer!',
    //     classes: 'toast-invalid',
    //     displayLenght: 1500
    // })

    this.setState(
      (prevState) => ({
        score: prevState.score,
        wrongAnswers: prevState.wrongAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.endgame();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      }
    );
  };

  increaseCount = () => {
    this.setState({
      counter: 5,
    });
  };

  endgame = () => {
    alert("Quiz has been Ended");
    const { state } = this;

    const playerStats = {
      score: state.score,
      numberOfQUestions: state.numberOfQUestions,
      numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
      correctAnswers: state.correctAnswers,
      wrongAnswers: state.wrongAnswers,
    };

    setTimeout(() => {
      this.props.history.push("/");
    }, 800);
  };

  render() {
    const { currentQuestion } = this.state;

    console.log(questions, currentQuestion);

    return (
      <Fragment>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <div className="questions">
          <div className="">
            <p>
              <span>
                {this.state.currentQuestionIndex + 1} of{" "}
                {this.state.numberOfQUestions}
              </span>
            </p>
          </div>

          <h4>{currentQuestion.question}</h4>
          <Card className="p-4 mb-4 d-flex flex flex-col gap-4 m-auto w-50">
            {currentQuestion.options?.map((item) => (
              <Button
                variant="outline-dark"
                onClick={() => this.handleOptionClick(item.id)}
              >
                {item.option}
              </Button>
            ))}
          </Card>
          <div className="button-container">
            <Button variant="outline-dark" onClick={this.handlePrevButtonClick}>
              Previous
            </Button>
            <Button variant="primary" onClick={this.handleNextButtonClick}>
              Next
            </Button>
            <Button variant="danger" onClick={this.handleQuitButtonClick}>
              Quit
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Play;
