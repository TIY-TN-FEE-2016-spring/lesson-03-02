'use strict';
/**
 * Scoping
 */

var josh;

var rick = `I don't know what to do with my hands`;

var interview = function() {
  console.log(rick);
};

console.log(josh); // undefined
interview(); // "I don't know what to do with my hands"

/**
 * The variable called walter exists because of hoisting
 * but it has not been assigned yet
 */
console.log(walter); //

/**
 * Assignment is NOT hoisted, only declarations
 */
josh = 'jrgantt';

var walter = `Walter White`;

var sayMyName = function() {
  var walter = `Heisenberg`; // This 'walter' only exists for each time 'sayMyName' is run

  console.log(walter);
};

console.log(walter); // "Walter White"
sayMyName(); // "Heisenberg"
console.log(walter); // "Walter White"

var dreamInsideADream = function() { // Functions create local scope for 'var'
  var cobb = 'In my dreams we are together';

  function weMustGoDeeper() {
    var saito = 'I bought an airline.';

    console.log(cobb);
  }

  weMustGoDeeper();

  /**
   * Saito still doesn't exist in this reality
   */
  // console.log(saito);
};

dreamInsideADream();

/**
 * Would throw a reference error
 * the 'var' cobb only exists in the dreamInsideADream scope
 */
// console.log(cobb);

console.log(rememberTheRules());

function rememberTheRules() {
  return [
    'A robot may not injure a human being or, through inaction, allow a human being to come to harm.',
    'A robot must obey orders given it by human beings except where such orders would conflict with the First Law.',
    'A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.',
  ];
}

/**
 * The anonymous function has not been assigned to areYouTheOne YET
 */
// console.log(areYouTheOne());

var areYouTheOne = function() {
  return 'neo';
};

/**
 * NOW the variable areYouTheOne has been assigned to the value of our anonymous function
 */
console.log(areYouTheOne());
