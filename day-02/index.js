function addTwoNumber(a, b){
  const ans = a + b;
  console.log(ans);
}

function subTwoNumber(a, b){
  const ans = a - b;
  console.log(ans);
}

function mulTwoNumber(a, b){
  const ans = a * b;
  console.log(ans);
}

function divTwoNumber(a, b){
  const ans = a / b;
  console.log(ans);
}

function modTwoNumber(a, b){
  const ans = a % b;
  console.log(ans);
}

function operators(){
  let i=0;
  i+=4;
  console.log(i);

  i-=2;
  console.log(i);

  console.log(i < 3);
  console.log(i > 3);

  console.log(0 && "0")
  console.log(0 || "0")
  console.log(!false)
}

function checkNumber(number){
  let ans = number > 0? "Positive" : "Negative";
  console.log(ans);
}

checkNumber(-3);
operators();
addTwoNumber(2, 3);
subTwoNumber(2, 3);
mulTwoNumber(2, 3);
divTwoNumber(2, 3);
modTwoNumber(2, 3);