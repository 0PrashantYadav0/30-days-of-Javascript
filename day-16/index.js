//function
function fac(num){
  if(num === 1){
    return 1;
  }
  return num*fac(num-1);
}

function fib(n){
  if(n === 1)
    return 1;
  if(n === 0)
    return 0;
  return fib(n-1)+fib(n-2);
}

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
}

// console.log(sumArray([])); // Output: 0
// console.log(sumArray([1, 2, 3, 4])); // Output: 10
// console.log(sumArray([-1, 5, -3, 2])); // Output: 3

function maxElement(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr[0], maxElement(arr.slice(1)));
  }
}

// console.log(maxElement([1, 2, 3, 4])); // Output: 4
// console.log(maxElement([-1, 5, -3, 2])); // Output: 5

function reverseString(str){
  if(str.length === 0){
    return ""
  }
  return reverseString(str.slice(1)) + str[0];
}

function checkPalindrom(str){
  if(str.length === 0){
    return true;
  }

  if(str[0] !== str[str.length - 1]){
    return false;
  }

  checkPalindrom(str.slice(1))
  return true;
}

function binarySearch(arr, start, end, target){
  let mid = end - (end-start)/2;
  if(arr[mid] === target){
    return mid
  }
  if(start === end){
    return -1;
  }
  if(arr[mid] < target){
    return binarySearch(arr, mid+1, end ,target)
  }else{
    return binarySearch(arr, start, mid-1, target )
  }
}

function count(arr, target) {
  if (arr.length === 0) {
    return 0;
  } else {
    if(arr[0] === target){
      return count(arr.slice(1), target) + 1;
    }else{
      return count(arr.slice(1), target);
    }
  }
}

class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrderTraversal(node){
  if (node === null) return;

  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

function calculateDepth(node) {
  if (node === null) return 0;

  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
//     1
//    /  \
//   2    3
//  / \
// 4  5
inOrderTraversal(root); // Output: 4 2 5 1 3
console.log(calculateDepth(root))
// let arr = [3, 4, 3, 3, 3, 14, 15]
// console.log(binarySearch(arr, 0, arr.length-1,10))
// console.log(count(arr, 3))
// console.log(checkPalindrom("mmmuuuummmm"))
// console.log(reverseString("string"))


