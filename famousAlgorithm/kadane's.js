// Time - O(n)
// Space - O(1)

function kadanesAlgorithm(array) {
    if (array.length === 0) return array[0];
    
    let negativeValue = array.some(v => v < 0);
    let maxSum = array[0];

    if (!negativeValue) {
        for (let j = 1;j<array.length;j++) {
            maxSum += array[j];
        }
    } else {
        let currentSum = array[0];
        
        for (let i = 1;i<array.length;i++) {
            currentSum = Math.max(array[i] + currentSum,array[i]);
            maxSum = Math.max(maxSum,currentSum);
        }
    }

    console.log(maxSum);
    return maxSum;
}

kadanesAlgorithm([3,-10,4]);