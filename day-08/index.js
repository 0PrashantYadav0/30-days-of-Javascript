function stringLiterals(){
  const name = "name";
  const age = 19;

  const message = `Hello, my name is ${name} and I am ${age} years old.`;
  console.log(message);

}

function multiLineStrings(){
  const multiLineMessage = `
  This is a 
  multi-line 
  string using 
  template literals.
  `;

  console.log(multiLineMessage);

}

function destructuring(){
  const numbers = [10, 20, 30, 40, 50];

  // Using array destructuring to extract the first and second elements
  const [first, second] = numbers;

  console.log(`First element: ${first}`);
  console.log(`Second element: ${second}`);
}


function destructuringObjects(){
  const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  };
  
  // Using object destructuring to extract title and author
  const { title, author } = book;
  
  console.log(`Title: ${title}`);
  console.log(`Author: ${author}`);
}

function exrtactArray(){
  const newArrayWithIndividualElements = [...existingArray, 6, 7, 8];

  console.log(newArrayWithIndividualElements);

}

function sumAll(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Example usage:
const result = sumAll(1, 2, 3, 4, 5);
console.log(result); // Output: 15


function product(x, y=4){
  return x * y;
}

function enhancedObjectLiterals(){
  const name = "Alice";
  const age = 30;

  const person = {
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };

  console.log(person);
  person.greet();
}

function computedProperty(){
  const propName = "dynamicProperty";
  const value = "This is a dynamic value";

  const dynamicObject = {
    [propName]: value,
    staticProperty: "This is a static value"
  };

  console.log(dynamicObject);

}

// calling functions
stringLiterals();
multiLineStrings();
destructuring();
destructuringObjects();
exrtactArray();
enhancedObjectLiterals();
computedProperty();
product(2, 3);
product(2);
