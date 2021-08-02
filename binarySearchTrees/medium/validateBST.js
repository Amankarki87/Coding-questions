// Time - O(n)
// Space - O(d)

function validateBst(tree) {
    return validateBstHelper(tree,-Infinity,Infinity);
}

function validateBstHelper(tree,minValue,maxValue) {
    if (tree === null) return true;
    if (tree.value < minValue || tree.value >= maxValue) return false;
    let leftIsValid = validateBstHelper(tree.left,minValue,tree.value);
    return leftIsValid && validateBstHelper(tree.right,tree.value,maxValue);
}

validateBst({
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
  