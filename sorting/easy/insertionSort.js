// Space complexity - O(1)
// Time complexity - worst case O(n^2)
// Time complexity - average case O(n^2)

function insertionSort(array) {
    for (let i=1;i<array.length;i++) {
        let j = i;
        while (j > 0 && array[j] < array[j-1]) {
            swap(array,j,j-1);
            j -= 1;
        }
    }

    return array;
}

function swap(arr,firstIdx,secondIdx) {
    let temp = arr[firstIdx];
    arr[firstIdx] = arr[secondIdx];
    arr[secondIdx] = temp;
    return arr;
}

insertionSort([8, 5, 2, 9, 5, 6, 3])