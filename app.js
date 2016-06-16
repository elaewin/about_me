'use strict';

// Collects user's name
function greeting() {
  var userName = prompt('Hello! What is your name?');
  alert('Welcome ' + userName + '! Glad you\'re here!');
}

// Sets a variable to count the number of right answers.
var userGotRight = 0;

// Array that holds questions 1-5
var myQuestions = ['Does Erica have 2 cats?', 'Is Erica from Seattle?', 'Does Erica hate cheese?', 'Has Erica lived in San Francisco?', 'Did Erica go to the University of Washington?'];

// Array that holds the answers to questions 1-5 in simple y/n format
var comparisonAnswers = [['y', 'yes','n', 'no'], ['y', 'yes', 'n', 'no'], ['n', 'no', 'y', 'yes'], ['n', 'no', 'y', 'yes'], ['y', 'yes', 'n', 'no']];

// Array that holds the responses to correct answers to questions 1-5
var correctAnswers = ['You\'re right! Erica has two cats, named Aonghus and Murdoch.\n\nShe calls them her \'Scottish Buddy-Cop Show\'.', 'Correct! Erica was born in Seattle, (although she grew up in Olympia,) and moved back in the mid-90\'s.', 'That\'s right! Erica does NOT hate cheese.\nWhat kind of person hates cheese!?', 'Right! Erica has never lived in San Francisco, although she has lived in Boston, MA, Chapel Hill, NC, and Aberdeen, Scotland.', 'She did! Erica is a third-generation Husky grad.'];

// Array that holds the responses to incorrect answers to questions 1-5
var wrongAnswers = ['Wrong! Erica does have two cats. One is orange and one is black, and both are awesome!', 'Wrong! Erica is, in fact, from Seattle.', 'Actually, Erica loves cheese, sorry.', 'Wrong! Erica likes San Francisco, but she\'s never lived there. Places she HAS lived: Boston, MA, Chapel Hill, NC, and Aberdeen, Scotland.', 'Wrong! Erica is actually a 3rd Generation UW grad!'];

function my5Questions() {
  // Loop that asks 5 questions
  for(var i = 0; i < myQuestions.length; i++) {
    var userAnswer = prompt(myQuestions[i]).toLowerCase();
    console.log('Question ' + i + ': userAnswer = ' + userAnswer);
    if(userAnswer === comparisonAnswers[i][0] || userAnswer === comparisonAnswers[i][1]) {
      alert(correctAnswers[i]);
      userGotRight += 1;
    } else if(userAnswer === comparisonAnswers[i][2] || userAnswer === comparisonAnswers[i][3]) {
      alert(wrongAnswers[i]);
    } else {
      alert('That\'s not a valid answer. No points for you!');
    }
  }
}

function question1() {
  // Asks a first yes/no question
  var answer1 = prompt('Does Erica have 2 cats? (yes or no)').toLowerCase();

  if(answer1 === 'yes' || answer1 === 'y') {
    alert('You\'re right! Erica has two cats, named Aonghus and Murdoch.\n\nShe calls them her \'Scottish Buddy-Cop Show\'.');
    userGotRight += 1;
  } else if(answer1 === 'no' || answer1 === 'n') {
    alert('Wrong! Erica does have two cats. One is orange and one is black, and both are awesome!');
  } else {
    alert('That\'s not a yes/no answer! No points for you! (Yes, there are points involved here.)');
  }
}

function question2() {
  // Asks a second yes/no question
  var answer2 = prompt('Is Erica from Seattle?').toLowerCase();

  if(answer2 === 'yes' || answer2 === 'y') {
    alert('Correct! Erica was born in Seattle, (although she grew up in Olympia,) and moved back in the mid-90\'s.');
    userGotRight += 1;
  } else if(answer2 === 'no' || answer2 === 'n') {
    alert('Wrong! Erica is, in fact, from Seattle.');
  } else {
    alert('You can guess either yes or no...no one will make fun of you if you get it wrong, I promise!');
  }
}

