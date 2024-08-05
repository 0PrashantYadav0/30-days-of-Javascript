function outterFunction(){
  let outterVariable = "I am outter variable";
  function innerFunction(){
      outterVariable = 'I am changed outter variable';
      console.log(outterVariable);
  }
  return innerFunction;
}

function createCounter() {
  let counter = 0;
  
  return {
    increment: function() {
      counter++;
    },
    getCounter: function() {
      return counter;
    }
  };
}

function createIDGenerator() {
  let lastID = 0;
  
  return function() {
      lastID += 1;
      return lastID;
  };
}

function createGreeter(userName) {
  return function() {
      return `Hello, ${userName}!`;
  };
}

function createLoggingFunctions(num) {
  let functionsArray = [];

  for (let i = 0; i < num; i++) {

    //create a IIFE to capture the value of i
    functionsArray.push((function(index) {
      return function() {
        console.log(index);
      };
    })(i));
  }

  return functionsArray;
}


function createItemManager() {
  // Private variable to store the collection of items
  let items = [];

  // Method to add an item to the collection
  function addItem(item) {
    items.push(item);
  }

  // Method to remove an item from the collection
  function removeItem(item) {
    items = items.filter(i => i !== item);
  }

  // Method to list all items in the collection
  function listItems() {
      return items.slice(); // Return a copy of the items array
  }

  // Return an object exposing the public methods
  return {
      addItem,
      removeItem,
      listItems
  };
}

function memoize(fn) {
  // Object to store cached results
  const cache = {};

  return function(...args) {
    // Create a unique key for the current arguments
    const key = JSON.stringify(args);

    // Check if the result is already cached
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    // Compute the result and cache it
    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}


function slowFunction(num) {
  console.log('Computing...');
  return num * num; // Example computation
}


function caluculatefac(fac){
  let cache = {};
  return function(...args){
    // Create a unique key for the current arguments
    const key = JSON.stringify(args);

    // Check if the result is already cached
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    // Compute the result and cache it
    const result = fac(...args);
    cache[key] = result;

    return result;
  }
}

function fac(num){
  console.log("running...")
  if(num === 1){
    return 1;
  }
  return num * fac(num-1);
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); // Output: Computing... 25
console.log(memoizedSlowFunction(5)); // Output: 25 (cached result)
console.log(memoizedSlowFunction(10)); // Output: Computing... 100

const calfac = caluculatefac(fac);
console.log(calfac(4))
console.log(calfac(4))
console.log(calfac(5))

const counter1 = createCounter();
counter1.increment();
counter1.increment();
console.log(counter1.getCounter());

const counter2 = createCounter();
counter2.increment();
console.log(counter2.getCounter()); 
outterFunction()();

const generateID = createIDGenerator();

console.log(generateID());
console.log(generateID());
console.log(generateID());

const greetAlice = createGreeter("Alice");
const greetBob = createGreeter("Bob");

console.log(greetAlice());
console.log(greetBob());

const loggingFunctions = createLoggingFunctions(5);

loggingFunctions[0]();
loggingFunctions[1]();
loggingFunctions[2]();
loggingFunctions[3]();
loggingFunctions[4]();

const manager = createItemManager();

manager.addItem('Apple');
manager.addItem('Banana');
manager.addItem('Cherry');

console.log(manager.listItems());

manager.removeItem('Banana');

console.log(manager.listItems());