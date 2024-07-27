

function oddEven(num){
  if(num%2 == 0){
    return "Even";
  }
  return "Odd";
}
function square(num){
  return num*num;
}

function findMax(num1,num2){
  if(num1>num2){
    return num1;
  }
  return num2;
} 

function concatString(str1,str2){
  return str1+str2;
} 

const sum = (num1,num2) => num1+num2;

const contain = (str, ch) => str.includes(ch);

const product = (num1,num2=4) => num1*num2;


const greeting = (name, age=18) => `Hello ${name}, you are ${age} years old`;

const higherOrderFunction = (num, operation) => {
  for(let i=0;i<num;i++){
    console.log(operation(i));
  }
}

function operation(num){
  return num*num;
}

const twoFunction = (num, fun1, fun2) => {
  const ans = fun1(num);
  return fun2(ans);
}

//calling all the function
console.log(oddEven(5));
console.log(square(5));
console.log(findMax(5,6));
console.log(concatString("Hello","World"));
console.log(sum(5,6));
console.log(contain("Hello","H"));
console.log(product(5));
console.log(greeting("John"));
higherOrderFunction(5,operation);
console.log(twoFunction(5,square,oddEven));

