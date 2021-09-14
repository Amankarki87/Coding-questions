// Time - O(n^2)
// Space - O(n^2)

function sameBsts(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    if (arrayOne[0] !== arrayTwo[0]) return false;
    if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
    let smallest1 = getSmaller(arrayOne,arrayOne[0]);
    let smallest2 = getSmaller(arrayTwo,arrayTwo[0]);
    let greatest1 = getBigger(arrayOne,arrayOne[0]);
    let greatest2 = getBigger(arrayTwo,arrayTwo[0]);
    return sameBsts(smallest1,smallest2) && sameBsts(greatest1,greatest2);
}

function getSmaller(arr,value) {
    let smallest = [];

    for (let i = 1;i<arr.length;i++) {
        if (arr[i] < value) {
            smallest.push(arr[i]);
        }
    }
    return smallest;
}

function getBigger(arr,value) {
    let greatest = [];

    for (let i = 1;i<arr.length;i++) {
        if (arr[i] >= value) {
            greatest.push(arr[i]);
        }
    }
    return greatest;
}

// Optimize space complexity to O(d)
console.log(sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 11],[10, 8, 5, 15, 2, 12, 11, 94, 81]));
  