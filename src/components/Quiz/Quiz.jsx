import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { fetchQuizzes } from "../../actions/quizActionCreator";
import { toggleModal } from "../../actions/modalActionCreator";
import Modal from "react-modal";
import "./Quiz.css";

Modal.setAppElement("#root");

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      numberOfCorrects: 0,
      explanation: "",
    };
  }

  componentDidMount() {
    this.restart();
  }

  restart() {
    this.setState({
      currentIndex: 0,
      numberOfCorrects: 0,
    });
    this.props.fetchQuizzes();
  }
  selecteAnswer(quiz, answer) {
    let { currentIndex, numberOfCorrects, explanation } = this.state;
    const isCorrect = quiz.judgeCorrectAnswer(answer);
    if (isCorrect) {
      numberOfCorrects++;
      explanation = `Correct Answer  ${quiz.explanation}`;
    } else {
      explanation = `Wrong... The correct answer is "${quiz.correctAnswer}" ${quiz.explanation}`;
    }
    currentIndex++;
    this.setState({
      currentIndex,
      numberOfCorrects,
      explanation,
    });
  }

  render() {
    const { currentIndex } = this.state;
    const quizzes = this.props.quizInfo.quizzes;
    if (quizzes.length === 0) {
      return this.renderLoading();
    }
    if (quizzes.length > 0 && currentIndex < quizzes.length) {
      return this.renderQuiz();
    }
    if (currentIndex === quizzes.length) {
      return this.renderResult();
    }
  }

  // ロード中
  renderLoading() {
    return (
      <div>
        <h1>QuizPage</h1>
        <p>NOW LOADING...</p>
        <hr />
        <Link to="/">TOP</Link>
      </div>
    );
  }

  // クイズ中
  renderQuiz() {
    const { currentIndex, numberOfCorrects } = this.state;
    const quizzes = this.props.quizInfo.quizzes;
    const quiz = quizzes[currentIndex];
    const answers = quiz.shuffleAnswers().map((answer, index) => {
      return (
        <li key={index}>
          <Button
            onClickHandler={() => {
              this.selecteAnswer(quiz, answer);
              this.props.toggleModal();
            }}
          >
            {answer}
          </Button>
          <Modal
            isOpen={this.props.modal.isShown}
            onRequestClose={() => this.props.toggleModal()}
          >
            <h2>解説</h2>
            <p className="explanation">{this.state.explanation}</p>
            <Button onClickHandler={() => this.props.toggleModal()}>
              close
            </Button>
          </Modal>
        </li>
      );
    });
    return (
      <div>
        <h1>QuizPage</h1>
        <h3>
          NOW : {numberOfCorrects}/{currentIndex}{" "}
        </h3>
        <div> {quiz.question} </div>
        <ul className="QuizList">{answers}</ul>
        <hr />
        <Link to="/">TOP</Link>
      </div>
    );
  }

  //クイズ終了後
  renderResult() {
    const { numberOfCorrects, currentIndex } = this.state;
    const score = numberOfCorrects * 10;
    return (
      <div>
        <h1>QuizPage</h1>
        <h2>RESULT</h2>
        {numberOfCorrects}/{currentIndex}
        <br />
        SCORE : {score}
        <Button
          onClickHandler={() => {
            this.restart();
          }}
        >
          RESTART
        </Button>
        <hr />
        <Link to="/">TOP</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizInfo: state.quizInfo,
    modal: state.modal,
  };
};

const mapDispatchToProps = {
  fetchQuizzes,
  toggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
