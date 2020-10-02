export class Questionaire {
  config: any;
  start;
  answers;
  questions;
  currentQuestionIndex;
  currentQuestion;
  maxLength;
  minLength;
  completed;
  constructor(questions: any) {
    if (questions.answers) {
      // for premade
      this.start = questions.start;
      this.questions = questions.questions;
      this.answers = questions.answers;
      this.currentQuestionIndex = questions.currentQuestionIndex;
      this.currentQuestion = questions.currentQuestion;
      this.maxLength = questions.maxLength;
      this.minLength = questions.minLength;
      this.completed = questions.completed;
    } else {
      this.start = false;
      this.questions = questions;

      this.answers = this.setNullAnswers();
      this.currentQuestionIndex = 0;
      this.currentQuestion = null;
      this.maxLength = questions.length;
      this.minLength = 0;
      this.completed = false;
    }
  }

  displayQuestions(): void {
    this.start = true;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    console.log(this.currentQuestion);
  }

  setNullAnswers() {
    var obj = {};
    for (var i = 0; i < this.questions.length; i++) {
      obj[`${i}`] = null;
    }
    return obj;
  }

  assignAnswers(event) {
    const val = event.target.value;
    this.answers[`${this.currentQuestionIndex}`] = val;
  }

  iterator(plus) {
    console.log("this.mcConfig.maxLength", this.maxLength);
    this.currentQuestionIndex += 1;
    if (this.currentQuestionIndex !== this.maxLength) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.start = false;
      this.completed = true;
    }
  }
}
