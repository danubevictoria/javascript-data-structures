// Hash Table
// Lookup and insertion is O(1) time
// Constructors
function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

// Methods on Prototype
HashTable.prototype.hash = function (key) {
  // This is to get a unique value for hashing the key
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  // This is to get the index to put the hash in the table
  var bucket = total % this.numBuckets;
  return bucket;
}

HashTable.prototype.insert = function(key, value) {
  // Hash key to find what bucket to put node in
  var bucket = this.hash(key);

  // if empty then just put it in there.
  //  otherwise, chain it to the end of the existing node in that bucket.this handles collisions
  if (!this.buckets[bucket]) {
    this.buckets[bucket] = new HashNode(key, value);
  } else {
    var currentNode = this.buckets[bucket];
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
}

// Examples
var myHT = new HashTable(30);
// console.log(myHT);

// charCodeAt can create a letter into a unique number
// console.log('hello world'.charCodeAt(1));

// modulus gives you the remainder after dividing two numbers
// console.log(7 % 3);

// console.log(myHT.hash('Becca'));
myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@gmail.com');
console.log(myHT);
