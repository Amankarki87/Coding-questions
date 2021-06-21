// Time complexity - O(N)
// Space complexity - O(1)

function maxSubsetSumNoAdjacent(array) {
    if (!array.length > 0) {
        return 0;
    }
    
    if (array.length === 1) {
        return array[0];
    }

    array[1] = Math.max(array[0],array[1]);

    if (array.length > 2) {
        for (let i = 2;i<array.length;i++) {
            array[i] = Math.max(array[i-1],array[i-2] + array[i]);
        }
    }

    console.log(array[array.length - 1]);
    return array[array.length - 1];
}

maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]);