// Time - O(n(log(n))) || space - O(n) Important

function count_inversion(array) {
    if (array.length <= 1) return array;
    let auxiliaryArray = array.slice();
    return mergeSortHelper(array,auxiliaryArray,0,array.length - 1);
}

function mergeSortHelper(array,auxiliaryArray,start,end) {
    if (start === end) return 0;
    const middle = Math.floor((end + start)/2);
    let leftInversion = mergeSortHelper(auxiliaryArray,array,start,middle);
    let rightInversion = mergeSortHelper(auxiliaryArray,array,middle + 1,end);
    let mergedInversions = doMerge(array,auxiliaryArray,start,middle,end);
    console.log(leftInversion + rightInversion + mergedInversions);
    return leftInversion + rightInversion + mergedInversions;
}

function doMerge(array,auxiliaryArray,start,middle,end) {
    let count_inversion = 0;
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
            count_inversion += (middle - i + 1);
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

    return count_inversion;
}

count_inversion([2, 3, 3, 1, 9, 5, 6]);