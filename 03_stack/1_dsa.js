/************************** Stack ***********************************/

/*

Stack:
- Initialize an empty stack

Operations:
- Push(item): Add an item to the top of the stack
  - Increment the stack size
  - Set the top item to the new item

- Pop(): Remove and return the item from the top of the stack
  - If the stack is empty, return an error (stack underflow)
  - Otherwise, return the top item and decrement the stack size

- Peek(): Return the item at the top of the stack without removing it
  - If the stack is empty, return an error (stack underflow)
  - Otherwise, return the top item

- IsEmpty(): Check if the stack is empty
  - Return true if the stack size is 0, else return false

- Size(): Return the number of items in the stack
  - Return the stack size

- Clear() 

Initialization:
- Set 'stack' as an array to hold the elements
- Initialize 'top' to -1 (indicating an empty stack)

Example Usage:
- Push(10)  // Stack: [10], top: 0
- Push(20)  // Stack: [10, 20], top: 1
- Push(30)  // Stack: [10, 20, 30], top: 2
- Peek()   // Returns 30, Stack: [10, 20, 30], top: 2
- Pop()    // Returns 30, Stack: [10, 20], top: 1
- IsEmpty() // Returns false
- Size()   // Returns 2
- Pop()    // Returns 20, Stack: [10], top: 0
- Pop()    // Returns 10, Stack: [], top: -1
- IsEmpty() // Returns true

*/
