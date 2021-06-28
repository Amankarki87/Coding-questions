// Time complexity - O(n),
// Space Complexity - O(n)

function maximizeExpression(array) {
    if (array.length < 4) {return 0;}
    
    let maxOfA = new Array(array.length).fill(-Infinity);
    maxOfA[0] = array[0];

    let index = 1;
    for (let i = index;i < array.length;i++) {
        maxOfA[i] = Math.max(maxOfA[i-1],array[i]);
    }

    let maxOfB = new Array(array.length).fill(-Infinity);
    maxOfB[index] = maxOfA[index - 1] - array[index];

    for (let pointer = index + 1;pointer < array.length;pointer ++) {
        maxOfB[pointer] = Math.max(maxOfB[pointer - 1],maxOfA[pointer - 1] - array[pointer]);
    }

    let maxOfC = new Array(array.length).fill(-Infinity);
    maxOfC[index + 1] = maxOfB[index] + array[index + 1];

    for (let pointer = index + 1;pointer < array.length;pointer ++) {
        maxOfC[pointer] = Math.max(maxOfC[pointer - 1],maxOfB[pointer - 1] + array[pointer]);
    }

    let maxOfD = new Array(array.length).fill(-Infinity);
    maxOfD[index + 2] = maxOfC[index] - array[index + 1];

    for (let pointer = index + 2;pointer < array.length;pointer ++) {
        maxOfD[pointer] = Math.max(maxOfD[pointer - 1],maxOfC[pointer - 1] - array[pointer]);
    }

    console.log(maxOfD[array.length - 1]);
    return maxOfD[array.length - 1];
}

maximizeExpression([3, 6, 1, -3, 2, 7]);