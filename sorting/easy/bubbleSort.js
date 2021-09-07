// Space - O(1)
// Time - O(n^2)

function bubbleSort(array) {
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0;i < array.length - 1 - counter;i++) {

            if (array[i] > array[i+1]) {
                swap(array,i,i+1);
                isSorted = false;
            }
        }
        counter++;
    }

    console.log("--- array is ---",array);
    return array;
}

function swap(arr,firstIdx,secondIdx) {
    let temp = arr[firstIdx];
    arr[firstIdx] = arr[secondIdx];
    arr[secondIdx] = temp;
    return arr;
}

bubbleSort([8, 5, 2, 9, 5, 6, 3])