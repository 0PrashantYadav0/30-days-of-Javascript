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

console.log(medianOfTwoSortedArrays([1, 3], [2])) // 2
console.log(mergeTwoSortedArrays([1, 2, 3], [2, 5, 6])) // [1, 2, 2, 3, 5, 6]
console.log(tappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
console.log(NQueens(4)) // [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
console.log(wordLadder('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])) // 5