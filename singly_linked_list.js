function Node(val, next=null) {
  this.val = val;
  this.next = next;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype.__getNodeAt = function(index) {
  var counter = 0;
  var n = this.head;
  while(counter < index) {
    n = n.next;
    counter++;
  }
  return n;
};

SinglyLinkedList.prototype.push = function(val) {
  var n = new Node(val);
  if(!this.head){
    this.head = n;
    this.tail = n;
  } else {
    this.tail.next = n;
    this.tail = n;
  }
  this.length++;
  return this;
};

SinglyLinkedList.prototype.clear = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
  return this;
};

SinglyLinkedList.prototype.pop = function() {
  if(!this.head) return undefined;
  if(!this.head.next) {
    var val = this.head.val;
    this.clear();
    return val;
  }
  var counter = 0;
  var n = this.head;
  while(counter < this.length -2){
    n = n.next;
    ++counter;
  }
  var popped = n.next.val;
  this.tail = n;
  n.next = null;
  this.length--;
  return popped;
};

SinglyLinkedList.prototype.unshift = function(val) {
  var n = new Node(val);
  if(!this.head) return this.push(n);
  n.next = this.head;
  this.length++;
  this.head = n;
  return this;
};

SinglyLinkedList.prototype.shift = function() {
  if(!this.head.val) return undefined;
  this.length--;
  var shifted = this.head.val;
  this.head = this.head.next;
  return shifted;
};

SinglyLinkedList.prototype.get = function(index) {
  if(index >= this.length) return undefined;
  var counter = 0;
  var n = this.head;
  while(counter < index) {
    n = n.next;
    counter++;
  }
  return n.val;
};

SinglyLinkedList.prototype.set = function(index, val) {
  var counter = 0;
  var n = this.head;
  while(counter < index) {
    n = n.next;
    counter++;
  }
  n.val = val;
  return this;
};

SinglyLinkedList.prototype.remove = function(index) {
  if(index === 0) return this.shift(); 
  if(index === this.length -1) return this.pop();
  // var n = this.head;
  // var counter = 0;
  // while(counter < index -1) {
  //   n = n.next;
  //   counter++;
  // }
  var n = this.__getNodeAt(index-1);
  this.length--;
  var removed = n.next.val;
  n.next = n.next.next;
  return removed;
};

SinglyLinkedList.prototype.reverse = function() {

  this.tail = this.head;
  var next;
  var prev = null;
  var current = this.head;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev;
  return this;
};

SinglyLinkedList.prototype.reverseRecursiveUtility = function(cur, prev) {
  // Base case
  if(!cur){
    this.tail = this.head;
    this.head = prev;
    return this
  }

  // Recursive step
  var next = cur.next;
  cur.next = prev;
  this.reverseRecursiveUtility(next, cur)
};

SinglyLinkedList.prototype.reverseRecursive = function() {
  if(!this.head) return undefined
  this.reverseRecursiveUtility(this.head, null)
};

// Returns an array of the values of all of the nodes in the list  
// So if I create a list like this: var list = new List() and populate it like this list.push(1).push(2).push(3).push(4), 
//calling list.toArray() will return [1,2,3,4]
SinglyLinkedList.prototype.toArray = function(){
  var arr = [];
  for(var i=0; i < this.length; i++) {
    arr.push(this.get(i));
  }
  return arr;
}

// Returns a string of the values of the nodes separated by an optional delimiter
// So the same list above will return "1,2,3,4"

SinglyLinkedList.prototype.toString = function(delimiter=","){
  var str = "";
  for(var i=0; i<this.length; i++) {
    str += delimiter + this.get(i);
  }
  return str;
}

module.exports = SinglyLinkedList;
