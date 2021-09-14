// Time - O(nlog(k)) | space - O(n + k)

function mergeSortedArrays(arrays) {
    const sortedList = [];
    const smallestItems = [];

    for (let arrayIdx = 0;arrayIdx < arrays.length; arrayIdx++) {
        smallestItems.push({
            arrayIdx,
            elementIdx: 0,
            num: arrays[arrayIdx][0]
        })
    }

    const minHeap = new MinHeap(smallestItems);

    while(!minHeap.isEmpty()) {
        const valueRemove = minHeap.remove();
        const {arrayIdx,elementIdx,num} = valueRemove;
        sortedList.push(num);

        if (elementIdx === arrays[arrayIdx].length - 1) continue;

        minHeap.insert({
            arrayIdx,
            elementIdx: elementIdx + 1,
            num: arrays[arrayIdx][elementIdx + 1]
        })
    }

    return sortedList;
}

class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    buildHeap(array) {
        let firstParentIndex = Math.floor((array.length - 2)/2);

        for (let currentIdx = firstParentIndex; currentIdx >= 0; currentIdx--) {
            this.shiftDown(currentIdx,array.length - 1,array);
        }

        return array;
    }

    shiftDown(currentIdx,endIdx,array) {
        let childOneIdx = currentIdx * 2 + 1;

        while (childOneIdx <= endIdx) {
            let childTwoIdx = currentIdx * 2 + 2 ? currentIdx * 2 + 2 : -1;
            let idxToSwap = childOneIdx;

            if (childTwoIdx !== -1 && (array[childTwoIdx] && array[childTwoIdx].num < array[childOneIdx].num) ) {
                idxToSwap = childTwoIdx;
            }

            if (array[idxToSwap].num < array[currentIdx].num) {
                this.swap(idxToSwap,currentIdx,array);
                currentIdx = idxToSwap;
                childOneIdx = currentIdx * 2 + 1;
            } else {
                return; 
            }
        }
    }

    remove() {
        this.swap(0,this.heap.length - 1,this.heap);
        let valueRemove = this.heap.pop();
        this.shiftDown(0,this.heap.length - 1,this.heap);
        return valueRemove;
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1,this.heap);
    }

    shiftUp(currentIdx,heap) {
        let parentIdx = Math.floor((currentIdx - 1)/2);

        while (currentIdx > 0 && heap[currentIdx].num < heap[parentIdx].num) {
            this.swap(currentIdx,parentIdx,heap);
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1)/2);
        }
    }

    swap(idx1,idx2,array) {
        const temp = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = temp;
    }

}

mergeSortedArrays([[1,5,9,21],[-1,0],[-124,81,121],[3,6,12,20,150]]);