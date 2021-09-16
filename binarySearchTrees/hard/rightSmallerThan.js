// Time - Average - O(nlog(n)), Worst -O(n^2) when created BST is like linked list
// Space - O(n


function rightSmallerThan(array) {
    if (array.length === 0) return [];

    const rightSmallerCounts = array.slice();
    const lastIdx = array.length - 1;
    let specialBst = new SpecialBST(array[lastIdx]);
    rightSmallerCounts[lastIdx] = 0;

    for (let i = array.length - 2;i>= 0;i--) {
        specialBst.insert(array[i],i,rightSmallerCounts)
    }
    return rightSmallerCounts;
}

class SpecialBST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.leftSize = 0;
    }

    insert(value,idx,rightSmallerCounts,numSmallerAtInsert = 0) {
        if (value < this.value) {
            this.leftSize += 1;
            if ( this.left === null ) {
                this.left = new SpecialBST(value);
                rightSmallerCounts[idx] = numSmallerAtInsert;
            } else {
                this.left.insert(value,idx,rightSmallerCounts,numSmallerAtInsert);
            }

        } else {
            numSmallerAtInsert += this.leftSize;
            if (value > this.value) numSmallerAtInsert ++;

            if (this.right === null) {
                this.right = new SpecialBST(value);
                rightSmallerCounts[idx] = numSmallerAtInsert;
            } else {
                this.right.insert(value,idx,rightSmallerCounts,numSmallerAtInsert);
            }
        }
    }
}

console.log(rightSmallerThan([8, 5, 11, -1, 3, 4, 2]))