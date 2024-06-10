<div align="center">

| Algorytmy i złożoność | laboratorium |
|-----------------------|--------------|
| SAN                   |              |
| Autor                 | Yaroslav Zubiakha |
| E-mail                | 121546@student.san.edu.pl / yar.zubaha@proton.me |
| Nr albumu             | 121546       |
| Data                  | 10.06.2024   |
| Wersja                | 1.0          |

<br>

# **Zadanie nr 7** 

</div>

<br>

> ## Opis zadania
1. Stworzyć strukturę danych przechowującą wartości.
2. Dodać min. 10 elementów o wartościach losowych.
3. Przystosować stworzoną strukturę do wyszukiwania.
4. Znaleźć przykładowy element.
<br>
- Na ocenę 5 praca powinna zawierać:  <br>
1. Strukturę danych (10 elementów z liczbami losowymi).  <br>
2. Przygotowanie struktury (sortowanie, równoważenie).  <br>
3. Kod algorytmów.  <br>
4. Przebieg obliczeń (tworzenie, przygotowanie, wyszukiwanie).  <br>

<br>

> ## Kod algorytmu
Znajduje się w pliku `./121546_AiZ_zadanie7.js`

<br>

> ## Przebieg obliczeń

1. Create a Data Structure to Store Values  
The program starts by defining a `Node` class and a `LinkedList` class. The `Node` class represents a single node in the linked list, containing data and a reference to the next node. The `LinkedList` class represents the entire list, containing methods to manipulate the list.

2. Add at Least 10 Elements with Random Values  
The program creates a new instance of the `LinkedList` class and adds elements to it using the `addToTail` method. This is done in a loop, either with a predefined array of test values or with randomly generated numbers.

3. Prepare the Created Structure for Searching  
The `LinkedList` class contains a `sortLL` method, which sorts the linked list using the merge sort algorithm. This method is called on the linked list instance, preparing it for efficient searching.

4. Find an Example Element  
The `searchNodeByData` method in the `LinkedList` class is used to search for a node with a specific data value in the linked list. This method is called with an example value to search for.

### Requirements for a Grade of 5

1. Data Structure (10 Elements with Random Numbers)  
This is represented by the `LinkedList` instance, which contains 10 nodes with random numbers as data.

2. Preparation of the Structure (Sorting, Balancing)  
The `sortLL` method sorts the linked list, preparing it for efficient searching.

3. Code of Algorithms  
The code provided contains several algorithms, including the merge sort algorithm used to sort the linked list, and the search algorithm used to find a node with a specific data value.

4. Course of Calculations (Creation, Preparation, Searching)  
The course of calculations includes creating the linked list and adding nodes to it, sorting the linked list, and searching for a node with a specific data value.

*~P.s. index implementation for `Node`'s makes little sense, and will currently break after calling `.removeHead` method (i.e. after deleting any node from Lined List).
Will be fixed only if required~*
