// Time - O(log(n))
// Space - O(log(n))

// function binarySearch(array, target) {
//     return binarySearchHelper(array,target,0,array.length - 1)
// }

// function binarySearchHelper(array,target,left,right) {
//     if (left > right) return -1;
//     let middle = Math.floor((left + right)/2);
//     if (array[middle] === target) {
//         console.log("--- middle is ----",middle);
//         return middle;
//     } else if (array[middle] < target) {
//         left = middle + 1;
//         return binarySearchHelper(array,target,left,right);
//     } else {
//         right = middle - 1;
//         return binarySearchHelper(array,target,left,right);
//     }
// }

// Time - O(log(n))
// Space - O(1)

function binarySearch(array,target) {
    return binarySearchHelper(array,target,0,array.length - 1);
}

function binarySearchHelper(array,target,left,right) {
    while (left <= right) {
        let middle = Math.floor((left + right)/2);

        if (array[middle] === target) {
            return middle;
        } else if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73],33);