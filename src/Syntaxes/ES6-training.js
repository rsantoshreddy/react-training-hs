// Syntax Changes
// ==================
// let and const

// Block scoping with let

var x = 10;
if (true) {
  var x = 12;
}
console.log(x);

// =====================

let x = 10;
if (true) {
  let x = 12;
}
console.log(x);

//===================

let x = 10;
if (true) {
  x = 12;
  let y = 13;
}
console.log(x);
console.log(y);

// Cosnt for Constant declarations
const age = 30;
age = 40;
console.log(age);
// ========================
const ages = [1, 2, 3, 4];
console.log(ages);

ages.push(5);
console.log(ages);
// ========================

const Obj = {
  name: 'your name'
};
console.log(Obj);

Obj.age = 30;
console.log(Obj);

// =================

console.log(age);
var age = 10;
console.log(window.age);

// =====================

console.log(age);
let age = 10;
console.log(window.age);

// ======================

function something() {
  age = 27;
}
let age;
something();
console.log(age);

// ==================

// Arrow Function

function add(a, b) {
  return a + b;
}

const add = function(a, b) {
  return a + b;
};
// =============================
const sum = (a, b) => {
  return a + b;
};
const sum = (a, b) => a + b;
const getNum = a => a;
const getNum2 = () => 2;

// =====================

const newObj = {
  name: 'new Obj',
  age: 12,
  getName: function() {
    console.log(this.name);
  },
  getAge: () => {
    return this.age;
  }
};

// =======Default parameter pass===

function isEqualTo(num = 0, comp = 0) {
  return num === comp;
}

console.log(isEqualTo());
console.log(isEqualTo(10));
console.log(isEqualTo(10, 10));

// ============================

function isEqualTo(num, comp = num) {
  return num === comp;
}
console.log(isEqualTo(10));

function isEqualTo(num = comp, comp = 10) {
  return num === comp;
}
console.log(isEqualTo());

// =======================

// Object Literals

const name = 'xyz';
const age = 23;

const obj = {
  age,
  name
};

console.log(obj);

// =======================

const name = 'xyz';
const age = 23;

const obj = {
    age,
    name,
    greet() {
        console.log('Hi ' + this.name);
    }
};

console.log(obj.greet());

// =======================

const name = 'xyz';
const age = 23;

const obj = {
    age,
    name,
    "greet"() {
        console.log('Hi ' + this.name);
    }
};

console.log(obj.greet());


// =======================

const name = 'xyz';
const age = 23;

const obj = {
    age,
    name,
    "greet"() {
        console.log('Hi ' + this.name);
    }
};

console.log(obj.greet());

// Rest operator

const v = [1,2,3,4];
const [a,b,...c] = v;

console.log(a);
console.log(b);
console.log(c);
// =============================
const sum = (...args)=>args.reduce((acc, curr)=>acc+curr)
console.log(sum(1,2,3,4,5));

// ==========The Spread Operator============

const nums = [1,2,3,4,5];
console.log(Math.max(...nums));// Math.max(1,2,3,4,5)

// More simplest example

const person = {
    name: 'super person',
    age: 234
}

const newSupMan = {...person, address: 'Bangalore'};

console.log(person);
console.log(newSupMan);

//=======For of Loop=========

let results = [1,3,4,5,6,6,7];
for(let res of results){
    console.log(res);
}

for(let res in results){
    console.log(res);
}

// String literals

const name = 'xyz';

const desc = `
    Hi there, this is ${name}.
`
console.log(desc);


// =======Destructuring Arrays=========

const arr = [1,2,3,5];
const [a,b] = arr;
const [c,,d]= arr;
const [e, ...f]= arr;
console.log(a,b,c,d,e,f);

// Tasks 
// swap two numbers without third variable
// [a,b]=[b,a]


// Destructuring objects

const obj = {
    name: 'xyx',
    age: 23,
    greet: ()=>console.log("hi there")
}
const {name, age}= obj;

console.log(name, age);

// const {name, ,greet}= obj;
console.log(name, age);

const {name, ...rest}= obj;
console.log(name, rest);
// ===============


