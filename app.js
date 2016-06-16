'use strict';

// Collects user's name
function greeting() {
  var userName = prompt('Hello! What is your name?');
  alert('Welcome ' + userName + '! Glad you\'re here!');
}

// Sets a variable to count the number of right answers.
var correctAnswers = 0;

function question1() {
  // Asks a first yes/no question
  var answer1 = prompt('Does Erica have 2 cats? (yes or no)').toLowerCase();

  if(answer1 === 'yes' || answer1 === 'y') {
    alert('You\'re right! Erica has two cats, named Aonghus and Murdoch.\n\nShe calls them her \'Scottish Buddy-Cop Show\'.');
    correctAnswers += 1;
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
    correctAnswers += 1;
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
    correctAnswers += 1;
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
    correctAnswers += 1;
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
    correctAnswers += 1;
  } else if(answer5 === 'no' || answer5 === 'n') {
    alert('Wrong! Erica is actually a 3rd Generation UW grad!');
  } else {
    alert('That\'s not a yes/no answer!');
  }
}

function question6() {
  // Asks the user to guess a number between 1 and 100
  var myNumber = 46; // Sets the number to guess.
  var tries = 0; // Keeps track of the number of attempted answers.

  while (tries < 4) {
    var answer6 = parseInt(prompt('Guess a number between 1 and 100.\n(You have ' + (4 - tries) + ' tries remaining.)')); // How many tries they have left.
    if(answer6 === myNumber) {
      alert('You guessed it! The number was ' + myNumber + '!');
      tries = 4;
      correctAnswers += 1;
    } else if(answer6 < myNumber) {
      alert('Too low!');
    } else if(answer6 > myNumber) {
      alert('Too high!');
    } else {
      alert('Try again--enter a number between 1 and 100 this time!');
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
        correctAnswers += 1;
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
question1();
question2();
question3();
question4();
question5();
question6();
question7();

// Tells the user how many questions they got right.
alert('You got ' + correctAnswers + ' answer(s) right out of 7!');
