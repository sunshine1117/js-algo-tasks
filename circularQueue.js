class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line

    if(this.queue[this.write] === null) {
      this.queue[this.write] = item;
      const equeudEl = this.queue[this.write];

      if(this.write === this.max) {
        this.write = 0
      } else {
        this.write++;
      }

      return equeudEl;
    }



   return null;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if(this.queue[this.read] !== null) {
      const dequedEl = this.queue[this.read];
      this.queue[this.read] = null;

      if(this.read === this.max) {
        this.read = 0
      } else {
        this.read++;
      }

      return dequedEl;
    }



    // Only change code above this line
    return null;
  }
}

const queue = new CircularQueue(5);

console.log('equeeee')
console.log(queue.enqueue('a'))
console.log(queue.enqueue('b'))
console.log(queue.enqueue('c'))
console.log(queue.enqueue('d'))
console.log(queue.enqueue('e'))
console.log(queue.enqueue('f'))
console.log(queue.enqueue('g'))

console.log('dequeeee')
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.enqueue('f'))

console.log('enuque repead')
console.log(queue.enqueue('g'))
