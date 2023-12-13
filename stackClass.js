class Stack {
  constructor() {
    this.collection = []

  }

  print() {
    console.log(this.collection);
  }

  push(value) {
    this.collection.push(value)
  }

  pop() {
    return this.collection.pop();
  }

  peek() {
    const length = this.getLength();
    return this.collection[length - 1];
  }

  isEmpty() {
    return !this.getLength();
  }

  clear() {
    this.collection.length = 0;
  }

  getLength() {
    return this.collection.length;
  }
 }
