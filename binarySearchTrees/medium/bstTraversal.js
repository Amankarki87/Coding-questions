// Time - O(n)
// Space - O(n)

function inOrderTraverse(tree, array = []) {
    if (tree !== null) {
        inOrderTraverse(tree.left,array);
        array.push(tree.value);
        inOrderTraverse(tree.right,array);
    }

    console.log("-- array is ---",array);
    return array;
}
  
function preOrderTraverse(tree, array = []) {
    if (tree !== null) {
        array.push(tree.value);
        preOrderTraverse(tree.left,array);
        preOrderTraverse(tree.right,array);
    }

    console.log(array);
    return array;
}
  
function postOrderTraverse(tree, array = []) {
    if (tree !== null) {
        postOrderTraverse(tree.left,array);
        postOrderTraverse(tree.right,array);
        array.push(tree.value);
    }

    console.log(array)
    return array;
}

postOrderTraverse({
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
})