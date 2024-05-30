<div align="center">

| Algorytmy i złożoność | laboratorium |
|-----------------------|--------------|
| SAN                   |              |
| Autor                 | Yaroslav Zubiakha |
| E-mail                | 121546@student.san.edu.pl / yar.zubaha@proton.me |
| Nr albumu             | 121546       |
| Data                  | 30.05.2024   |
| Wersja                | 1.0          |

<br>

# **Zadanie nr 6** 

</div>

<br>

> ## Opis zadania
Zrównoważyć drzewo binarnych poszukiwań o przynajmniej 10 węzłach.

- Drzewo z przynajmniej 10 węzłami.
- Kod programu.
- Zrównoważenie drzewa

<br>

> ## Kod algorytmu
Znajduje się w pliku `./121546_AiZ_zadanie6.js`

<br>

> ## Przebieg obliczeń


1. Initialization: A new BinaryTree object `trr` is created with a value of `1`. The `numbers` array is initialized with a set of numbers.

2. Insertion: The insert method is called for each number in the `numbers` array. This method checks if the number is less than the current node’s value. If it is, the method checks if a left child node exists. If not, a new BinaryTree object is created with the number and inserted as the left child. If a left child already exists, the method is recursively called on the left child. If the number is not less than the current node’s value, the same process is followed for the right child.

3. Printing Unbalanced Tree: The `print` method is called on `trr` to print the unbalanced tree. This method recursively prints the value of each node and its children, indicating the structure of the tree.

4. Balancing the Tree: The `balancingBST` method is called on `trr` to create a balanced BST from the sorted array. This method finds the middle element of the array and makes it the root of the tree. It then recursively does the same for the left and right halves of the array, creating left and right child nodes, respectively.

5. Printing Balanced Tree: Finally, the `print` method is called on the balanced tree to print its structure.

This code demonstrates how to create, print, and balance a binary search tree. The balancing process involves creating a sorted array from the BST and then building a new, balanced BST from that array. The resulting tree has the property that for each node, the heights of its left and right subtrees differ by at most 1, ensuring optimal search times.
