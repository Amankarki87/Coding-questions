class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      array.push(this.name);

      for (const child of this.children) {
          child.depthFirstSearch(array);
      }

      return array;
    }
}

let node1 = new Node("A");
node1.addChild("B");
node1.addChild("C");
node1.depthFirstSearch([]);
