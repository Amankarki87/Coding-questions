// Time complexity - O(n)
// Space Complexity - O(1)

function subarraySort(array) {
    let maxUnSortedNumber = -Infinity;
    let minUnSortedNumber = Infinity;

    for (let i = 0; i < array.length;i++) {
        if (outOfOrder(i,array)) {
            maxUnSortedNumber = Math.max(maxUnSortedNumber,array[i]);
            minUnSortedNumber = Math.min(minUnSortedNumber,array[i]);
        }
    }

    if (minUnSortedNumber === Infinity) {
        return [-1,-1];
    }

    let startIndex = 0;

    while (startIndex < array.length - 1) {
        if (array[startIndex] > minUnSortedNumber) {
            break;
        }
        startIndex++;
    }

    let endIndex = array.length - 1;

    while (endIndex > 0) {
        if (array[endIndex] < maxUnSortedNumber) {
            break;
        }
        endIndex--;
    }

    console.log([startIndex,endIndex]);
    return [startIndex,endIndex];
}

function outOfOrder(i,array) {
    if (i === 0) { return array[i] > array[i+1]}
    if (i === array.length - 1) { return array[i-1] > array[i] }
    return array[i] < array[i-1] || array[i] > array[i+1];  
}

subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]);