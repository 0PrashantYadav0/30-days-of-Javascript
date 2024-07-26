

function print10Number(){
  for(let i=0; i<10; i++){
      console.log(i);
  }
}

function table(num){
  for(let i=0; i<=10; i++){
      console.log(`${num} * ${i} = ${num*i}`);
  }
}

function sum(num){
  let sum = 0;
  while(num > 0){
    sum += num;
    num--;
  }
  console.log(sum)
}


function printNum(num){
  while(num >= 0){
    console.log(num);
    num--;
  }
}

function printPattern(){
  //*
  //**
  //***
  //****
  //*****
  for(let i=0; i<5; i++){
    let str = "";
    for(let j=0; j<=i; j++){
      str += "*";
    }
    console.log(str);
  }
}


function loopWithCont(){
  for(let i=0; i<10; i++){
    if(i == 5){
      continue;
    }
    console.log(i);
  }
}

function loopWithBreak(){
  for(let i=0; i<10; i++){
    if(i == 7){
      break;
    }
    console.log(i);
  }
}


// calling the function 
print10Number();
table(5);
sum(5);
printNum(5);
printPattern();
loopWithCont();
loopWithBreak();
