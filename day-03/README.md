# Day 3: Report

## Task
<img src="./day-03.png"/>

### Report on Achievements and Learnings from Given Functions

#### Overview
We explored several functions that perform basic checks and operations. Each function is designed to address a specific problem, utilizing conditional statements, logical operators, and switch cases. This exercise helped us solidify our understanding of fundamental programming concepts.

### Detailed Learnings and Achievements

#### 1. Function: `checkNumber`
```javascript
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
```
**Learning:**
- **Conditional Statements:** The function uses a series of `if` statements to classify a number as zero, positive, or negative.
- **Return Statements:** Each condition results in a different return value, showcasing how return statements can be used to output specific results based on conditions.

**Achievement:**
- **Understanding of number classification:** We learned how to check and return different classifications of a number using conditionals.

#### 2. Function: `voteEligibility`
```javascript
function voteEligibility(age){
  if(age >= 18){
    return "Eligible to vote";
  }
  else{
    return "Not eligible to vote";
  }
}
```
**Learning:**
- **Simple Conditions:** This function checks if a person meets the age requirement for voting.
- **Greater Than or Equal To:** Use of `>=` operator to check age criteria.

**Achievement:**
- **Age Eligibility Check:** We learned to determine eligibility based on a numerical threshold.

#### 3. Function: `greaterInThree`
```javascript
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
```
**Learning:**
- **Logical AND Operator:** The function uses `&&` to compare three numbers and find the greatest.
- **Multiple Conditions:** Handling multiple conditions in a sequence to determine the largest number.

**Achievement:**
- **Finding the Maximum Value:** We learned how to compare three values and return the largest.

#### 4. Function: `oddAndEven`
```javascript
function oddAndEven(num){
  return num % 2 == 0 ? "Even" : "Odd";
}
```
**Learning:**
- **Ternary Operator:** The function uses the ternary operator to simplify conditional logic.
- **Modulo Operator:** Use of `%` to determine if a number is odd or even.

**Achievement:**
- **Even or Odd Check:** Efficiently determining if a number is odd or even using concise conditional expressions.

#### 5. Function: `day`
```javascript
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
```
**Learning:**
- **Switch Case Statements:** Using `switch` to map numbers to days of the week.
- **Default Case:** Handling invalid inputs with a default return value.

**Achievement:**
- **Day Mapping:** Converting numerical input into corresponding days of the week, enhancing understanding of control flow with switch statements.

#### 6. Function: `grade`
```javascript
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
```
**Learning:**
- **Switch with Conditions:** Using a `switch` statement with conditions, showcasing flexibility in decision-making.
- **Grade Classification:** Mapping numeric ranges to grade categories.

**Achievement:**
- **Grade Assignment:** Learned to classify numeric scores into grades using switch cases.

#### 7. Function: `leapYear`
```javascript
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
```
**Learning:**
- **Nested Conditions:** The function uses nested `if` statements to check leap year conditions.
- **Modulo Operator:** Use of `%` to perform divisibility checks.

**Achievement:**
- **Leap Year Check:** We learned to determine if a year is a leap year by checking specific divisibility rules.

### Summary
Through these exercises, we improved our understanding of:
- Conditional statements (`if`, `else`, `switch`)
- Logical operators (`&&`, `||`)
- Ternary operators
- Control flow in functions
- Practical applications of basic programming constructs

These functions helped reinforce core programming skills, making us more proficient in writing and understanding conditional logic and control flow in JavaScript.
