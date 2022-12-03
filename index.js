class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node
  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert last node
  append(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //   display size, head, tail
  getSize() {
    console.log(this.size);
  }

  //   display head
  getHead() {
    if (this.size < 1) {
      return;
    }

    console.log(this.head.data);
  }

  //   display tail
  getTail() {
    if (this.size < 1) {
      return;
    }

    let current = this.head;
    let count = 0;
    while (count < this.size - 1) {
      count++;
      current = current.next;
    }

    console.log(current.data);
  }

  //   return value boolean
  contains(value) {
    let current = this.head;
    let bool;

    while (current) {
      if (current.data === value) {
        console.log(true);
        return;
      } else {
        bool = false;
      }
      current = current.next;
    }
    console.log(bool);
  }

  //   find value index
  find(value) {
    let current = this.head;
    let count = 0;
    let bool;

    while (current) {
      if (current.data === value) {
        console.log(count);
        return;
      } else {
        bool = null;
      }
      current = current.next;
      count++;
    }
    console.log(bool);
  }

  // insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      this.append(data);
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // node before index
      count++;
      current = current.next; // node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  //   remove last
  pop() {
    if (this.size < 1) {
      return;
    }

    let current = this.head;
    let count = 0;
    let previous;

    while (count < this.size - 1) {
      previous = current;
      count++;
      current = current.next;
    }

    previous.next = null;
    this.size--;
  }

  // print list data
  displayListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.prepend(100);
ll.prepend(200);
ll.prepend(300);
ll.append(400);

ll.displayListData();
