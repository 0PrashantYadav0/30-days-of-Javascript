
// Here it will give undefined because of hoisting.
console.log(num);
var num = 23;
// It will print 23 because of hoisting.
console.log(num);


// console.log(value);
// This will show error because let and const are not hoisted in JavaScript like var. 
// So, we can't access the variable before it's declaration.

let value = 23;
console.log(value);

function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 1
}

console.log(typeof(ans)) // will print undefined
var ans = true;
console.log(typeof(ans)) // will print boolean