class Queue {
  constructor() {
    this.collection  = []
  }

  print() {
    console.log(this.collection);
  }

  enqueue(value) {
    this.collection.unshift(value);
  }

  dequeue() {
    return this.collection.pop();
  }

  front() {
    return this.collection[this.getLength() - 1];
  }

  size() {
    return this.getLength()
  }

  isEmpty() {
    return !this.getLength();
  }

  getLength() {
    return this.collection.length;
  }
}

const queue = new Queue();

console.log(queue.enqueue("1"))
console.log(queue.enqueue("2"))
console.log(queue.enqueue("3"))
console.log(queue.enqueue("4"))
console.log(queue.enqueue("5"))
console.log(queue.dequeue())
console.log(queue.collection);
console.log(queue.enqueue("6"))
console.log(queue.front())
console.log(queue.size())
console.log(queue.isEmpty())
