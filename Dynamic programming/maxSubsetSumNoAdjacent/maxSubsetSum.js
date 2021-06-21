// Time complexity - O(N)
// Space complexity - O(N)

function maxSubsetSumNoAdjacent(array) {
    if (!array.length > 0) {
        return 0;
    }
    
    if (array.length === 1) {
        return array[0];
    }

    let maximumSumArray = [];
    maximumSumArray[0] = array[0];
    maximumSumArray[1] = Math.max(array[0],array[1]);

    if (array.length > 2) {
        for (let i = 2;i<array.length;i++) {
            maximumSumArray[i] = Math.max(maximumSumArray[i-1],maximumSumArray[i-2] + array[i]);
        }
    }

    console.log(maximumSumArray[maximumSumArray.length - 1]);
    return maximumSumArray[maximumSumArray.length - 1];

}

maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]);