function twoSum(arr, target){
  let map = {};
  for(let i = 0; i < arr.length; i++){
    let diff = target - arr[i];
    if(map[diff] !== undefined){
      return [map[diff], i];
    }
    map[arr[i]] = i;
  }
  return [];
}

function reverseString(str){
  return str.split('').reverse().join('');
}

function reverseNumber(num){
  return parseInt(num.toString().split('').reverse().join(''));
}

function isPalindrome(str){
  return str === reverseString(str);
}

function mergeSortedArray(arr1, arr2){
  let result = [];
  let i = 0, j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      result.push(arr1[i]);
      i++;
    }else{
      result.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    result.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function validParentesis(str){
  let stack = [];
  let map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for(let i = 0; i < str.length; i++){
    if(map[str[i]]){
      stack.push(str[i]);
    }else{
      let last = stack.pop();
      if(str[i] !== map[last]){
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
console.log(reverseString('hello')) // olleh
console.log(reverseNumber(123)) // 321
console.log(isPalindrome('racecar')) // true
console.log(mergeSortedArray([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6]
console.log(validParentesis('()[]{}')) // true
console.log(validParentesis('([)]'))

