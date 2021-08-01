// Time - O(n)
// Space - O(n)

function branchSums(node) {
    const sums = [];
    branchSumsHelper(node,0,sums);
    console.log(sums);
    return sums;
}

function branchSumsHelper(node,runningSum,sums) {
    if (!node) return;
    const newRunningSum = runningSum + node.value;
    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }

    branchSumsHelper(node.left,newRunningSum,sums);
    branchSumsHelper(node.right,newRunningSum,sums);
}

branchSums({
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
})