function quickSort(array) {
    console.log(quickSortHelper(0,array.length - 1,array)); 
    // return quickSortHelper(0,array.length - 1,array);
}

function quickSortHelper(startIdx,endIdx,array) {
    if (startIdx < endIdx) {
        let partitionIdx = partition(startIdx,endIdx,array);
        quickSortHelper(startIdx,partitionIdx - 1,array);
        quickSortHelper(partitionIdx + 1,endIdx,array);
    }

    return array;
}

function partition(startIdx,endIdx,array) {
    let pivotIdx = startIdx;
    let pivot = array[pivotIdx];

    while (startIdx < endIdx) {

        while (array[startIdx] <= pivot) {
            startIdx += 1;
            console.log("--start idx is ---",startIdx);
        }

        while (array[endIdx] > pivot) {
            endIdx -= 1;
            console.log("--end idx is ---",endIdx);
        }

        if (startIdx < endIdx ) {
            swap(startIdx,endIdx,array);
        }
    }

    swap(pivotIdx,endIdx,array);
    return endIdx
}

function swap(idx1,idx2,array) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
    return array;
}

quickSort([8,5,2,9,5,6,3]);