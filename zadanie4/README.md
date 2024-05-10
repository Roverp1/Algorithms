<div align="center">

| Algorytmy i złożoność | laboratorium |
|-----------------------|--------------|
| SAN                   |              |
| Autor                 | Yaroslav Zubiakha |
| E-mail                | 121546@student.san.edu.pl / yar.zubaha@proton.me |
| Nr albumu             | 121546       |
| Data                  | 02.04.2024   |
| Wersja                | 1.0          |

<br>

# **Zadanie nr 4** 

</div>

<br>

> ## Opis zadania
Znaleźć najkrótszą ścieżkę w grafie za pomocą wybranego algorytmu.  

- Graf ważony, min. 10 węzłów.
- Kod programu.
- Obliczona najkrótsza ścieżka w grafie.

<br>

> ## Kod algorytmu
Znajduje się w pliku `./121546_AiZ_zadanie4.js`

<br>

> ## Przebieg obliczeń
1. Algorytm zaczyna od określenia wierzchołka startowego. Odległość od wierzchołka startowego do siebie samego jest zawsze równa 0.
2. Następnie algorytm szuka wierzchołka, który ma najmniejszą odległość i nie został jeszcze przetworzony. Wybrany wierzchołek jest oznaczany jako przetworzony.
3. Algorytm aktualizuje odległości do sąsiednich wierzchołków wybranego wierzchołka. Jeżeli nowa ścieżka do wierzchołka jest krótsza, niż dotychczas znana, to algorytm aktualizuje odległość i zapamiętuje wierzchołek, z którego przyszedł.
4. Kroki 2 i 3 są powtarzane, aż wszystkie wierzchołki zostaną przetworzone.
5. Na koniec algorytm wyznacza najkrótszą ścieżkę od wierzchołka startowego do wierzchołka docelowego, przechodząc rekurencyjnie przez wierzchołki od wierzchołka docelowego do wierzchołka startowego.
6. Algorytm wyświetla najkrótszą ścieżkę i jej wagę.
