// Time - O(n)
// Space - O(1)

function indexEqualsValue(array) {
    let leftIdx = 0;
    let rightIdx = array.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleValue = array[middleIdx];

        if ((middleValue === middleIdx && middleIdx === 0) || (middleValue === middleIdx && array[middleIdx -1] < middleIdx -1)) {
            return middleIdx;
        } else if (middleValue < middleIdx) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }

    return -1;
}

indexEqualsValue([-5, -3, 0, 3, 4, 5, 9])