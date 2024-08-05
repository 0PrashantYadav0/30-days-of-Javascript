
function arrayFrom0ToNumber(num){
  const arr = [];
  for(let i=0;i<num;i++){
    arr[i] = i+1;
  }
  printArr(arr)
}

function fristAndLast(arr){
  console.log(arr[0]);
  console.log(arr[arr.length - 1]);
}

function printArr(arr){
  //print all value in one line

}

function funInArray(){
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  arr.push(10); // output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  printArr(arr)
  arr.pop(); // output : [1, 2, 3, 4, 5, 6, 7, 8, 9]
  printArr(arr);
  arr.shift(); // output : [2, 3, 4, 5, 6, 7, 8, 9]
  printArr(arr);
  arr.unshift(10); // output : [10, 2, 3, 4, 5, 6, 7, 8, 9]
  printArr(arr);
}

function arrayMethods(){
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const print = (i) => {
    console.log(i)
  }
  arr.map(print);
  const even = arr.filter(i => i%2 === 0 )
  console.log(even)

  const sum = arr.reduce((sum, currSum) => currSum+sum, 0)

  console.log(sum)
}

function loops(num=[1,2]){
  for(let i=0;i<num.length;i++){
    console.log(num[i])
  }

  num.forEach((i) => {
    console.log(i)
  })

}

function twoDArray(){
  const num = [[1, 2, 3], [4, 5, 6]]
  console.log(num)
  console.log(num[1][2])
}

arrayFrom0ToNumber(5);
fristAndLast([2, 4, 5, 6, 7])
funInArray();
arrayMethods();
loops();
twoDArray()