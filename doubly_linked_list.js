function Node(val, next=null, prev=null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// needs refactor
DoublyLinkedList.prototype.__getNodeAt = function(index) {
  var mid = (this.length-1)/2;
  if (index <= mid && index>= 0 ) {
    var counter = 0;
    var node = this.head;
    while(counter < index) {
      node = node.next;
      counter++;
    }
    return node;
  } else if(index > mid && index < this.length) {
    var counter = (this.length -1) - index;
    var node = this.tail;
    while(counter > 0) {
      node = node.prev;
      counter--;
    }
    return node;
  } else {
    return;
  }
};

DoublyLinkedList.prototype.push = function(val) {
  if(!this.head){
    var n = new Node(val);
    this.head = n;
    this.tail = n;
  } else {
    var oldTail = this.tail;
    var n = new Node(val, null, oldTail);
    this.tail.next = n;
    this.tail = n;
  }
  this.length++;
  return this;
};

DoublyLinkedList.prototype.clear = function() {
  this.head = null
  this.tail = null;
  this.length = 0;
};

DoublyLinkedList.prototype.pop = function() {
  if(!this.tail) return;
  var popped = this.tail.val;
  if(this.head.next === null) {
    this.clear();
    return popped;
  }
  this.tail = this.tail.prev;
  this.tail.next = null;
  this.length--;
  return popped;
};

DoublyLinkedList.prototype.unshift = function(val) {
  if(!this.head) return this.push(val);
  var oldHead = this.head;
  var n = new Node(val, oldHead);
  this.head = n; 
  this.head.next.prev = this.head;
  this.length++;
  return this;
};

DoublyLinkedList.prototype.shift = function() {
  if(!this.head) {
    return;
  } else if(this.head === this.tail){
    return this.pop();
  } else {
    var oldHead = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return oldHead.val;  
  }
};

DoublyLinkedList.prototype.get = function(index) {
  var foundNode = this.__getNodeAt(index) ? this.__getNodeAt(index).val : undefined;
  return foundNode; 
};

DoublyLinkedList.prototype.set = function(index, val) {
  this.__getNodeAt(index).val = val;
  return this;
};

DoublyLinkedList.prototype.insert = function(index, val) {
  if(!this.head || index === this.length) {
    return this.push(val);
  } else {
    var foundNode = this.__getNodeAt(index);
    var oldPrev = foundNode.prev;
    var newNode = new Node(val, foundNode, foundNode.prev);
    oldPrev.next = newNode;
    foundNode.prev = newNode;
    this.length++;
    return this;
  }
};

DoublyLinkedList.prototype.remove = function(index) {
  if(!this.head) { 
    return; 
  } else if (!this.head.next) { 
    var removed = this.head;
    this.clear();
    return removed.val; 
  } else if (index === this.length -1) { 
    return this.pop();
  } else if (index === 0) {
    return this.shift();
  }else {
    var removed = this.__getNodeAt(index);
    removed.next.prev = removed.prev;
    removed.prev.next = removed.next;
    this.length--;
    return removed.val;
  }
};

module.exports = DoublyLinkedList;
