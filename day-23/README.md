# Day 22

## Task
<img src="./day-22.png"/>

## Code 
[Click Here](./index.js)

## Advanced JavaScript Algorithms: Analyzing Key Functions

The new set of JavaScript functions provided illustrates several advanced algorithmic techniques and problem-solving approaches. Here's an overview of what each function teaches us and how it can be applied in real-world scenarios:

### 1. **Median of Two Sorted Arrays**

```javascript
function medianOfTwoSortedArrays(arr1, arr2) {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }
    let n = mergedArr.length;
    if (n % 2 === 0) {
        return (mergedArr[n / 2 - 1] + mergedArr[n / 2]) / 2;
    } else {
        return mergedArr[Math.floor(n / 2)];
    }
}
```

**Key Concepts:**
- **Merging Arrays:** Combines two sorted arrays into a single sorted array.
- **Median Calculation:** Finds the median in the merged array, demonstrating an important statistical computation.
- **Time Complexity:** The merging step is O(n + m), where n and m are the lengths of the input arrays.

### 2. **Merge Two Sorted Arrays**

```javascript
function mergeTwoSortedArrays(arr1, arr2) {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }
    return mergedArr;
}
```

**Key Concepts:**
- **Two-Pointer Technique:** Efficiently merges two sorted arrays using two pointers.
- **Array Operations:** Demonstrates array manipulation and merging techniques.
- **Scalability:** Handles merging in linear time O(n + m), making it efficient for large arrays.

### 3. **Tapping Rain Water**

```javascript
function tappingRainWater(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let result = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                result += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                result += rightMax - height[right];
            }
            right--;
        }
    }
    return result;
}
```

**Key Concepts:**
- **Two-Pointer Approach:** Calculates trapped rainwater using two pointers from both ends of the array.
- **Dynamic Programming Concepts:** Utilizes the idea of maintaining maximum heights on both sides.
- **Time Complexity:** Achieves linear time complexity O(n), suitable for large inputs.

### 4. **N Queens Problem**

```javascript
function NQueens(n) {
    let result = [];
    let board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));
    function isValid(board, row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
            if (col - row + i >= 0 && board[i][col - row + i] === 'Q') {
                return false;
            }
            if (col + row - i < n && board[i][col + row - i] === 'Q') {
                return false;
            }
        }
        return true;
    }
    function solveNQueens(board, row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q';
                solveNQueens(board, row + 1);
                board[row][col] = '.';
            }
        }
    }
    solveNQueens(board, 0);
    return result;
}
```

**Key Concepts:**
- **Backtracking Algorithm:** Solves the N Queens problem by exploring all possible placements and backtracking when necessary.
- **Validation:** Checks for conflicts in rows, columns, and diagonals.
- **Complexity:** The backtracking approach can be computationally intensive, but it is an elegant solution for constraint-based problems.

### 5. **Word Ladder**

```javascript
function wordLadder(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0;
    }
    let queue = [[beginWord, 1]];
    while (queue.length) {
        let [word, level] = queue.shift();
        if (word === endWord) {
            return level;
        }
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < 26; j++) {
                let newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    queue.push([newWord, level + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0;
}
```

**Key Concepts:**
- **Breadth-First Search (BFS):** Finds the shortest transformation sequence from `beginWord` to `endWord` using BFS.
- **Word Mutation:** Explores all possible one-character transformations at each step.
- **Complexity:** The approach is efficient for large word lists, with time complexity dependent on the size of the word list and the length of the words.

### Conclusion

These functions cover a range of advanced algorithms and techniques, including array merging, dynamic programming, backtracking, and BFS. Mastering these concepts enhances your ability to tackle complex problems efficiently and can be applied to various real-world scenarios, from game development to data processing.