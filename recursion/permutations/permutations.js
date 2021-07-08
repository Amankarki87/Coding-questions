// Time complexity - O(n^2 * n!)
// Space complexity - O(n * n!)

// function getPermutations(array) {
//     let permutations = [];
//     permutationsHelper(array,[],permutations);
//     console.log(permutations);
//     return permutations;
// }

// function permutationsHelper(array,currentPermutation,permutations) {
//     if (!array.length && currentPermutation.length) {
//         permutations.push(currentPermutation);
//     } else {
//         for (let i = 0;i < array.length;i++) {
//             const newArray = array.slice(0,i).concat(array.slice(i+1));
//             const newPermutation = currentPermutation.concat([array[i]]);
//             permutationsHelper(newArray,newPermutation,permutations);
//         }
//     }
// }

// Time - O(n*n!)
// Space - O(n*n!)

function getPermutations(array) {
    let permutations = [];
    permutationsHelper(0,array,permutations);
    console.log(permutations);
    return permutations;
}

function permutationsHelper(i,array,permutations) {
    if (i === array.length - 1) {
        permutations.push(array.slice());
    } else {
        for (let j = i;j < array.length;j++) {
            swap(array,i,j);
            permutationsHelper(i+1,array,permutations);
            swap(array,i,j);
        }
    }
}

function swap(array,i,j) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}
getPermutations([1, 2, 3])