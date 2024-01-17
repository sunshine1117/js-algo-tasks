const displayTree = tree => console.log(Json.stringfy(tree, null, 2));

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if(this.root === null) {
      this.root = new Node(value);

      return this.root;
    } else {
      return this._addRecusive(this.root, value);
    }
  }

  findMin() {
    if(this.root === null) {
      return null;
    }

    let current = this.root;

    while(current !== null && current.left) {
      current = current.left;
    }

    return current.value;
  }

  findMax() {
    if(this.root === null) {
      return null;
    }

    let current = this.root;

    while(current !== null && current.right) {
      current = current.right;
    }

    return current.value;
  }

  isPresent(value) {
    let current = this.root;

    while (current !== null) {
        if (value === current.value) {
            return true;
        } else if (value < current.value) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

        return false;
    }

    findMinHeight() {
      if (!this.root) return -1;

      function findNodeMinHeight(node) {
        if (!node) return 0;
        return 1 + Math.min(
            findNodeMinHeight(node.left),
            findNodeMinHeight(node.right)
          );
      }

      return findNodeMinHeight(this.root) - 1;
    }

    findMaxHeight() {
      if (!this.root) return -1;

      function findNodeMaxHeight(node) {
        if (!node) return 0;
        return 1 + Math.max(
            findNodeMaxHeight(node.left),
            findNodeMaxHeight(node.right)
          );
      }

      return findNodeMaxHeight(this.root) - 1;
    }

    inorder() {
      function help(node) {
        if(!node) return [];

        return [...help(node.left), node.value, ...help(node.right)]
      }

      return help(this.root)
    }

    preorder() {
      function help(node) {
        if(!node) return [];

        return [ node.value, ...help(node.left), ...help(node.right)]
      }

      return help(this.root)
    }

    postorder() {
      function help(node) {
        if(!node) return [];

        return [  ...help(node.left), ...help(node.right), node.value,]
      }

      return help(this.root)
    }

    _addRecusive(node, value) {
    if(node.value === value) {
      return null;
    }

    if(value < node.value)  {
      if(node.left === null) {
        node.left = new Node(value);

        return node.left;
      } else {
        return this._addRecusive(node.left, value);
      }
    } else {
      if(node.right === null) {
        node.right= new Node(value);

        return node.right;
      } else {
        return this._addRecusive(node.right, value);
      }
    }

  }

}

const tree = new BinarySearchTree();

function isBinarySearchTree(tree) {
  function is(node, min = null, max = null) {
      if (node === null) {
          return true;
      }

      if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
          return false;
      }

      return is(node.left, min, node.value) && is(node.right, node.value, max);
  }

  return is(tree.root);
}

console.log(isBinarySearchTree(tree));

tree.add(10);
tree.add(15);
tree.add(20);
tree.add(25);
tree.add(30);
tree.add(35);
tree.add(8);
tree.add(5);
tree.add(6);
tree.add(3);
tree.add(14);

console.log(tree);

console.log(tree.findMax());
console.log(tree.findMin());

console.log(tree.isPresent(40));

console.log(tree.findMaxHeight());
console.log(tree.findMinHeight());
console.log(tree.inorder());
console.log(tree.preorder());
console.log(tree.postorder());
