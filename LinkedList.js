class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  size() {
    return this.length;
  }

  add(item) {
    const node = new Node(item);

    if (this.head === null) {
      this.head = node
    } else {
      let currNode = this.head;

      while(currNode.next !== null) {
        currNode = currNode.next;
      }

      currNode.next = node;
    }

    this.length++
  }

  remove(item) {

    if (this.head === null) {
      return this.length;
    }

    if(item === this.head.data) {
      console.log(item)
      this.head = this.head.next;
      this.length--;

      return this.length;
    } else {
      console.log(item)
      let prevNode = this.head;
      let currNode;

      while(prevNode.next !== null) {
        currNode = prevNode.next;
        if(currNode.data === item) {
          prevNode.next = currNode.next;

          this.length--;

          return this.length;
        } else {
          prevNode = currNode;
        }
      }
    }

    if (this.length === 0) {
      this.head = null;
    }

    return this.length;
  }

  indexOf(element) {
    let index = 0;
    let curNode = this.head;

    while(curNode.next !== null) {
      if(curNode.data === element) {
        return index
      }

      curNode = curNode.next;
      index++;
    }

    return -1;
  }

  elementAt(index) {
    let elIndex = 0;
    let curNode = this.head;

    while(curNode.next !== null) {
      if(index === elIndex) {
        return curNode.node
      }

      curNode = curNode.next;
      elIndex +=1;
    }

    return undefined;
  }

  isEmpty() {
    return !this.length
  }

  removeAt(index) {
    let curIndex = 0;
    let deletedNode;

    if(index >= this.length || index < 0) {
      return null;
    }

    if(index === 0) {
      deletedNode = this.head;
      this.head = this.head.next;

    } else {

      let curNode = this.head;

      while(curIndex < index - 1) {
        curNode = curNode.next;
        curIndex++;
      }

      deletedNode = curNode.next;
      curNode.next = deletedNode.next;
    }

    this.length--;
    return deletedNode.data;
  }

  addAt(index, element) {
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(element);
    let dummyNode = new Node(null);
    dummyNode.next = this.head;

    let prevNode = dummyNode;
    let curNode = this.head;

    for (let i = 0; i < index; i++) {
      prevNode = curNode;
      curNode = curNode.next;
    }

    prevNode.next = newNode;
    newNode.next = curNode;
    this.head = dummyNode.next;

    this.length++;
  }
}
