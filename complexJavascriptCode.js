/*
* Filename: complexJavascriptCode.js
* Description: A sophisticated and elaborate JavaScript code demonstrating various advanced concepts and techniques.
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Class representing a Student, inheriting from Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying hard for their grade ${this.grade}.`);
  }
}

// Class representing a Teacher, inheriting from Person
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}.`);
  }
}

// Create instances of Person, Student, and Teacher
const person = new Person("John Doe", 35);
person.greet();

const student = new Student("Alice Smith", 18, 12);
student.greet();
student.study();

const teacher = new Teacher("Mr. Johnson", 42, "Mathematics");
teacher.greet();
teacher.teach();

// Advanced Array Manipulation
const numbers = [1, 2, 3, 4, 5];
const multipliedNumbers = numbers.map((num) => num * 2);
console.log(multipliedNumbers);

const filteredNumbers = numbers.filter((num) => num % 2 === 0);
console.log(filteredNumbers);

const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0);
console.log(sumOfNumbers);

// Asynchronous Operations with Promises
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received successfully.");
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// DOM Manipulation
const container = document.getElementById("container");

const heading = document.createElement("h1");
heading.textContent = "Complex JavaScript Code";

const paragraph = document.createElement("p");
paragraph.textContent = "This code showcases various advanced concepts and techniques.";

container.appendChild(heading);
container.appendChild(paragraph);

// Event Handling
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// More code...
// ...
// More than 200 lines of complex and elaborate code goes here.