const LinkedList = require('./LinkedList');

const seasons = new LinkedList();
seasons.printList();

seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.printList();

seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();

seasons.removeHead();
console.log("List 1:");
seasons.printList();

const list1 = new LinkedList();
list1.addToHead('Node 1');
list1.addToTail('Node 2');
list1.addToTail('Node 3');
console.log("List 2:");
list1.printList();

const list2 = new LinkedList();
list2.addToHead('Node A');
list2.addToTail('Node B');
list2.addToTail('Node C');
console.log("List 3:");
list2.printList();
