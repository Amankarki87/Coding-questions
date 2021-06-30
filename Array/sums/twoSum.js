// Using 2 for loop. Time complexity - 0(n^2), Space complexity- 0(1)

// function twoNumberSum(array, targetSum) {
// 	if (array.length > 0) {
//         for (let i = 0;i < array.length;i++) {

//             for (let j = i+1; j < array.length; j++) {
//                 if (array[i] + array[j] === targetSum) {
//                     console.log(array[i],array[j])
//                     return [array[i],array[j]];
//                 }
//             }
//         }
// 	}

//     return [];
// }

// Using hash table values Time complexity 0(n), space complexity 0(n)

// function twoNumberSum(array, targetSum) {
// 	if (array.length > 0) {

//         let hash_table = {[array[0]]: true};

//         for (let i = 0;i < array.length;i++) {
//             let currentElement = array[i];
//             let potentialElement = targetSum - currentElement;

//             if (hash_table[potentialElement]) {
//                 console.log([potentialElement,currentElement]);
//                 return [potentialElement,currentElement];
//             }
            
//             hash_table[currentElement] = true;
//         }
// 	}

//     return [];
// }

// Using sorting. Time complexity 0(n log(n)), space complexity 0(1)

function twoNumberSum(array, targetSum) {
    if (array.length > 0) {
        array.sort((a,b) => a - b);
        let leftIndex = 0;
        let rightIndex = array.length - 1;
  
        while (leftIndex < rightIndex) {
            let currentSum = array[leftIndex] + array[rightIndex];
            if (currentSum < targetSum ) {
                leftIndex = leftIndex + 1;
            } else if (currentSum > targetSum) {
                rightIndex = rightIndex - 1; 
            } else {
                console.log([array[leftIndex],array[rightIndex]])
                return [array[leftIndex],array[rightIndex]];
            }
        }
    }
    return [];
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6],10)