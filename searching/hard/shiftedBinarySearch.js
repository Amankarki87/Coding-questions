// Time - O(n + m)
// Space - O(1)

function shiftedBinarySearch(array, target) {
    return shiftedBinarySearchHelper(array,target);
}

function shiftedBinarySearchHelper(array,target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right)/2);

        if (array[middle] === target) {
            console.log("Here answer",middle);
            return middle;
        } else {
            if (array[left] <= array[middle]) {
                if (target < array[middle] && target >= array[left]) {
                    right = middle - 1;
                } else {
                    left = middle + 1;
                }
            } else {
                if (target < array[right] ) {
                    left = middle + 1;
                } else {
                    right = middle - 1;
                }
            }
        }
    }

    return -1;
}

shiftedBinarySearch([45, 61, 71, 72, 73, 0, 1, 21, 33, 37],72);