// Time - O(d * n) d - max number , n - no.s in array
// Space - O(n + b) n - no of array and b - decimal counts

function radixSort(array) {
    let maxNumber = Math.max(...array);
    let maxLength = maxNumber.toString().length;
    let digit = 0;
    for (let i = 0;i<maxLength;i++) {
        countingSort(array,digit);
        digit ++;
    }

    return array;
}

function countingSort(array,digit) {
    let countsArray = new Array(10).fill(0);
    let sortedArray = new Array(array.length).fill(0);
    let decimalColumn = 10 ** digit;

    for (const num of array) {
        let idx = Math.floor(num/decimalColumn) % 10;
        countsArray[idx]++;
    }

    // positions

    for (let i = 1;i < array.length;i++) {
        countsArray[i] += countsArray[i-1];
    }

    for (let i = array.length -1; i >= 0;i--) {
        let idx = Math.floor(array[i]/decimalColumn) % 10;
        countsArray[idx]--;
        sortedArray[countsArray[idx]] = array[i];
    }

    for (let i = 0;i<array.length;i++) {
        array[i] = sortedArray[i];
    }

    return array;
}

radixSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])