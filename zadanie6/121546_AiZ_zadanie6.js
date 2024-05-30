class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinaryTree(value, this.depth + 1);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTree(value, this.depth + 1);
      } else {
        this.right.insert(value);
      }
    }
  }
  
  getNodeByValue(value) {
    if (this.value === value) {
      return this;
    } else if ((this.left) && (value < this.value)) {
        return this.left.getNodeByValue(value);
    } else if (this.right) {
      return this.right.getNodeByValue(value);
    } else {
      return null;
    }
  }

  print(level = 0) {
    let result = '';
    for (let i = 0; i < level; i++) {
      result += '----';
    }
    result += `(${this.value})\n`;
    if (this.left) {
      result += 'L: ' + this.left.print(level + 1);
    }
    if (this.right) {
      result += 'R: ' + this.right.print(level + 1);
    }
    return result;
  }

/*
=================================================================================
                 next two methods are balancing BST
=================================================================================
*/

  /* method that makes sorted array from current tree
  by traversing it depth first in Inorder */
  depthFirstTraversal(pushToArr = false, arrFromBST = []) {
    // recursively call function to left node 
    if (this.left) {
      this.left.depthFirstTraversal(pushToArr, arrFromBST);
    }

    // if pushToArr is true - creating array from current BST
    if (pushToArr === false) {
      console.log(`Depth=${this.depth}, Value=${this.value}`);
    } else {
      arrFromBST.push(this.value);
    }

    // recursively call function to right node 
    if (this.right) {
      this.right.depthFirstTraversal(pushToArr, arrFromBST);
    }

    // return the array
    if (pushToArr) return arrFromBST;
  }

  /* method that makes balanced BST from sorted array */ 
  balancingBST(arr = this.depthFirstTraversal(true), start = 0, end = arr.length - 1, depth = 1) {
    // base case:
    if (start > end) return null;

    const midIndex = parseInt((start + end) / 2);
    // middle of the array is the root node:
    const root = new BinaryTree(arr[midIndex], depth);

    root.left = root.balancingBST(arr, start, midIndex - 1, depth + 1);

    root.right = root.balancingBST(arr, midIndex + 1, end, depth + 1);

    return root;
  } 

};

const trr = new BinaryTree(1);
let numbers = [ 12, 20, 10, 13, 18, 22, 8, 11, 12, 14, 16, 19, 21, 25 ];
// let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numbers.length); // check number of nodes that will be added to the tree (currently 14)

for (let i = 0; i < numbers.length; i++) {
  trr.insert(numbers[i]);
}

console.log("unbalanced tree:\n", trr.print())
// console.log(`trr.depthFirstTraversal() = ${trr.depthFirstTraversal(true)}`);
const balancedTree = trr.balancingBST();
console.log("balanced tree:\n", balancedTree.print());
