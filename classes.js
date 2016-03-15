'use strict';
/**
 * Objects and Classes
 */

var getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

var homer = {
  firstName: 'Homer',
  lastName: 'Simpson',

  age: 36,

  fullName: getFullName,
};

var marge = {
  firstName: 'Marge',
  lastName: 'Flanders',

  age: 36,

  fullName: getFullName,
};

console.log(marge.fullName());
marge.lastName = 'Simpson';
console.log(marge.fullName());
console.log(marge.age); // Public Information

var createPerson = function(firstName, lastName, age) {
  return {
    firstName, lastName,

    interrogate() {
      return age;
    },

    fullName: getFullName,
  };
}

var bart = createPerson('Bart', 'Simpson', 12);

console.log(bart.fullName());
console.log(bart);
console.log(bart.age); // This has been protected
console.log(bart.interrogate());
