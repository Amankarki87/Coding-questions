class MinHeap {
    constructor(array) {
       this.heap = this.buildHeap(array);
   }

   // O(n) time | O(1) space

   buildHeap(array) {
       const firstParentIdx = Math.floor((array.length - 2)/2);
       for (let currentIdx = firstParentIdx;currentIdx >= 0;currentIdx--) {
           this.siftDown(currentIdx,array.length - 1,array);
       }
       return array;
   }
   
   // O(log(n)) time | O(1) space

   siftDown(currentIdx,endIdx,array) {
       let childOneIndex = currentIdx * 2 + 1;

       while ( childOneIndex <= endIdx ) {
           let childTwoIndex = currentIdx * 2 + 2 ? currentIdx * 2 + 2 : -1;
           let indexToSwap = childOneIndex;
           
           if (childTwoIndex !== -1 && array[childTwoIndex] < array[childOneIndex]) {
               indexToSwap = childTwoIndex;
           }

           if (array[indexToSwap] < array[currentIdx]) {
               this.swap(indexToSwap,currentIdx,array);
               currentIdx = indexToSwap;
               childOneIndex = currentIdx * 2 + 1;
           } else {
               return;
           }
       }
   }

   // O(log(n)) time | O(1) space

   insert(value) {
       this.heap.push(value);
       this.siftUp(this.heap.length - 1,this.heap);
   }

   // O(log(n)) time | O(1) space

   siftUp(currentIdx,heap) {
       let parentIdx = this.parent(currentIdx);

       while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
           this.swap(currentIdx,parentIdx,heap);
           currentIdx = parentIdx;
           parentIdx = this.parent(currentIdx);
       }

   }

   // O(log(n)) time | O(1) space

   remove() {
       this.swap(0,this.heap.length - 1,this.heap);
       const valueToRemove = this.heap.pop();
       this.siftDown(0,this.heap.length - 1,this.heap);
       return valueToRemove;
   }

   // O(1) time | O(1) space

   parent(pos) {
       return Math.floor((pos - 1) / 2);
   }

   swap(idx1,idx2,array) {
       let temp = array[idx1];
       array[idx1] = array[idx2];
       array[idx2] = temp;
       return array;
   }
   
   // O(1) time | O(1) space

    peek() {
        return this.heap[0];
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
