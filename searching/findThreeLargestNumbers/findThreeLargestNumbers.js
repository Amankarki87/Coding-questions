// Time - O(n)
// Space - O(1)

function findThreeLargestNumbers(array) {
    return largestNumbers(array);
}

function largestNumbers(array) {
    let threeLargests = [null,null,null];

    for (let i = 0;i<array.length;i++) {
        if (threeLargests[2] === null || threeLargests[2] < array[i]) {
            shiftAndUpdate(threeLargests,array[i],2)
        } else if (threeLargests[1] === null || threeLargests[1] < array[i]) {
            shiftAndUpdate(threeLargests,array[i],1)
        } else if (threeLargests[0] === null  || threeLargests[0] < array[i]) {
            shiftAndUpdate(threeLargests,array[i],0)
        }
    }
    console.log(threeLargests);
    return threeLargests;
}

function shiftAndUpdate(arr,num,idx) {
    for (let i = 0;i<idx + 1;i++) {
        if (idx === i) {
            arr[i] = num;
        } else {
            arr[i] = arr[i+1];
        }
    }
    return arr;
}

findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);
  