'use strict';

var userName = prompt('Hello! What is your name?');
alert('Welcome ' + userName + '! Glad you\'re here!');

var answer1 = prompt('Does Erica have 2 cats? (yes or no)').toLowerCase();

if (answer1 === 'yes' || answer1 === 'y') {
  alert('You\'re right! Erica has two cats, named Aonghus and Murdoch.\n\nShe calls them her \'Scottish Buddy-Cop Show\'.');
} else {
  alert('Wrong! Erica does have two cats.');
}

var answer2 = prompt('Is Erica from Seattle?').toLowerCase();

if (answer2 === 'yes' || answer2 === 'y') {
  alert('Correct! Erica was born in Seattle, (although she grew up in Olympia,) and moved back in the mid-90\'s.');
} else {
  alert('Wrong! Erica is, in fact, from Seattle.');
}

var answer3 = prompt('Does Erica hate cheese?').toLowerCase();

if (answer3 === 'no' || answer3 === 'n') {
  alert('That\'s right! Erica does NOT hate cheese.\nWhat kind of person hates cheese!?');
} else {
  alert('Actually, Erica loves cheese, sorry.');
}

var answer4 = prompt('Has Erica lived in San Francisco?').toLowerCase();

if (answer4 === 'no' || answer4 === 'n') {
  alert('Right! Erica has never lived in San Francisco, although she has lived in Boston, MA, Chapel Hill, NC, and Aberdeen, Scotland.');
} else {
  alert('Wrong! Erica likes San Francisco, but she\'s never lived there. Places she HAS lived: Boston, MA, Chapel Hill, NC, and Aberdeen, Scotland.');
}

var answer5 = prompt('Did Erica go to the University of Washington?').toLowerCase();

if (answer5 === 'yes' || answer5 === 'y') {
  alert('She did! Erica is a third-generation Husky grad.');
} else {
  alert('Wrong! Erica is actually a 3rd Generation UW grad!');
}
