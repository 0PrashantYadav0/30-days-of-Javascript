
class Person {

  constructor(person){
    this.name = person.name
    this.age = person.age
    this.work = person.work
  }
  
  greet(){
    console.log(`Hello ${this.name}`)
  }

  updateAge(age){
    this.age = age;
    console.log(`Update age of ${this.name} is ${this.age}`)
  }

  static genericGreeting() {
    return 'Hello! Welcome to our program.';
  }
}


class Student extends Person{
  #studentId

  static totalStudents = 0;

  constructor(student){
    super({name: student.name, age: student.age, work: "student"})
    this.#studentId = student.studentId;
    Student.totalStudents++;
  }

  getStudentID(){
    return this.#studentId
  }

  greet(){
    console.log(`Hello from ${this.name} with student id ${this.studentId}`)
  }
}

const person = new Person({name : "prashant",age : 21, work : "student"})
console.log(person)
person.greet();
person.updateAge(20);

const student = new Student({name: "prashant", age : 20, studentId : 25})
console.log(student);
console.log(student.getStudentID())
console.log(student.studentId)
student.greet();

console.log(Person.genericGreeting()); 

console.log(Student.totalStudents)

class Person {
  #firstName;
  #lastName;
  #age;
  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  // Getter for full name
  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  // Setter for updating the name
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  greet() {
    return `Hello, my name is ${this.fullName} and I am ${this.#age} years old.`;
  }

  static genericGreeting() {
    return 'Hello! Welcome to our program.';
  }
}

const personInstance = new Person('Alice', 'Johnson', 30);
console.log(`Full Name: ${personInstance.fullName}`); 
personInstance.fullName = 'Emily Davis';
console.log(`Updated Full Name: ${personInstance.fullName}`); 
console.log(personInstance.greet()); 


class Account{
  #balance;
  constructor(name){
    this.name = name;
    this.#balance = 0;
  }

  deposit(money){
    this.#balance += money;
  } 

  withdraw(money){
    this.#balance -= money
  }

  amount(money){
    return this.#balance
  }
}

const account = new Account("prashant");
console.log(account.amount())

account.deposit(10000);
console.log(account.amount())

account.withdraw(5460);
console.log(account.amount());