class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // time - average - O(log(n)) || worst - O(n)
    // Space - O(1)

    insert(value) {
        let currentNode = this;
        while(true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = new BST(value);
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.right === null) {
                    currentNode.right = new BST(value);
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }

        console.log(this);
        return this;
    }

    // time - average - O(log(n)) || worst - O(n)
    // Space - O(1)

    contains(value) {
        let currentNode = this;
        while (currentNode !== null) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                console.log("true")
                return true;
            }
        }

        // console.log("false")
        return false;
    }

    // time - O(log(n)) || O(n)
    // space - O(1)

    remove(value,parentNode = null) {
        let currentNode = this;
        while (currentNode !== null) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                // Two children
                if (currentNode.left !== null && currentNode.right !== null) {
                    currentNode.value = currentNode.right.getMinValue();
                    currentNode.right.remove(currentNode.value,currentNode);
                } else if (parentNode === null) {    // Root node where parent node is not present.
                    
                    // FOR BST IN fashion
                    //      1
                    //        \
                    //          2
                    //         /  \
                    //        3     4

                    if (currentNode.left !== null) {
                        currentNode.value = currentNode.left.value;
                        currentNode.right = currentNode.left.right;
                        currentNode.left = currentNode.left.left;
                    } else if (currentNode.right !== null) {
                        currentNode.value = currentNode.right.value;
                        currentNode.right = currentNode.right.right;
                        currentNode.left = currentNode.right.left;
                    }
                } else if (parentNode.left === currentNode) { // Single leaf node
                    parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
                } else if (parentNode.right === currentNode) { // Single leaf node
                    parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
                }
                break;
            }
        }

        console.log(this)
        return this;
    }

    getMinValue() {
        let currentNode = this;
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }
}

let r = new BST(5); 
r.insert(4);
r.insert(20);
r.insert(3);
r.insert(25);
r.insert(18);
r.contains(7);
// r.remove(20);