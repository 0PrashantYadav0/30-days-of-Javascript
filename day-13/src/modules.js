export const sum = (num1, num3) => {
  return num1 + num3;
}

export const PI = 3.14159;
export const E = 2.71828;

export const data = {
  name : "data name", 
  type : "number"
}

export const person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
  updateEmail(newEmail) {
    this.email = newEmail;
    console.log(`My new email is ${this.email}.`);
  }
};

export default function hello(){
  console.log("Hello")
}



