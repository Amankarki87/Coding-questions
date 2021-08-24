class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
}

// Time - O(n)
// Space - O(n)

function findSuccessor(tree, node) {
    let traversal = inOrderTraversal(tree);

    for (let idx = 0; idx < traversal.length;idx ++) {
        let currentNode = traversal[idx];

        if (currentNode !== node) continue;
        
        if (idx === traversal.length - 1) {
            return null;
        }

        console.log(traversal[idx+1])
        return traversal[idx+1];
    }
    return null;
}

function inOrderTraversal(tree,orders = []) {
    if (!tree) return null;
    inOrderTraversal(tree.left,orders);
    orders.push(tree.value);
    inOrderTraversal(tree.right,orders);
    return orders;
}

findSuccessor({
    "value": 10,
    "left": {
        "value": 5,
        "left": {
            "value": 2,
            "left": {
                "value": 1,
                "left": null,
                "right": null
            },
            "right": null
        },
        "right": {
            "value": 5,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 15,
        "left": {
            "value": 13,
            "left": null,
            "right": {
                "value": 14,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 22,
            "left": null,
            "right": null
        }
    }
},13)