/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    this.size++;
    if (this.first === null && this.last === null) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    return;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.first === null) {
      throw new Error("Cannot Dequeue an Empty Queue");
    }
    this.size--;
    let returnedNode = this.first;
    this.first = this.first.next;
    return returnedNode.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.first !== null) {
      return this.first.val;
    }
    return;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = Queue;
