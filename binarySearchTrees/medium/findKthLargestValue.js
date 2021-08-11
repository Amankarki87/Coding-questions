function findKthLargestValueInBst(tree, k) {
    let sortedArray = [];
    inOrderTraversal(tree,sortedArray);
    return sortedArray[sortedArray.length - k];
}

// Time complexity - O(n)
// Space complexity - O(n)

function inOrderTraversal(tree,array) {

    if (tree === null) return;

    inOrderTraversal(tree.left,array);
    array.push(tree.value);
    inOrderTraversal(tree.right,array);

    return array;
}

findKthLargestValueInBst({
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
},3);