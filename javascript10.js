$( document ).ready(function() {

  function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++){
      console.log(i + ":" + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(answer){
    if (answer === this.correct) {
      console.log("correct answer!" + answer);
    } else {
      console.log("ehhhh better luck next time")
    }
  }

  var q1 = new Question('Is Javascritp the coolest programming language in the world', ['yes', 'no'], 0);

  var q2 = new Question('what is the name of this course teacher', ['mike', 'joe', 'bob'], 2);

  var q3 = new Question('how old am I', [1, 2, 3, 4, 5], 4);

  var questions = [q1, q2, q3];

  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  var answer = parseInt(prompt("Please put your answer here"));

  questions[n].checkAnswer(answer);

  // if (something != null) {

  // } else if (something == "exit"){
  //   quit();
  // } else{

  // }
});


