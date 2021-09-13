// Time Best - O(n), average - O(n), worst - O(n^2)

function quickselect(array,k) {
    let position = k - 1;
    return quickSortHelper(array,0,array.length -1,position);
}

function quickSortHelper(array,start,end,position) {

    while (true) {
        if (start > end) {
					throw new Error("Error")
				};

        let pivotIdx = start;
        let pivot = array[pivotIdx];
        let leftIdx = start + 1;
        let rightIdx = end;

        while (leftIdx <= rightIdx) {
            if (array[leftIdx] > pivot && array[rightIdx] < pivot) {
                swap(leftIdx,rightIdx,array);
            }
            
            if (array[leftIdx] <= pivot) {
                leftIdx++;
            }
            
            if (array[rightIdx] >= pivot) {
                rightIdx--;
            }
        }

        swap(pivotIdx,rightIdx,array);

        if (rightIdx === position) {
            return array[rightIdx];
        } else if (rightIdx < position) {
            start = rightIdx + 1;
        } else {
            end = rightIdx - 1;
        }
    }
}

function swap(start,end,arr) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

quickselect([8, 5, 2, 9, 7, 6, 3],3);