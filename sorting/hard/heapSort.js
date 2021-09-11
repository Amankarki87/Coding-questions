function heapSort(array) {
    let minHeap = new MinHeap(array);
    let sortedArray = [];

    while (!minHeap.isEmpty()) {
        sortedArray.push(minHeap.remove());
    }

    console.log(sortedArray);
}

class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {
        let firstParentIdx = Math.floor((array.length - 2)/2);
        for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx --) {
            this.shiftDown(currentIdx,array.length - 1, array);
        }

        return array;
    }

    remove() {
        this.swap(0,this.heap.length - 1,this.heap);
        let valueRemoved = this.heap.pop();
        this.shiftDown(0,this.heap.length - 1,this.heap);
        return valueRemoved;
    }

    shiftDown(currentIdx,endIdx,heap) {
        let childOneIdx = currentIdx * 2 + 1;

        while (currentIdx <= endIdx) {
            let childTwoIdx = currentIdx * 2 + 2 ? currentIdx * 2 + 2 : -1;
            let idxToSwap = childOneIdx;

            if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                idxToSwap = childTwoIdx;
            }

            if (heap[idxToSwap] < heap[currentIdx]) {
                this.swap(idxToSwap,currentIdx,heap);
                currentIdx = idxToSwap;
                childOneIdx = currentIdx * 2 + 1;
            } else {
                return;
            }
        }
    }

    swap(idx1,idx2,heap) {
        const temp = heap[idx1];
        heap[idx1] = heap[idx2];
        heap[idx2] = temp;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

heapSort([-4, 5, 10, 8, -10])