function question3() {
  // Asks a third yes/no question
  var answer3 = prompt('Does Erica hate cheese?').toLowerCase();

  if(answer3 === 'no' || answer3 === 'n') {
    alert('That\'s right! Erica does NOT hate cheese.\nWhat kind of person hates cheese!?');
    userGotRight += 1;
  } else if(answer3 === 'yes' || answer3 === 'y') {
    alert('Actually, Erica loves cheese, sorry.');
  } else {
    alert('That\'s not a good answer to a yes/no question.');
  }
}

function question4() {
  // Asks a fourth yes/no question
  var answer4 = prompt('Has Erica lived in San Francisco?').toLowerCase();

  if(answer4 === 'no' || answer4 === 'n') {
    alert('Right! Erica has never lived in San Francisco, although she has lived in Boston, MA, Chapel Hill, NC, and Aberdeen, Scotland.');
    userGotRight += 1;
  } else if(answer4 === 'yes' || answer4 === 'y') {
    alert('Wrong! Erica likes San Francisco, but she\'s never lived there. Places she HAS lived: Boston, MA, Chapel Hill, NC, and Aberdeen, Scotland.');
  } else {
    alert('Sorry, that\'s not the right answer.');
  }
}

function question5() {
  // Asks a fifth yes/no question
  var answer5 = prompt('Did Erica go to the University of Washington?').toLowerCase();

  if(answer5 === 'yes' || answer5 === 'y') {
    alert('She did! Erica is a third-generation Husky grad.');
    userGotRight += 1;
  } else if(answer5 === 'no' || answer5 === 'n') {
    alert('Wrong! Erica is actually a 3rd Generation UW grad!');
  } else {
    alert('That\'s not a yes/no answer!');
  }
}

function question6() {
  // Asks the user to guess a number between 1 and 100
  var myNumber = 22; // Sets the number to guess.
  var tries = 0; // Keeps track of the number of attempted answers.

  while (tries < 4) {
    var answer6 = parseInt(prompt('Guess a number between 1 and 25.\n(You have ' + (4 - tries) + ' tries remaining.)')); // How many tries they have left.
    if(answer6 === myNumber) {
      alert('You guessed it! The number was ' + myNumber + '!');
      tries = 4;
      userGotRight += 1;
    } else if(answer6 < myNumber) {
      alert('Too low!');
    } else if(answer6 > myNumber) {
      alert('Too high!');
    } else {
      alert('Try again--enter a number between 1 and 100 this time!\n(You have ' + (4 - tries) + ' tries remaining.)');
    }
    tries += 1;
  }
}

function question7() {
  // Asks the user to guess an answer from values stored in an array.
  var answersArray = ['sushi', 'ice cream', 'lemon bars', 'mac and cheese', 'pomegranates', 'cheese'];
  var tries = 0; // Keeps track of the number of attempted answers.
  var guessedRight = false; // Tracks whether or not there is a correct answer.

  while (tries < 6 && guessedRight === false) {
    var answer7 = prompt('Guess one of Erica\'s favorite foods! (You have ' + (6 - tries) + ' guesses left.)').toLowerCase();
    for (var i = 0; i < answersArray.length; i++) {
      if(answer7 === answersArray[i]) {
        guessedRight = true;
        userGotRight += 1;
        alert('You guessed one!\n\nErica\'s favorite foods are:\nsushi\nice cream\nlemon bars\nmac and cheese\npomegranates\ncheese');
        break;
      }
    }
    if(guessedRight === false) {
      alert('Nope, that isn\'t one of Erica\'s favorite foods.');
      tries += 1;
    }
  }
  if(guessedRight === false) {
    alert('Alas, you ran out of guesses!\n\nErica\'s favorite foods are:\nsushi\nice cream\nlemon bars\nmac and cheese\npomegranates\ncheese');
  }
}
// Call our functions
greeting();
my5Questions();
// question1();
// question2();
// question3();
// question4();
// question5();
question6();
question7();

// Tells the user how many questions they got right.
alert('You got ' + userGotRight + ' answer(s) right out of 7!');
