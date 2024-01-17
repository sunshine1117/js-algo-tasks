class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(element) {
    const newNode = new Node(element)
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let curNode = this.head;

      while(curNode.next !== null) {
        curNode = curNode.next;
      }

      newNode.prev = curNode;
      curNode.next = newNode;

      this.tail = newNode;
    }

    this.length++;
  }

  remove(element) {
    if(this.length === 0) return null;

    if(this.head.data === element) {
      this.head = this.head.next;

      if(this.head !== null) {
        this.head.prev = null;
      }

    } else {
      let prevNode = this.head;
      let curNode = this.head.next;

      while(curNode) {
        if(curNode.data === element) {
          prevNode.next = curNode.next;

          if(curNode.next !== null) {
            curNode.next.prev = prevNode;
          }
        }

        prevNode = curNode;
        curNode = curNode.next;
      }
    }

    this.length--;
  }

  // reverse() {
  //   let tempNode = null;
  //   let curNode = this.head;

  //   while(curNode !== null) {
  //     tempNode = curNode
  //     const prev = curNode.prev;
  //     const next = curNode.next;

  //     tempNode.prev = next;
  //     tempNode.next = prev;

  //     curNode = curNode.next;
  //   }

  //   console.log(tempNode);

  //   this.head = tempNode;
  //   this.tail = this.head.prev;

  //   // console.log(this.head)
  // }

  // reverse() {
  //   let curNode = this.head;
  //   while (curNode !== null) {
  //     const tempPrev = curNode.prev;
  //     curNode.prev = curNode.next;
  //     curNode.next = tempPrev;
  //     curNode = curNode.prev;
  //   }

  //   // Swap head and tail after the reversal
  //   const temp = this.head;
  //   this.head = this.tail;
  //   this.tail = temp;

  //   console.log(this.head);
  // }

  reverse() {
    let curNode = this.head;
    while (curNode !== null) {
      [curNode.prev, curNode.next] = [curNode.next, curNode.prev];
      curNode = curNode.prev;
    }

    // Swap head and tail after the reversal
    [this.head, this.tail] = [this.tail, this.head];

    console.log(this.head);
  }
}

const newList = new DoubleLinkedList();

newList.add("foo")
newList.add("bar")
newList.add("bar1")
newList.add("bar2")
// console.log(newList);
newList.reverse();
console.log(newList);
