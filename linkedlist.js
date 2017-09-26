// Linked List
// Constructors
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
  if(!this.head) {
    return null;
  }
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return val;
}

LinkedList.prototype.removeTail = function() {
  if(!this.tail) {
    return null;
  }
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  return val;
}

LinkedList.prototype.search = function(value) {
  if(!this.head) {
    return null;
  }
  var currentNode = this.head;
  while(currentNode) {
      if (currentNode.value == value) {
        return currentNode.value;
      } else {
        currentNode = currentNode.next;
      }
  }
  return null;
}

// Exercise
// Add a new method called indexOf, which takes in a value and returns all the indexes of that value in an array
LinkedList.prototype.indexOf = function (value) {
  var indexes = [];
  if(!this.head) {
    return null;
  }
  var currentNode = this.head;
  var index = 0;
  while(currentNode) {
    if(currentNode.value == value) {
      indexes.push(index);
      index++;
    }
    currentNode = currentNode.next;
  }
  return indexes;
}

// Examples
var LL = new LinkedList();
var userList = new LinkedList();
var toDoList = new LinkedList();

// console.log(LL);

var node1 = new Node(100, 'node2', null);
console.log(node1);

LL.addToHead(100);
// console.log(LL);

LL.addToHead(200);
// console.log(LL);

LL.addToTail(300);
userList.addToTail(300);
LL.addToHead(400);
console.log(LL);
console.log(userList);
console.log(LL.search(300));
console.log(LL.search(10));

/* Constant time to add/remove head or add/remove tail.
Searching costs O(n) - linear time complexity
Why are they good data structures?
Memory Management Benefits - data doesn't have to be stored together.
*/
