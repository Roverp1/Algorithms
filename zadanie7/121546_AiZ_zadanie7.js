class Node {
  constructor(data, index = null) {
    this.data = data;
    this.next = null;
    this.index = index;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class.');
    }
  }

  getNextNode() {
    return this.next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(data) {
    const newHead = new Node(data, this.length);
    // increasing length by 1 
    this.length += 1;

    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;

    if (!tail) {
      this.head = new Node(data, this.length);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data, this.length));
    }

    // increasing length by 1 
    this.length += 1;

  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }

  /* ************************************ */
  // search for a value in data structure //
  /* ************************************ */
  searchNodeByData(data) {
    let currentNode = this.head;

    // keep searhing LL until value is found
    // or LL ended
    while(currentNode) {
      // console.log(currentNode);
      if (currentNode.data === data) {
        return currentNode;
      } else {
        currentNode = currentNode.getNextNode();
      }
    }

    // if while loop ended without `return`, then there is no such value in LL
    if (currentNode === null) {
      return (`There is no node with value of ${data}`);
    }
    
  }

  /* ********************************** */
  // sort LL using merge sort algorithm //
  /* ********************************** */
  sortLL(LL = this) {
    const length = LL.length;

    // Base case
    if (length === 1 || length === 0) return LL;

    const middleIndex = Math.floor(length / 2);
    const leftLL = new LinkedList();
    const rightLL = new LinkedList();

    // inserting value to our leftLL
    let currentNode = LL.head;
    while (currentNode.index < middleIndex) {
      leftLL.addToTail(currentNode.data);
      currentNode = currentNode.getNextNode();
    }

    // inserting value to our rightLL
    while(currentNode) {
      rightLL.addToTail(currentNode.data);
      currentNode = currentNode.getNextNode();
    }

    return this.mergeLL(this.sortLL(leftLL), this.sortLL(rightLL));
  }

  // merge two nodes separated while sorting
  mergeLL(leftLL, rightLL) {
    const resultLL = new LinkedList();

    // iterating until one of the LL is over
    while (leftLL.head && rightLL.head) {
      
      // whichever head node is smaller, goes to resultLL
      if (leftLL.head.data < rightLL.head.data) {
        resultLL.addToTail(leftLL.head.data);
        leftLL.removeHead();
      } else {
        resultLL.addToTail(rightLL.head.data);
        rightLL.removeHead();
      }

    }
    
    // if there is still nodes in left or right LL, add them to resultLL
    while (leftLL.head) {
      resultLL.addToTail(leftLL.head.data);
        leftLL.removeHead();
    }

    while (rightLL.head) {
      resultLL.addToTail(rightLL.head.data);
        rightLL.removeHead();
    }
    
    return resultLL;
  }

  // method for getting middle node in the LinkedList
  // useless since implementing length propertie for LL
  getMiddleNode(head = this.head) {
    if (!head) return head;

    let fast = head, slow = head;

    while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow;
  }

}


/* ***** */
// Tests //
/* ***** */
const arrForTest = [7, 6, 5, 4, 3, 32, 1, 0, 42, 12, -11, -55, 42];
const arrForTest2 = [0, 1, 2];
let testLL = new LinkedList();
let testLL2 = new LinkedList();

for (let i = 0; i < arrForTest.length; i++) {
  testLL.addToTail(arrForTest[i]);
}

for (let i = 0; i < arrForTest2.length; i++) {
  testLL2.addToTail(arrForTest2[i]);
}

console.log("Original LinkedList:")
testLL.printList();
testLL = testLL.sortLL();
console.log("Sorted LinkedList:")
testLL.printList(); // expected output: <head> -55 -11 0 1 3 4 5 6 7 12 32 42 42 <tail>
// console.log(testLL);

// testLL.printList();

// const elementToSearch = 3;
// console.log(`Searching for element ${elementToSearch}, results in:`);
// console.log(testLL.searchNodeByData(elementToSearch));

// testLL.printList();
// console.log(testLL.length);
// testLL2.printList();
// console.log(testLL2.length);
// console.log(testLL2);

// let mergedLL = testLL.mergeLL(testLL, testLL2);
// mergedLL.printList();
// console.log(mergedLL.length)
// mergedLL = mergedLL.sortLL();

// while (mergedLL.head) {
//   let currentNode = mergedLL.head;
//   // console.log(currentNode);
//   mergedLL.removeHead();
// }
