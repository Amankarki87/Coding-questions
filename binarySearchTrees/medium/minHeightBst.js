// Time - O(n)
// Space - O(n)

function minHeightBst(array) {
    return constructMinHeightBst(array,0,array.length - 1);
}

function constructMinHeightBst(array,startIdx,endIdx) {
    if (startIdx > endIdx) return null;
    const middleIdx = Math.floor((startIdx + endIdx)/2);
    let bst = new BST(array[middleIdx]);
    bst.left = constructMinHeightBst(array,startIdx,middleIdx - 1);
    bst.right = constructMinHeightBst(array,middleIdx + 1,endIdx);
    return bst;
}
  
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
}

console.log(minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22]));