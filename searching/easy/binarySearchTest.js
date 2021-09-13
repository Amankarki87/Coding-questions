function findThreeLargestNumbers(array) {
    return largestNumbers(array);
}

function largestNumbers(array) {
    let largest = [null,null,null];
    
    for (let i = 0;i<array.length;i++) {
        if (largest[2] < array[i]) {
            updateLargest(largest,array[i],2);
        } else if (largest[1] < array[i]) {
            updateLargest(largest,array[i],1);
        } else if (largest[0] < array[i]) {
            updateLargest(largest,array[i],0);
        }
    }

    console.log(largest)
    return largest;
}

function updateLargest(arr,currentElement,idx) {
    for (let i = 0;i<idx + 1;i++) {
        if (i === idx) {
            arr[i] = currentElement;
        } else {
            arr[i] = arr[i+1];
        }
    }

    return arr;
}

findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])