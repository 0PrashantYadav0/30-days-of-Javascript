// SORTING

// bubble sort
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// selection sort
function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// quick sort
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

// SEARCHING 

// linear search
function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

// binary search
function binarySearch(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

//STRING
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charSet = new Set();

  for (let end = 0; end < s.length; end++) {
      while (charSet.has(s[end])) {
          charSet.delete(s[start]);
          start++;
      }
      charSet.add(s[end]);
      maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

function countCharacterOccurrences(str) {
  const charCount = {};

  for (let char of str) {
      if (charCount[char]) {
          charCount[char]++;
      } else {
          charCount[char] = 1;
      }
  }

  // Log the results
  for (let char in charCount) {
      console.log(`${char}: ${charCount[char]}`);
  }
}

function rotateArray(arr, k) {
  const n = arr.length;
  // Handle cases where k is greater than the array length
  k = k % n;
  
  // Function to reverse a portion of the array
  function reverse(start, end) {
      while (start < end) {
          [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
          start++;
          end--;
      }
  }
  
  // Reverse the entire array
  reverse(0, n - 1);
  // Reverse the first k elements
  reverse(0, k - 1);
  // Reverse the remaining n - k elements
  reverse(k, n - 1);

  console.log(arr);
}

// Example usage:
rotateArray([1, 2, 3, 4, 5, 6, 7], 3); // Output: [5, 6, 7, 1, 2, 3, 4]


function mergeSortedArrays(arr1, arr2) {
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2
  const mergedArray = [];

  // Merge the arrays while there are elements in both
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          mergedArray.push(arr1[i]);
          i++;
      } else {
          mergedArray.push(arr2[j]);
          j++;
      }
  }

  // If there are remaining elements in arr1, add them
  while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
  }

  // If there are remaining elements in arr2, add them
  while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
  }

  console.log(mergedArray);
}

// Example usage:
mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

console.log(lengthOfLongestSubstring("hello"))
countCharacterOccurrences("hello")

// Fibonacci using dynamic programming
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

// Example usage:
console.log(fibonacci(10)); // Output: 55

//knapsack problem using dynamic programming
function knapsack(values, weights, W) {
  const n = values.length;
  const dp = Array(n + 1).fill(null).map(() => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= W; w++) {
          if (weights[i - 1] <= w) {
              dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
          } else {
              dp[i][w] = dp[i - 1][w];
          }
      }
  }

  return dp[n][W];
}

// Example usage:
const values = [60, 100, 120];
const weights = [10, 20, 30];
const W = 50;
console.log(knapsack(values, weights, W)); // Output: 220
