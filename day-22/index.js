
function addTwoNumber(arr1, arr2){
  let result = [];
  let carry = 0;
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  while(i >= 0 || j >= 0){
    let sum = carry;
    if(i >= 0){
      sum += arr1[i];
      i--;
    }
    if(j >= 0){
      sum += arr2[j];
      j--;
    }
    carry = Math.floor(sum / 10);
    result.unshift(sum % 10);
  }
  if(carry){
    result.unshift(carry);
  }
  return result;
}

function longestSubstringWithoutRepeatingCharacters(str){
  let map = {};
  let left = 0;
  let max = 0;
  for(let i = 0; i < str.length; i++){
    if(map[str[i]] >= left){
      left = map[str[i]] + 1;
    }
    map[str[i]] = i;
    max = Math.max(max, i - left + 1);
  }
  return max;
}

function containerWithMostWater(height){
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while(i < j){
    max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
    if(height[i] < height[j]){
      i++;
    }else{
      j--;
    }
  }
  return max;
}

function threeSum(arr){
  let result = [];
  arr.sort((a, b) => a - b);
  for(let i = 0; i < arr.length - 2; i++){
    if(i === 0 || (i > 0 && arr[i] !== arr[i - 1])){
      let low = i + 1;
      let high = arr.length - 1;
      let sum = 0 - arr[i];
      while(low < high){
        if(arr[low] + arr[high] === sum){
          result.push([arr[i], arr[low], arr[high]]);
          while(low < high && arr[low] === arr[low + 1]){
            low++;
          }
          while(low < high && arr[high] === arr[high - 1]){
            high--;
          }
          low++;
          high--;
        }else if(arr[low] + arr[high] < sum){
          low++;
        }else{
          high--;
        }
      }
    }
  }
  return result;
}


function groupAnagrams(strs){
  let map = {};
  for(let str of strs){
    let key = str.split('').sort().join('');
    if(!map[key]){
      map[key] = [];
    }
    map[key].push(str);
  }
  return Object.values(map);
}

console.log(addTwoNumber([2, 4, 3], [5, 6, 4])) // [7, 0, 8]
console.log(longestSubstringWithoutRepeatingCharacters('abcabcbb')) // 3
console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1, -1, 2], [-1, 0, 1]]
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) // [["eat","tea","ate"],["