// Using brute force and sorting. Time complexity - O(nlog(n)),space - O(n)

// function sortedSquaredArray(array) {
//     let squaredArray = new Array(array.length).fill(0);
      
//     for (let i = 0; i < array.length; i++) {
//         squaredArray.push(array[i] * array[i]);
//     }
//     return squaredArray.sort((a,b) => a - b);
// }

// Using Absolute value.Time complexity - O(n),space - O(n)

function sortedSquaredArray(array) {
    let squaredArray = new Array(array.length).fill(0);
    let startIndex = 0;
    let endIndex = array.length - 1;
    let pointerToSquare = squaredArray.length - 1;

    while (pointerToSquare > -1) {
        let startDataAbsoluteValue = Math.abs(array[startIndex]);
        let endDataAbsoluteValue = Math.abs(array[endIndex]);

        if (startDataAbsoluteValue < endDataAbsoluteValue ) {
            squaredArray[pointerToSquare] = endDataAbsoluteValue * endDataAbsoluteValue;
            endIndex -= 1;
        } else {
            squaredArray[pointerToSquare] = startDataAbsoluteValue * startDataAbsoluteValue;
            startIndex += 1;
        }

        pointerToSquare -= 1;
    }

    console.log(squaredArray);
    return squaredArray;
}

sortedSquaredArray([-10, -5, 0, 5, 10])