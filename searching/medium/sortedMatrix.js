// Time - O(nlog(n))
// Space - O(1)

// function searchInSortedMatrix(matrix, target) {
//     for (let i = 0;i<matrix.length;i++) {
//         let found = binarySearch(matrix[i],0,matrix[i].length,target);

//         if (found !== -1) {
//             console.log([i,found])
//             return [i,found];
//         }
//     }

//     return [-1,-1];
// }

// function binarySearch(arr,left,right,target) {
//     while (left <= right) {
//         const middle = Math.floor((left + right)/2);
        
//         if (arr[middle] === target) {
//             return middle;
//         } else if (arr[middle] < target) {
//             left = middle + 1;
//         } else {
//             right = middle - 1;
//         }
//     }

//     return -1;
// }

// Time - O(n+m)
// Space - O(1)

function searchInSortedMatrix(array,target) {
    return sortedMatrixHelper(array,target);
}

function sortedMatrixHelper(array,target) {
    let row = 0;
    let column = array[0].length - 1;

    while (row < array.length && column >= 0 ) {
        if (target < array[row][column]) {
            column --;
        } else if (target > array[row][column]) {
            row ++;
        } else {
            return [row,column];
        }
    }

    return [-1,-1];
}

searchInSortedMatrix([
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
],43);