// Time - O(2^n * n)
// Space - O(2^n * n)

// function powerset(array) {
//     let subsets = [[]];

//     for (const elem of array) {
//         let subSetLength = subsets.length;
//         for (let i = 0; i < subSetLength;i++) { 
//             subsets.push(subsets[i].concat(elem));
//         }
//     }

//     console.log(subsets);
//     return subsets;
// }

// Time - O(2^n * n)
// Space - O(2^n * n)

function powerset(array,idx = null) {

    if (idx === null) {
        idx = array.length - 1;
    }

    if (idx < 0) {
        return [[]];
    }

    const elem = array[idx];
    const subsets = powerset(array,idx - 1);
    const length = subsets.length;
    
    for (let i = 0;i<length;i++) {
        const currentSubset = subsets[i];
        subsets.push(currentSubset.concat(elem));
    }

    console.log(subsets);
    return subsets;
}

powerset([1, 2, 3])