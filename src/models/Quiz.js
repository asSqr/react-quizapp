import _ from "lodash";
import he from "he";

class QuizModel {
  constructor({ question, correctAnswer, incorrectAnswers, explanation }) {
    this._question = question;
    this._correctAnswer = correctAnswer;
    this._incorrectAnswers = [...incorrectAnswers];
    this._exlpanation = explanation
  }

  get question() {
    return this._question;
  }
  get correctAnswer() {
    return this._correctAnswer;
  }

  get explanation(){
    return this._exlpanation
  }

  shuffleAnswers() {
    return _.shuffle([this._correctAnswer, ...this._incorrectAnswers]);
  }

  judgeCorrectAnswer(ans) {
    return ans === this._correctAnswer;
  }

  static createQuizInstancesWithData(quizDataList) {
    return quizDataList
      .map((quizData) => {
        return {
          question: he.decode(quizData.question),
          correctAnswer: he.decode(quizData.correct_answer),
          incorrectAnswers: quizData.incorrect_answers.map((str) =>
            he.decode(str)
          ),
          explanation:"ここに解説が入るよ"
        };
      })
      .map((quizData) => {
        return new QuizModel(quizData);
      });
  }
}
export default QuizModel;
