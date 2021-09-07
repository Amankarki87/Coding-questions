// Space - O(1)
// Time - O(n^2)

function selectionSort(array) {
    let startIdx = 0;
    while (startIdx < array.length) {
        let smallNumberIdx = startIdx;

        for (let i = startIdx + 1;i < array.length;i++) {
            if (array[smallNumberIdx] > array[i]) {
                smallNumberIdx = i;
            }
        }

        swap(array,smallNumberIdx,startIdx);
        startIdx ++;
    }

    console.log(array);
    return array;
}

function swap(array,i,j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
}

selectionSort([8, 5, 2, 9, 5, 6, 3])