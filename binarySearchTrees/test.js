class BST {
    constructor(value,left=null,right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function reconstructBST(preOrderTraversalValues) {
    if (preOrderTraversalValues.length === 0) return null;

    let currentValue = preOrderTraversalValues[0];
    let rightIdx = preOrderTraversalValues.length;

    for (let i = 1; i < preOrderTraversalValues.length;i++) {
        let value = preOrderTraversalValues[i];

        if (value >= currentValue) {
            rightIdx = i;
            break;
        }
    }

    let leftHalf = reconstructBST(preOrderTraversalValues.slice(1,rightIdx));
    let rightHalf = reconstructBST(preOrderTraversalValues.slice(rightIdx));
    return new BST(currentValue,leftHalf,rightHalf);
}

console.log(reconstructBST([10,4,2,1,5,17,19,18]));