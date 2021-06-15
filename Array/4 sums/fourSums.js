// Time complexity - O(n^3)
// Space complexity - O(n^2) As we may store multiple pairs in hash table for single sum

function fourNumberSum(array, targetSum) {
    let pairs = [];
    let hash_pairs = {};

    for (let i = 1;i<array.length;i++) {
        
        // Iterate through all the element and generate the sum.
        for (let j= i+1;j<array.length;j++) {
            let sum = array[i] + array[j];
            let difference = targetSum - sum;
            if(hash_pairs[difference]) {
                console.log(hash_pairs[difference])
                for (const element of hash_pairs[difference]) {
                    pairs.push(element.concat(array[i],array[j]));
                }
            }
        }

        for (let k = i-1;k >= 0; k--) {
            let sum = array[k] + array[i];
            if (!hash_pairs[sum]) {
                hash_pairs[sum] = [];
            }
            hash_pairs[sum].push([array[k],array[i]]);
        }
    }

    return pairs;
}

fourNumberSum([7, 6, 4, -1, 1, 2],16);