function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

BinaryTreeNode.prototype.checkIfValid = function() {
  if(!this.left && !this.right) {
    return true;
  }
  if (this.left) {
    if (this.value >= this.left.value) {
      this.left.checkIfValid();
    } else {
      return false;
    }
  }
  if (this.right) {
    if (this.value <= this.right.value) {
      this.right.checkIfValid();
    } else {
      return false;
    }
  }

  return true;
}

let bst = new BinaryTreeNode(50);
console.log(bst.checkIfValid()); //true
bst.insertLeft(30);
console.log(bst.checkIfValid()); //true
bst.insertLeft(20);
bst.insertLeft(10);
bst.insertLeft(40);
bst.insertRight(80);
bst.insertRight(70);
bst.insertRight(60);
bst.insertRight(90);
bst.insertRight(85);
bst.insertRight(100);
console.log(bst.checkIfValid()); //true
console.log(bst);
