class ContinuousMedianHandler {
    constructor() {
      this.lower = new Heap("maxHeap");
      this.greater = new Heap("minHeap");
      this.median = null;
    }
  
    // Time - O(n) | O(n) Space
    
    insert(number) {
      if ( !this.lower.length || number < this.lower.peek() ) {
        this.lower.insert(number);
      } else {
        this.greater.insert(number);
      }

      this.rebalanceHeap();
      this.updateMedian();
    }

    rebalanceHeap() {

      if (this.lower.length - this.greater.length === 2 ) {
        this.greater.insert(this.lower.remove());
      } else if (this.greater.length - this.lower.length === 2) {
        this.lower.insert(this.greater.remove());
      }
    }
  
    updateMedian() {
      if (this.lower.length === this.greater.length) {
        this.median = ( this.lower.peek() + this.greater.peek() )/2;
      } else if (this.lower.length > this.greater.length) {
        this.median = this.lower.peek();
      } else if (this.lower.length < this.greater.length) {
        this.median = this.greater.peek();
      }

      return this.median;
    }

    getMedian() {
      return this.median;
    }
}

class Heap {
  constructor(heapType) {
    this.heap = [];
    this.heapType = heapType;
    this.length = this.heap.length;
  }
  
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1,this.heap);
    this.length++;
    return this.heap;
  }

  shiftUp(currentIdx,heap) {
    let parentIdx = this.parent(currentIdx);

    while (currentIdx > 0 && this.compare(currentIdx,parentIdx,heap) ) {
      this.swap(currentIdx,parentIdx,heap);
      currentIdx = parentIdx;
      parentIdx = this.parent(currentIdx);
    }
  }

  remove() {
    this.swap(0,this.heap.length - 1,this.heap);
    let dataRemove = this.heap.pop();
    this.shiftDown(0,this.heap.length - 1,this.heap);
    this.length --;
    return dataRemove;
  }

  shiftDown(currentIdx,endIdx,heap) {
    let childOne = currentIdx * 2 + 1;

    while (childOne <= endIdx) {
      let childTwo = currentIdx * 2 + 2 ? currentIdx * 2 + 2 : -1;
      let idxToSwap = childOne;

      if (childTwo !== -1 && this.compare(childTwo,childOne,heap)) {
        idxToSwap = childTwo;
      }


      if (this.compare(idxToSwap,currentIdx,heap)) {
        this.swap(currentIdx,idxToSwap,heap);
        currentIdx = idxToSwap;
        childOne = currentIdx * 2 + 1;
      } else {
        return;
      }
    }

  }

  compare(idx1,idx2,heap) {
    if (this.heapType === "minHeap") {
      return heap[idx1] < heap[idx2];
    } else {
      return heap[idx1] > heap[idx2];
    }
  }

  parent(currentIdx) {
    return Math.floor((currentIdx - 1)/2);
  }

  peek() {
    return this.heap[0];
  }

  swap(idx1,idx2,heap) {
    const temp = heap[idx1];
    heap[idx1] = heap[idx2];
    heap[idx2] = temp;
  }
}

let medianHandler = new ContinuousMedianHandler();
medianHandler.insert(5);
medianHandler.insert(10);
medianHandler.insert(100);
medianHandler.insert(200);
  