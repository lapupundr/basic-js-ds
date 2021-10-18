const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  head = null;
  length = 0;

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
        let current;
        if (this.length === 0) {
            this.head = new ListNode(value);
            // console.log('this.head: ', this.head);
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = new ListNode(value);
            // console.log('current.next: ', current.next);
            // console.log('this.head: ', this.head);
        }

        this.length++;
  }

  dequeue() {
    let headValue = this.head.value;
    this.head.value = this.head.next.value;
    this.head.next = this.head.next.next;
    return headValue;
    
  }

}
