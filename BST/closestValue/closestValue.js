// Time - O(log(N))
// Space - O(log(N))

// function findClosestValueInBst(tree, target) {
//     return findClosestValueInBstHelper(tree,target,tree.value);
// }

// function findClosestValueInBstHelper(tree,target,closest) {
//     if (tree === null) return closest;
//     if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
//         closest = tree.value;
//     }
    
//     if (target < tree.value) {
//         return findClosestValueInBstHelper(tree.left,target,closest);
//     } else if (target > tree.value) {
//         return findClosestValueInBstHelper(tree.right,target,closest);
//     } else {
//         return closest;
//     }
// }

// Time - O(log(N))
// Space - O(1)

function findClosestValueInBst(tree, target) {
    console.log(findClosestValueInBstHelper(tree,target,tree.value));
    return findClosestValueInBstHelper(tree,target,tree.value);
}

function findClosestValueInBstHelper(tree,target,closest) {
    let currentNode = tree;

    while (currentNode !== null) {
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        }

        if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else if (target < currentNode.value) {
            currentNode = currentNode.left;
        } else {
            break;
        }
    }

    return closest;
}

findClosestValueInBst({
    "value": 10,
    "left": {
        "value": 5,
        "left": {
            "value": 2,
            "left": {
                "value": 1,
                "left": null,
                "left": null
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
},12)
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }