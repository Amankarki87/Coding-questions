function isMonotonic(array) {
    if (array.length < 2) {
        return true;
    }

    let isNonDecreasing = true;
    let isNonIncreasing = true;

    for (let i = 1; i < array.length;i++) {
        if (array[i] < array[i -1]) {
            isNonDecreasing = false;
        } 

        if (array[i] > array[i -1]) {
            isNonIncreasing = false;
        }
    }

    return isNonDecreasing || isNonIncreasing;
}

isMonotonic([1, 5, 10, 1100, 1101, 1102, 9001]);