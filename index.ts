type Person = {
  name: string;
};

// Annotations
const person: Person = {
  name: "John",
};

console.log(person.name);

let naam: string = "Srishanth";
naam = "Sonu";
console.log(naam);

let age: number = 18;
age = 19;
console.log(age);

let kaam: boolean = false;
console.log(kaam);
// declaring the type of var is calle as annotating

// type of
let haha = "srishanth";
// haha = 17;
// once a value is assigned to a variable you cannot further change the type of the value of the variable  , you can change the value but you cnnot change the type of the variable;

// any type;
let color: any = "crimson";
color = 17;
// declaring a var with any stops all the type checkings of ts on the varibale , you will be allowed to assign any value to the var ;

// function parameter annotation
function naaaam(n: string) {
  return n;
}

console.log(naaaam("srishanth"));

// annotating the parameters that are passed into the functions "" (value ref : type) ""

const double = (x: any, y: any) => {
  return x * y;
};

const res = double(2, 3);
console.log(res);

// providing default parameter to the func
const printName = (name = "srishanth") => {
  console.log(name);
};

// annotating the return value
function subtract(x: number, y: number): number {
  return x - y;
}

const sub = (x: number): number => {
  return x - x + 1;
};

// void - states that a functions will return a void n;'
function printmsg(msg: string): void {
  console.log(`hello ${msg}`);
}

printmsg("Srishanth");

// Never - used when a function does not return anything - throwing errors , loops , vars that will never have a value;
// function thrError(): never {
//     throw new console.error();
// }

// Array types
// creating arrays which hold values of a particular data type is calle array type;
const numbers: number[] = [1, 2, 3, 4, 5, 6];

let names: Array<string> = ["srishanth"];

const array = [1, "hello", false, NaN];
// console.log(array);

// multi di array
const diArray = [[1, 3], ["srishanth"], [true, false]];
console.log(diArray);

const triArray: number[][][] = [
  [
    [1, 2, 3, 4, 5],
    [1, 2],
  ],
  [[], []],
  [],
];
console.log(triArray);

// annotating objects
const insaan: { name: string; age: number; employed: false } = {
  name: "S",
  age: 14,
  employed: false,
};

function printInsaan(): { name: string; age: number; employed: false } {
  return { name: "S", age: 14, employed: false };
}

// type alias - instead of passing annotated vars everywhere we create a custom aliace
type User = {
  namee: string;
  class: number;
};
// this aliace can be passed at different places now
function userInfo(user: User) {
  return ` Name : (${user.namee})`;
}

// optional properties
type human = {
  name: string;
  readonly age: number;
  alive?: true;
};

const me: human = {
  name: "srishanth",
  age: 17,
};
// optional properies - its okay if you dont provide a value

// intersection type - create an object by combining two types
type person = {
  name: string;
  age: number;
};

type employee = {
  id: number;
  title: string;
};

type worker = person & employee;

const kaamwala: worker = {
  name: "s",
  age: 29,
  id: 49,
  title: "Manager",
};

// unions - using the either of the two types provided
let myVar: string | number = 18;
myVar = "srishanth";

type a = {
  name: string;
  num: number;
  g: number;
};

type b = {
  ema: string;
  pass: number;
};

const c: a | b = {
  ema: "e",
  pass: 222,
};

const i: (string | number)[] = [1, 2, 3, "s", "d"];
// the values of the array can be either of the types defined to it

// literal value - any var can only have the value from the provied literal values
let x: "s" | "w";
x = "w";
console.log(x);

let j = 1 | 2 | 3;
j = 3;
console.log(j);

let p: "somep" = "somep";
// it can have the onlu literal value provied to it

// tuples - same as an array but with fixed length and some definite structure
const myTuple: [number, string, number, number, number] = [1, "s", 2, 3, 7];

// enums - enums helps to create a set of constants which can be used in the code
enum WeatherConditions {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
}

console.log(WeatherConditions.Sunny);
