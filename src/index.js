import React from 'react';
import ReactDOM from 'react-dom';
import * as Tips from './Tips';

// import b, {a,sum} from './App';
// console.log(b,a,sum(a,b));

import * as app from './App';
console.log(app.a);
// console.log(app.b);
console.log(app.sum(1, 2));

// =========ES5 Class========

function Person(name) {
  this.name = name;
  this.sayHellow = function() {
    console.log('Hi there');
  };
}

const newPerson = new Person('xyz');
console.log(newPerson);
console.log(newPerson.name);
console.log(newPerson.sayHellow());

// =========ES6 Class========

class Animal {
  constructor(name) {
    this.name = name;
  }
  age = 20;
  greet() {
    console.log('Hi, this is ' + this.name);
  }
}

const newAnimal = new Animal('xyz');
console.log(newAnimal);
console.log(newAnimal.greet());

// Inheritance in ES6

class Bird extends Animal {}

console.log(new Bird('sparrow'));

// overwrite parent methods

class Cat extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  greet() {
    console.log('From Child');
  }

  greetFromChild() {
    super.greet();
    this.greet();
  }
}

const BlackCat = new Cat('Black Cat', 2);
console.log(BlackCat);
console.log(BlackCat.name);
console.log(BlackCat.greetFromChild());

// Static methods

class UtilityMethods {
  static getCount(...arr) {
    return arr.length;
  }
}

const length = UtilityMethods.getCount(1, 2, 3, 4);
console.log(length);

// Getter and Setter

// ES5 way
const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length == 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  },
  set latest(value) {
    this.log[this.log.length - 1] = value;
  }
};

console.log(obj.latest);
obj.latest = 20;
console.log(obj.latest);

// Es6 way
class Kat extends Animal {
  constructor(name, age) {
    super();
    this.age = age;
  }
  get fullName() {
    // Dont give the same name of prop for getter name
    return this.name;
  }
  set fullName(value) {
    this.name = value;
  }
  greet() {
    console.log('From Child');
  }

  greetFromChild() {
    super.greet();
    this.greet();
  }
}
const newKat = new Kat('Kattle');
console.log(newKat.fullName);

const App = () => {
  return (
    <div>
      <Tips.Tip1 text='Avoid Weak Elements'></Tips.Tip1>
      <Tips.Tip1 text='Declare Prop Types '></Tips.Tip1>

      <Tips.Tip1 text='Consider Accessibility'></Tips.Tip1>
      <p>Click anywhere in this pane, then try tabbing through the elements.</p>

      <label>
        First in tab order:
        <input type='text' tabindex='2' />
      </label>

      <div>Tabbable due to tabindex.</div>

      <div>Not tabbable: no tabindex.</div>

      <label>
        Third in tab order:
        <input type='text' tabindex='0' />
      </label>

      {/* Tip 6: Consider Configuration Objects  */}

      <Tips.Tip1 id='test' name='Tip 6' address='Bangalore' text='Avoid Weak Elements'></Tips.Tip1>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
