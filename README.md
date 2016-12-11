# Linked Lists in Javascript

### Part 1 - Singly Linked Lists

The singly linked list is fully implemented in javascript.  To run just the tests for a singly linked list, run `mocha test/singly_linked_list_spec.js` in the root of the project.

Try to understand the code for a singly linked list.  Do not move on to the doubly linked list section until a singly linked list makes sense.  If you are stuck on a function, implement more tests to verify how things are working.  Try using the singly linked list to get an idea of the interface.

**BONUS**

Implement reverse on a singly linked list.  Write tests first then make the tests pass.

### Part 2 - Doubly Linked Lists

You are given the start of an implementation for a doubly linked list.  Your goal is to implement the remaining functions and make the tests pass.

`__getNodeAt`: A function for internal use to find a node at an index.  When implementating the function try to think of the most efficient way of finding the index.  For example, if the list has 3000 elements and the index that we want is at index 2950, does it make more sense to find the node by starting from the front or from the back?

`get`: Gets the value of a node at an index.  This method should  use __getNodeAt internally.

`set`: Sets the value at an index.  This method should use __getNodeAt internally.

`insert`: Inserts a value at a position.  For example, if the list is [3,7,8], `insert(0,10)` results in a list of [10,3,7,8].

`unshift`: Adds a value to the front of the list

`shift`: removes a value from the front of the list

`remove`: removes a value at an index



### Part 3 - Practice Problems With Doubly Linked Lists

1. Write a reverse function that reverses the list in one pass.
2. Write a function to return the most frequent value in the linked list.
3. Write a function called rotate that takes 2 parameters.  The first is how many locations the list should rotate.  The second is true if the list should rotate forward and false if it should rotate backwards.  For example, if the list is 1,2,3,4,5,6,7 and `rotate(3,true)` is called, the list would become 5,6,7,1,2,3,4.  If `rotate(1,false)` is called on the same list, the new list would be 2,3,4,5,6,7,1.
4. Write a function that sorts the list (you can start with bubble sort, but try something more complicated like merge sort or quick sort).
5. Make another class that uses the `DoublyLinkedList` class.  The class should be a `SortedLinkList`.  The `SortedLinkList` will always maintain a sorted order for you.  For example, if the list contains 4,8,11,22,55 and `insert(13)` is called, the new list will be 4,8,11,13,22,55.  Since this is now a `SortedLinkList`, the following methods aren't needed: `push`, `pop`, `shift`, `unshift`.  Also, `set`, should be replaced with `insert`, which does not take an index.  Insert takes a value, only.