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

# **Zadanie nr 5** 

</div>

<br>

> ## Opis zadania
Posortować zbiór składający się przynajmniej z 10 elementów.

- Zbiór do posortowania, min. 10 elementów.
- Kod programu.
- Posortowany zbiór.

<br>

> ## Kod algorytmu
Znajduje się w pliku `./121546_AiZ_zadanie5.js`

<br>

> ## Przebieg obliczeń

1. **Initialize** two arrays `testArr1` and `testArr2` with given values.
2. **Print** the initial state of `testArr1`.
3. **Call** the `bubbleSort` function with `testArr1` as an argument.
4. In the `bubbleSort` function:
    1. **Initialize** `swapCount` to 0 and `swapping` to true.
    2. **Enter** a while loop that continues as long as `swapping` is true.
    3. **Set** `swapping` to false.
    4. **Iterate** over the `input` array from the first element to the second last element.
    5. **If** the current element is greater than the next element:
        1. **Call** the `swap` function with the `input` array and the current and next indices.
        2. **Increment** `swapCount` by 1.
        3. **Set** `swapping` to true.
    6. **Repeat** steps 4.3 to 4.5 until `swapping` is false (i.e., the array is sorted).
    7. **Print** the number of swaps made.
    8. **Return** the sorted `input` array.
5. **Print** the sorted state of `testArr1`.
6. **Repeat** algorithm with additional test on `testArr2`.

This program sorts an array in ascending order using the Bubble Sort algorithm. The `swap` function is a helper function used to swap two elements in an array. The `bubbleSort` function sorts an array and counts the number of swaps made. The sorted array and the number of swaps are then printed to the console. The process is repeated for two test arrays. 

The Bubble Sort algorithm has a time complexity of $$O(n^2)$$, where $$n$$ is the number of elements in the array. This is because in the worst-case scenario, every pair of adjacent elements must be compared and possibly swapped. The space complexity is $$O(1)$$, as only a constant amount of additional space is required. This makes Bubble Sort an inefficient sorting algorithm for large datasets.
