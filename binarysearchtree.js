// Binary Search Tree
// Most performant when they are balanced
// O (log n) faster than linked list because you only have to search through half of the tree to find the one you are looking for
// Constructors
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  // Is value we want to insert <= root node
  var newBST = new BST(value);
  if (value <= this.value) {
    if (!this.left) {
      this.left = newBST;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value){
    if (!this.right) {
      this.right = newBST;
    } else {
      this.right.insert(value);
    }
  }
}

// If the binary search tree does contain the value, contains will return true else return false.
BST.prototype.contains = function(value) {
  console.log(this.value)
    if (this.value == value) {
      return true;
    } else if (value < this.value) {
      if (!this.left) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > this.value) {
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
    // return false;
}

// Depth First search
// Can be in order, pre order, and post order
// in-order: left, root, right
// pre-order: root, left, right
// post-order: left, right, root
// Logs nodes values out to the console
// iteratorFunc can be defined so you can run any function on the node's value desired
BST.prototype.dfs = function(iteratorFunc, order) {
  if (order == "pre-order") {
    iteratorFunc(this);
  }
  if (this.left) {
    this.left.dfs(iteratorFunc, order);
  }
  if (order == "in-order") {
    iteratorFunc(this);
  }
  if (this.right) {
    this.right.dfs(iteratorFunc, order);
  }
  if (order == "post-order") {
    iteratorFunc(this);
  }
}

BST.prototype.bfs = function(iteratorFunc) {
  var queue = [];
  queue.push(this);
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) {
      queue.push(treeNode.left);
    }
    if (treeNode.right) {
      queue.push(treeNode.right);
    }
  }
}

BST.prototype.getMinVal = function() {
  if(!this.left) {
    return this.value;
  } else {
    return this.left.getMinVal();
  }
}

BST.prototype.getMaxVal = function() {
  if (!this.right) {
    return this.value;
  } else {
    return this.right.getMaxVal();
  }
}

function log(node) {
  console.log(node.value);
}

// examples
var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);
// console.log(bst);
// console.log(bst.left.right.left);
// console.log(bst.contains(50));
// console.log(bst.contains(59));
// console.log(bst.right);
// console.log(bst.contains(0));
// bst.dfs(log, "post-order");
bst.bfs(log);
