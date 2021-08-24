// Time - O(n)
// Space - O(d)

class BinaryTree {
    constructor(value,left,right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function invertBinaryTree(tree) {
    binaryTreeBuilder(tree);
    return tree;
}

function binaryTreeBuilder(tree) {
    if ( !tree ) {
        return;
    }

    swapLeftAndRight(tree);
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}

function swapLeftAndRight(tree) {
    let leftTree = tree.left;
    tree.left = tree.right;
    tree.right = leftTree;
}

console.log(invertBinaryTree({
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 4,
            "left": {
                "value": 8,
                "left": null
            },
            "right": {
                "value": 9,
                "right": null
            }
        },
        "right": {
            "value": 5,
            "left": {
                "value": 10,
                "right": null,
                "left": null
            },
            "right": null
        }
    },
    "right": {
        "value": 3,
        "left": {
            "value": 6,
            "left": null,
            "right": null
        },
        "right": {
            "value": 7,
            "left": null,
            "right": null
        }
    }
}))