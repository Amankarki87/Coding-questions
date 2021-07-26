// Time complexity - O(n), Space complexity - O(n)

// function firstDuplicateValue(array) {
//     let found = -1;
//     if (!array.length > 0) {
//         return -1;
//     }

//     let currentValue = {[array[0]]: true};

//     for (let i=1;i<array.length;i++) {
//         if (currentValue[array[i]]) {
//             found = array[i];
//             break;
//         }
//         currentValue[array[i]] = true;
//     }
//     console.log(found)
//     return found;
// }

// Time complexity - O(n), Space complexity - O(1)

function firstDuplicateValue(array) {
    for (let i=0;i<array.length;i++) {
        const absValue = Math.abs(array[i]);
        if (array[absValue - 1] < 0) {
            return absValue;
        }
        array[absValue-1] *= -1; 
    }
    return -1;
}

firstDuplicateValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10])