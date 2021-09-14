// Time - O(nlog(k)) | O(k) space

function sortKSortedArray(array, k) {
    let minHeapForKElements = new MinHeap(array.slice(0,k + 1));
    
    let index = 0;
    for (let i = k+ 1; i < array.length;i++) {
        array[index] = minHeapForKElements.peek();
        minHeapForKElements.remove();
        index ++;
        minHeapForKElements.insert(array[i]);
    }

    while (!minHeapForKElements.isEmpty()) {
        array[index] = minHeapForKElements.remove();
        index ++;
    }

    console.log(array)
    return array;
}

class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {
        let firstParentIdx = Math.floor((array.length - 2)/2);

        for (let currentIdx = firstParentIdx;currentIdx >= 0;currentIdx--) {
            this.shiftDown(currentIdx,array.length - 1,array);
        }

        return array;
    }

    remove() {
        this.swap(0,this.heap.length - 1,this.heap);
        const removeValue = this.heap.pop();
        this.shiftDown(0,this.heap.length - 1,this.heap);
        return removeValue;
    }

    shiftDown(currentIdx,endIdx,heap) {
        let childOne = currentIdx * 2 + 1;

        while (childOne <= endIdx) {
            let childTwo = currentIdx * 2 + 2 ? currentIdx * 2 + 2 : -1;

            let idxToSwap = childOne
            if (childTwo !== -1 && heap[childTwo] < heap[childOne]) {
                idxToSwap = childTwo;
            }

            if (heap[idxToSwap] < heap[currentIdx]) {
                this.swap(idxToSwap,currentIdx,heap);
                currentIdx = idxToSwap;
                childOne = currentIdx * 2 + 1;
            } else {
                return;
            }
        }

    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1,this.heap);
    }

    shiftUp(currentIdx,heap) {
        let parentIdx = Math.floor((currentIdx - 1)/2);
        while (currentIdx >= 0) {
            if (heap[currentIdx] < heap[parentIdx]) {
                this.swap(currentIdx,parentIdx,heap);
                currentIdx = parentIdx;
                parentIdx = Math.floor((currentIdx - 1)/2);
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

    peek() {
        return this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

sortKSortedArray([3,2,1,5,4,7,6,5],3);

