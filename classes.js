'use strict';
/**
 * Objects
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

    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

var bart = createPerson('Bart', 'Simpson', 12);

console.log(bart.fullName());
console.log(bart);
console.log(bart.age); // This has been protected
console.log(bart.interrogate());

/**
 * Classes
 */

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.interrogate = function() {
      return age;
    }
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

var maggie = new Person('Maggie', 'Simpson', 1);
console.log(maggie.firstName);
console.log(maggie.lastName);
console.log(maggie.fullName());
console.log(maggie.age);

console.log('Is Maggie a Person?', maggie instanceof Person);
console.log('Is Bart a Person?', bart instanceof Person);

class Simpson extends Person {
  constructor(firstName, age) {
    super(firstName, 'Simpson', age); // Runs the constructor for Person
  }
}

var lisa = new Simpson('Lisa', 8);

console.log(lisa.fullName());
console.log(lisa.interrogate());
console.log('Is Lisa a Person?', lisa instanceof Person);
console.log('Is Lisa a Simpson?', lisa instanceof Simpson);
console.log('Is Maggie a Simpson?', maggie instanceof Simpson);
