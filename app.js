'use strict';

var userName = prompt('Hello! What is your name?');
alert('Welcome ' + userName + '! Glad you\'re here!');

var answer1 = prompt('Does Erica have 2 cats? (yes or no)').toLowerCase();

if (answer1 === 'yes' || answer1 === 'y') {
  alert('You\'re right! Erica has two cats, named Aonghus and Murdoch. She calls them her \'Scottish Buddy-Cop Show\'.');
} else {
  alert('Wrong! Erica does have two cats.');
}
