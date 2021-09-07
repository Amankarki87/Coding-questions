class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        if (this.heap.length < 1) {
            return this.heap;
        }

        this.upHeap();
        return value;
    }

    upHeap() {
        let currentIdx = this.heap.length - 1;
        let parentIdx = this.parent(currentIdx);

        while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
            this.swap(currentIdx,parentIdx,this.heap);
            currentIdx = parentIdx;
            parentIdx = this.parent(currentIdx);
        }
        return this.heap;
    }

    remove() {
        this.swap(0,this.heap.length - 1,this.heap);
        const valueToRemove = this.heap.pop();
        this.downHeap()
        return valueToRemove;
    }

    parent(pos) {
        return Math.floor(pos - 2 / 2);
    }

    swap(idx1,idx2,array) {
        let temp = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = temp;
        return array;
    }

    downHeap() {
        let currentIdx = 0;
        let endIdx = this.heap.length - 1;
        let childOneIndex = currentIdx * 2 + 1;

        while ( childOneIndex <= endIdx ) {
            let childTwoIndex = currentIdx * 2 + 2 ? currentIdx * 2 + 2 : -1;
            let indexToSwap = childOneIndex;
            
            if (childTwoIndex !== -1 && this.heap[childTwoIndex] < this.heap[childOneIndex]) {
                indexToSwap = childTwoIndex;
            }

            if (this.heap[indexToSwap] < this.heap[currentIdx]) {
                this.swap(indexToSwap,currentIdx,this.heap);
                currentIdx = indexToSwap;
                childOneIndex = currentIdx * 2 + 1;
            } else {
                return;
            }
        }
    }
    
}

let minHeap = new MinHeap();
minHeap.insert(102);
minHeap.insert(18);
minHeap.insert(8);
minHeap.insert(12);
minHeap.insert(23);
minHeap.insert(17);
minHeap.insert(31);
minHeap.insert(30);
minHeap.insert(44);
minHeap.remove();
