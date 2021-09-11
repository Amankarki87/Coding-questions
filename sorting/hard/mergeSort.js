// Time complexity - O(nlog(n))
// Space complexity - O(nlog(n)) 

// function mergeSort(array) {
//     if (array.length <= 1) return array;
//     let middleIdx = Math.floor(array.length/2);
//     let leftArray = array.slice(0,middleIdx);
//     let rightArray = array.slice(middleIdx);
//     return mergedArrayHelper(mergeSort(leftArray),mergeSort(rightArray));
// }

// function mergedArrayHelper(leftArray,rightArray) {
    
//     let sortedArray = new Array(leftArray.length + rightArray.length);
//     let i = 0;
//     let j = 0;
//     let k = 0;

//     while (i < leftArray.length && j < rightArray.length) {
//         if (leftArray[i] <= rightArray[j]) {
//             sortedArray[k] = leftArray[i];
//             k++;
//             i++;
//         } else {
//             sortedArray[k] = rightArray[j];
//             k++;
//             j++;
//         }
//     }

//     while ( i < leftArray.length) {
//         sortedArray[k] = leftArray[i];
//         k ++;
//         i++;
//     }

//     while ( j < rightArray.length) {
//         sortedArray[k] = rightArray[j];
//         k ++;
//         j++;
//     }

//     return sortedArray;
// }

// Time complexity - O(nlog(n))
// Space complexity - O(n) 

function mergeSort(array) {
    if (array.length <= 1) return array;
    let auxiliaryArray = array.slice();
    mergeSortHelper(array,auxiliaryArray,0,array.length - 1);
    return array;
}

function mergeSortHelper(array,auxiliaryArray,start,end) {
    if (start === end) return;
    const middle = Math.floor((start + end)/2);
    mergeSortHelper(auxiliaryArray,array,start,middle);
    mergeSortHelper(auxiliaryArray,array,middle + 1,end);
    doMerge(array,auxiliaryArray,start,middle,end);
}

function doMerge(array,auxiliaryArray,start,middle,end) {
    let i = start;
    let j = middle + 1;
    let k = start;

    while (i <= middle && j <= end) {
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            array[k] = auxiliaryArray[i];
            i++;
            k++;
        } else {
            array[k] = auxiliaryArray[j];
            j++;
            k++;
        }
    }

    while (i <= middle) {
        array[k] = auxiliaryArray[i];
        i++;
        k++;
    }

    while (j <= end) {
        array[k] = auxiliaryArray[j];
        j++;
        k++;
    }
}

mergeSort([8, 5, 2, 9, 5, 6, 3])