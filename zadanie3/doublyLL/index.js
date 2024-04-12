const Node = require('./Node');
const DoublyLinkedList = require('./DoublyLinkedList');

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');

subway.removeHead();
subway.removeTail();

subway.removeByData('TimesSquare');
console.log("List 1:");
subway.printList();

// Create first instance of DoublyLinkedList
let list1 = new DoublyLinkedList();
list1.addToHead('Node 1');
list1.addToTail('Node 2');
list1.addToTail('Node 3');
console.log("List 2:");
list1.printList();

// Create second instance of DoublyLinkedList
let list2 = new DoublyLinkedList();
list2.addToHead('Node A');
list2.addToTail('Node B');
list2.addToTail('Node C');
console.log("List 3:");
list2.printList();
