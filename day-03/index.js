
function checkNumber(num){
  if(num == 0){
    return "Zero";
  }
  if(num > 0){
    return "Positive";
  }
  else{
    return "Negative";
  }
}

function voteEligibility(age){
  if(age >= 18){
    return "Eligible to vote";
  }
  else{
    return "Not eligible to vote";
  }
}

function greaterInThree(num1, num2, num3){
  if(num1 > num2 && num1 > num3){
    return num1;
  }
  else if(num2 > num1 && num2 > num3){
    return num2;
  }
  else{
    return num3;
  }
}

function oddAndEven(num){
  return num % 2 == 0 ? "Even" : "Odd";
}

function day(num){
  switch(num){
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Invalid Input";
  }
}

function grade(marks){
  switch(true){
    case marks >= 90: return "A";
    case marks >= 80: return "B";
    case marks >= 70: return "C";
    case marks >= 60: return "D";
    case marks >= 50: return "E";
    default: return "F";
  }
}

function leapYear(year){
  if(year % 4 == 0){
    if(year % 100 == 0){
      if(year % 400 == 0){
        return "Leap Year";
      }
      else{
        return "Not a Leap Year";
      }
    }
    else{
      return "Leap Year";
    }
  }
  else{
    return "Not a Leap Year";
  }
}