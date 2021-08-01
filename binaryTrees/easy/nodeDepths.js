// Time - O(n)
// Space - O(n)

// function nodeDepths(root) {
//     console.log(nodeDepthsHelper(root,0,0));
// }

// function nodeDepthsHelper(node,depth) {
//     if (!node) {
//         return 0;
//     }

//     return depth + nodeDepthsHelper(node.left,depth + 1) + nodeDepthsHelper(node.right,depth + 1);
// }

// Time - O(n) - No. of nodes in BST
// Space - O(h) - Height of BST

function nodeDepths(node) {
    let maxDepth = 0;
    let stacks = [{node: node,depth: 0}];

    while (stacks.length > 0) {
        const {node,depth} = stacks.pop();
        if (!node) continue;
        maxDepth += depth; 
        stacks.push({node: node.left,depth: depth + 1});
        stacks.push({node: node.right,depth: depth + 1});
    }

    console.log(maxDepth);
    return maxDepth;
}

nodeDepths({
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
            "left": null,
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