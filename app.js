'use strict';

// Collects user's name
function greeting() {
  var userName = prompt('Hello! What is your name?');
  alert('Welcome ' + userName + '! Glad you\'re here!');
}

// Sets a variable to count the number of right answers.
var userTotalCorrect = 0;

// Array that holds questions 1-5
var myQuestions = ['Does Erica have 2 cats?', 'Is Erica from Seattle?', 'Does Erica hate cheese?', 'Has Erica lived in London?', 'Did Erica go to the University of Washington?'];

// Array that holds the answers to questions 1-5 in simple y/n format
var comparisonAnswers = [['y', 'yes','n', 'no'], ['y', 'yes', 'n', 'no'], ['n', 'no', 'y', 'yes'], ['n', 'no', 'y', 'yes'], ['y', 'yes', 'n', 'no']];

// Array that holds the responses to correct answers to questions 1-5
var correctAnswers = ['You\'re right! Erica has two cats, named Aonghus and Murdoch.\n\nShe calls them her \'Scottish Buddy-Cop Show\'.', 'Correct! Erica was born in Seattle, (although she grew up in Olympia,) and moved back in the mid-90\'s.', 'That\'s right! Erica does NOT hate cheese.\nWhat kind of person hates cheese!?', 'Right! Erica has never lived in London, although she has lived in Boston, MA, Chapel Hill, NC, and Aberdeen, Scotland.', 'She did! Erica is a third-generation Husky grad.'];

// Array that holds the responses to incorrect answers to questions 1-5
var wrongAnswers = ['Wrong! Erica does have two cats. One is orange and one is black, and both are awesome!', 'Wrong! Erica is, in fact, from Seattle.', 'Actually, Erica loves cheese, sorry.', 'Wrong! Erica loves London, but she\'s never lived there. Places she HAS lived: Boston, MA, Chapel Hill, NC, and Aberdeen, Scotland.', 'Wrong! Erica is actually a 3rd Generation UW grad!'];

function my5Questions() {
  // Loop that asks 5 questions
  for(var i = 0; i < myQuestions.length; i++) {
    var userAnswer = prompt(myQuestions[i]).toLowerCase();
    console.log('Question ' + i + ': userAnswer = ' + userAnswer);
    if(userAnswer === comparisonAnswers[i][0] || userAnswer === comparisonAnswers[i][1]) {
      alert(correctAnswers[i]);
      userTotalCorrect++;
    } else if(userAnswer === comparisonAnswers[i][2] || userAnswer === comparisonAnswers[i][3]) {
      alert(wrongAnswers[i]);
    } else {
      alert('That\'s not a valid answer. No points for you!');
    }
  }
}

function question6() {
  // Asks the user to guess a number between 1 and 100
  var myNumber = 22; // Sets the number to guess.
  var q6tries = 0; // Keeps track of the number of attempted answers.

  while (q6tries < 4) {
    var answer6 = parseInt(prompt('Guess a number between 1 and 25.\n(You have ' + (4 - q6tries) + ' tries remaining.)')); // How many tries they have left.
    if(answer6 === myNumber) {
      alert('You guessed it! The number was ' + myNumber + '!');
      q6tries = 4;
      userTotalCorrect++;
    } else if(answer6 < myNumber) {
      alert('Too low!');
    } else if(answer6 > myNumber) {
      alert('Too high!');
    } else {
      alert('Try again--enter a number between 1 and 100 this time!\n(You have ' + (4 - q6tries) + ' tries remaining.)');
    }
    q6tries++;
  }
}

function question7() {
  // Asks the user to guess an answer from values stored in an array.
  var answersArray = ['sushi', 'ice cream', 'lemon bars', 'mac and cheese', 'pomegranates', 'cheese'];
  var q7Tries = 0; // Keeps track of the number of attempted answers.
  var guessedRight = false; // Tracks whether or not there is a correct answer.

  while (q7Tries < 6 && guessedRight === false) {
    var answer7 = prompt('Guess one of Erica\'s favorite foods! (You have ' + (6 - q7Tries) + ' guesses left.)').toLowerCase();
    for (var i = 0; i < answersArray.length; i++) {
      if(answer7 === answersArray[i]) {
        guessedRight = true;
        userTotalCorrect++;
        alert('You guessed one!\n\nErica\'s favorite foods are:\nsushi\nice cream\nlemon bars\nmac and cheese\npomegranates\ncheese');
        break;
      }
    }
    if(guessedRight === false) {
      alert('Nope, that isn\'t one of Erica\'s favorite foods.');
      q7Tries++;
    }
  }
  if(guessedRight === false) {
    alert('Alas, you ran out of guesses!\n\nErica\'s favorite foods are:\nsushi\nice cream\nlemon bars\nmac and cheese\npomegranates\ncheese');
  }
}
// Calls my functions
greeting();
my5Questions();
question6();
question7();

// Tells the user how many questions they got right.
alert('You got ' + userTotalCorrect + ' answer(s) right out of 7!');
