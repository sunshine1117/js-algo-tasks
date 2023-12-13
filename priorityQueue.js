class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  enqueue(item) {
    const index = this.collection.findIndex(value => value[1] > item[1]);

    if(index !== -1) {
      this.collection.splice(index, 0, item)
    } else {
      this.collection.push(item)
    }
  }

  dequeue() {
    return this.collection.shift()
  }

  size() {
    return this.collection.length
  }

  front() {
    return this.collection[0]
  }

  isEmpty() {
    return this.collection.length === 0
  }


}

const newPriorityQueue = new PriorityQueue();

console.log(newPriorityQueue.enqueue(['foo', 1]))
console.log(newPriorityQueue.enqueue(['foo', 2]))
console.log(newPriorityQueue.enqueue(['foo', 3]))
console.log(newPriorityQueue.enqueue(['foo', 2]))

console.log(newPriorityQueue.enqueue(['foo', 5]))
console.log(newPriorityQueue.dequeue(['foo', 2]))
