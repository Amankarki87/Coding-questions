// Time - O(n^2)
// Space - O(n)

class BST {
    constructor(value,left=null,right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function reconstructBST(preOrderTraversalValues) {
    if (preOrderTraversalValues.length === 0) return null;
    const currentValue = preOrderTraversalValues[0];
    
    let rightSubTreeRootIdx = preOrderTraversalValues.length;

    for (let idx = 1;idx < preOrderTraversalValues.length;idx++) {
        let value = preOrderTraversalValues[idx];

        if (value >= currentValue) {
            rightSubTreeRootIdx = idx;
            break;
        }
    }

    const leftSubTree = reconstructBST(preOrderTraversalValues.slice(1,rightSubTreeRootIdx));
    const rightSubTree = reconstructBST(preOrderTraversalValues.slice(rightSubTreeRootIdx));
    return new BST(currentValue,leftSubTree,rightSubTree);
}

console.log(reconstructBST([10,4,2,1,5,17,19,18]));

// Can be optimized to O(n)