// Time complexity - O(h)
// Space complexity - O(h)

// function validateThreeNodes(nodeOne, nodeTwo, nodeThree,tree) {

//     let nodeTwoData = findNodeData(tree,nodeTwo);

//     if (isDescendent(nodeTwoData,nodeOne)) {
//         let nodeThreeData = findNodeData(tree,nodeThree);
//         return isDescendent(nodeThreeData,nodeTwo);
//     }

//     if (isDescendent(nodeTwoData,nodeThree)) {
//         let nodeOneData = findNodeData(tree,nodeOne);
//         return isDescendent(nodeOneData,nodeTwo);
//     }


//     return false;
// }

// function findNodeData(tree,target) {
//     if (tree.value === target) {
//         return tree;
//     }
//     if (target < tree.value) {
//         return findNodeData(tree.left,target);
//     } else if (target >= tree.value) {
//         return findNodeData(tree.right,target);
//     }
// }

// function isDescendent(node,target) {
//     if (node === null) { return false;}
//     if (node.value === target) { return true; }
    
//     if (target < node.value) {
//         return isDescendent(node.left,target);
//     } else if (target >= node.value) {
//         return isDescendent(node.right,target);
//     }
// }

// Time complexity - O(h)
// Space complexity - O(1)

function validateThreeNodes(nodeOne, nodeTwo, nodeThree,tree) {

    let nodeTwoData = findNodeData(tree,nodeTwo);

    if (isDescendent(nodeTwoData,nodeOne)) {
        let nodeThreeData = findNodeData(tree,nodeThree);
        return isDescendent(nodeThreeData,nodeTwo);
    }

    if (isDescendent(nodeTwoData,nodeThree)) {
        let nodeOneData = findNodeData(tree,nodeOne);
        return isDescendent(nodeOneData,nodeTwo);
    }


    return false;
}

function findNodeData(tree,target) {

    while (tree !== null) {
        if (target < tree.value) {
            tree = tree.left;
        } else if (target > tree.value) {
            tree = tree.right;
        } else {
            return tree;
        }
    }

    return false;
}

function isDescendent(node,target) {
    while (node !== null) {
        if (node.value === target) {return true;}
        
        if (target < node.value) {
            node = node.left;
        } else if (target > node.value) {
            node = node.right; 
        }
    }

    return false;
}

console.log(validateThreeNodes(5,2,3,{
    "value": 5,
    "left": {
        "value": 2,
        "left": {
            "value": 1,
            "left": {
                "value": 0,
                "left": null,
                "right": null
            },
            "right": null
        },
        "right": {
            "value": 4,
            "left": {
                "value": 3,
                "left": null,
                "right": null
            },
            "right": null
        }
    },
    "right": {
        "value": 7,
        "left": {
            "value": 6,
            "left": null,
            "right": null
        },
        "right": {
            "value": 8,
            "left": null,
            "right": null
        }
    }
}))

// Try to optimize time complexity to O(d)