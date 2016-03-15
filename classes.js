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
