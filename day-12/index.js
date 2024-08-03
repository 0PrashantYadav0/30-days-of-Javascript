
function errorfunction(){
  throw new Error("I am function error");
}

function trycatching(){
  try {
    console.log("starting to run the functions")
    errorfunction();
    console.log("ending the function")
  } catch (error) {
    console.log("Error while running function with message : ", error.message)
  }
}

function divide(num1, num2){
  try {
    if(num2 === 0){
      throw new Error("Cannot divide with zero");
    }
    const ans = num1/num2;
    console.log(ans)
  } catch (error) {
    console.log(error.message)
  }
}


function flowOfData(){
  let value = 8;
  try {
    value = 0;
    console.log("I am in try block.")
    throw new Error("I am new Error.")
  } catch (error) {
    value = 1;
    console.log("I am in catching block.")
    console.log(error.message)
  } finally{
    value = 2;
    console.log("I am in finally block.")
  }
  console.log(value)
}

class ErrorNote extends Error {
  constructor(message, name, type){
    super(message)
    this.name = name
    this.type = type
  }
}

function tryCustomError(){
  try {
    throw new ErrorNote("Custom Error", "typeError", "byThrow")
  } catch (error) {
    console.log(error.message)
    console.log(error.name)
    console.log(error.type)
  }
}

function userChecking(){
  const user = {
    name : "name", 
    age : "45", 
    email : "null",
    phoneNumber : "643875628"
  }
  
  try {
    const res = checkUser(user);
    if(res){
      console.log("User is valid with details : ", user)
    }
  } catch (error) {
    console.log(error.message)
  }
}
function checkUser(user){
  if(!user || !user.name || !user.email || !user.age || !user.phoneNumber){
    throw new Error("User is Not valid")
  }else{
    return true
  }
}

// Create a promise that randomly resolves or rejects
const randomPromise = new Promise((resolve, reject) => {
  const randomValue = Math.random();
  if (randomValue < 0.5) {
      resolve("Promise resolved successfully!");
  } else {
      reject("Promise rejected!");
  }
});

// Handle the promise
randomPromise
  .then((message) => {
      console.log(message);
  })
  .catch((error) => {
      console.error("Caught an error:", error);
  });

// Function to create a promise that randomly resolves or rejects
const createRandomPromise = () => {
    return randomPromise
};

// Async function to handle the promise with try-catch
const handlePromise = async () => {
    try {
        const message = await createRandomPromise();
        console.log(message);
    } catch (error) {
        console.error("Caught an error in async function:", error);
    }
};

// Call the async function
function fetching(){
  fetch("https://localhost:3000/api/home")
    .then((res) => {
      res.json()
        .then((data) => {
          console.log(data)
        })
    })
    .catch((err) => {
      console.log(err.message)
    })
}

async function fetchingWithAsync(){
  try {
    const res = await fetch("https://localhost:3000/api/home");
    const data = await res.json();
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
}

fetchingWithAsync();